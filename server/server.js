const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const multer = require('multer');
const bcrypt = require('bcryptjs');

const db = require('./db');

const PORT = Number(process.env.PORT || 3000);
const SITE_ROOT = path.resolve(__dirname, '..');
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '4mb' }));

// ---------- helpers ----------
const now = () => Date.now();
const newId = (prefix = '') => prefix + crypto.randomBytes(9).toString('base64url');
const parseJSON = (s, fallback) => { try { return JSON.parse(s); } catch { return fallback; } };

function serializeAccount(a) {
  if (!a) return null;
  return { id: a.id, name: a.name, email: a.email, role: a.role, avatar: a.avatar || null, createdAt: a.created_at };
}
function serializeProduct(p) {
  return {
    id: p.id,
    title: p.title,
    desc: p.descr || '',
    price: p.price,
    oldPrice: p.old_price,
    sku: p.sku || '',
    color: p.color || '',
    category: p.category || 'scrubs',
    gender: p.gender || 'unisex',
    brand: p.brand || '',
    sizesTop: parseJSON(p.sizes_top, []),
    sizesBottom: parseJSON(p.sizes_bottom, []),
    pantsLengths: parseJSON(p.pants_lens, []),
    avail: p.avail,
    photo: p.photo || null,
    createdAt: p.created_at,
  };
}
function serializeNews(n) {
  return { id: n.id, title: n.title, body: n.body || '', photo: n.photo || null, createdAt: n.created_at };
}
function serializeOrder(o) {
  return {
    id: o.id, accountId: o.account_id,
    userName: o.acc_name || 'Гість', userEmail: o.acc_email || '',
    items: parseJSON(o.items_json, []), total: o.total, status: o.status, createdAt: o.created_at,
  };
}

function currentUser(req) {
  const auth = req.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return null;
  const row = db.prepare(
    `SELECT a.* FROM sessions s JOIN accounts a ON a.id = s.account_id WHERE s.token = ?`
  ).get(token);
  return row || null;
}
function requireAuth(req, res) {
  const u = currentUser(req);
  if (!u) { res.status(401).json({ error: 'auth_required' }); return null; }
  return u;
}
function requireAdmin(req, res) {
  const u = requireAuth(req, res);
  if (!u) return null;
  if (u.role !== 'admin') { res.status(403).json({ error: 'admin_required' }); return null; }
  return u;
}

// ---------- uploads ----------
const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => {
      const ext = (path.extname(file.originalname || '') || '.jpg').toLowerCase().replace(/[^.a-z0-9]/g, '');
      cb(null, newId('') + ext);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, /^image\//.test(file.mimetype)),
});

app.post('/api/uploads', (req, res) => {
  if (!requireAuth(req, res)) return;
  upload.single('file')(req, res, (err) => {
    if (err) return res.status(400).json({ error: 'upload_failed', detail: err.message });
    if (!req.file) return res.status(400).json({ error: 'no_file' });
    res.json({ url: '/uploads/' + req.file.filename });
  });
});

app.use('/uploads', express.static(UPLOAD_DIR, { maxAge: '30d', immutable: false }));

// ---------- auth ----------
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: 'missing_fields' });
  const emailNorm = String(email).trim().toLowerCase();
  const exists = db.prepare('SELECT 1 FROM accounts WHERE email = ?').get(emailNorm);
  if (exists) return res.status(409).json({ error: 'email_taken' });
  const id = newId('u_');
  const hash = bcrypt.hashSync(String(password), 10);
  db.prepare(
    `INSERT INTO accounts (id, name, email, pass_hash, role, created_at) VALUES (?, ?, ?, ?, 'user', ?)`
  ).run(id, String(name).trim(), emailNorm, hash, now());
  const token = newId('t_');
  db.prepare('INSERT INTO sessions (token, account_id, created_at) VALUES (?, ?, ?)').run(token, id, now());
  const acc = db.prepare('SELECT * FROM accounts WHERE id = ?').get(id);
  res.json({ token, user: serializeAccount(acc) });
});

app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'missing_fields' });
  const emailNorm = String(email).trim().toLowerCase();
  const acc = db.prepare('SELECT * FROM accounts WHERE email = ?').get(emailNorm);
  if (!acc || !bcrypt.compareSync(String(password), acc.pass_hash)) {
    return res.status(401).json({ error: 'bad_credentials' });
  }
  const token = newId('t_');
  db.prepare('INSERT INTO sessions (token, account_id, created_at) VALUES (?, ?, ?)').run(token, acc.id, now());
  res.json({ token, user: serializeAccount(acc) });
});

app.post('/api/auth/signout', (req, res) => {
  const auth = req.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (token) db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
  res.json({ ok: true });
});

app.get('/api/auth/me', (req, res) => {
  const u = currentUser(req);
  res.json({ user: serializeAccount(u) });
});

app.patch('/api/auth/me', (req, res) => {
  const u = requireAuth(req, res); if (!u) return;
  const { name, avatar } = req.body || {};
  const nextName = typeof name === 'string' && name.trim() ? name.trim() : u.name;
  const nextAvatar = typeof avatar === 'string' ? avatar : u.avatar;
  db.prepare('UPDATE accounts SET name = ?, avatar = ? WHERE id = ?').run(nextName, nextAvatar, u.id);
  const acc = db.prepare('SELECT * FROM accounts WHERE id = ?').get(u.id);
  res.json({ user: serializeAccount(acc) });
});

// ---------- products ----------
app.get('/api/products', (req, res) => {
  const rows = db.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
  res.json({ products: rows.map(serializeProduct) });
});

app.post('/api/products', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const b = req.body || {};
  if (!b.title || b.price == null) return res.status(400).json({ error: 'missing_fields' });
  const id = newId('c_');
  db.prepare(
    `INSERT INTO products (id, title, descr, price, old_price, sku, color, category, gender, brand,
                          sizes_top, sizes_bottom, pants_lens, avail, photo, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    id,
    String(b.title).trim(),
    String(b.desc || ''),
    Number(b.price),
    b.oldPrice != null ? Number(b.oldPrice) : null,
    String(b.sku || ''),
    String(b.color || ''),
    String(b.category || 'scrubs'),
    String(b.gender || 'unisex'),
    String(b.brand || ''),
    JSON.stringify(Array.isArray(b.sizesTop) ? b.sizesTop : []),
    JSON.stringify(Array.isArray(b.sizesBottom) ? b.sizesBottom : []),
    JSON.stringify(Array.isArray(b.pantsLengths) ? b.pantsLengths : []),
    b.avail === 'order' ? 'order' : 'stock',
    b.photo || null,
    now()
  );
  const row = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
  res.json({ product: serializeProduct(row) });
});

app.delete('/api/products/:id', (req, res) => {
  if (!requireAdmin(req, res)) return;
  db.prepare('DELETE FROM products WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ---------- news ----------
app.get('/api/news', (req, res) => {
  const rows = db.prepare('SELECT * FROM news ORDER BY created_at DESC').all();
  res.json({ news: rows.map(serializeNews) });
});

app.post('/api/news', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const b = req.body || {};
  if (!b.title) return res.status(400).json({ error: 'missing_fields' });
  const id = newId('n_');
  db.prepare('INSERT INTO news (id, title, body, photo, created_at) VALUES (?, ?, ?, ?, ?)')
    .run(id, String(b.title).trim(), String(b.body || ''), b.photo || null, now());
  const row = db.prepare('SELECT * FROM news WHERE id = ?').get(id);
  res.json({ news: serializeNews(row) });
});

app.delete('/api/news/:id', (req, res) => {
  if (!requireAdmin(req, res)) return;
  db.prepare('DELETE FROM news WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ---------- orders ----------
app.get('/api/orders', (req, res) => {
  const u = requireAuth(req, res); if (!u) return;
  const sql = `
    SELECT o.*, a.name AS acc_name, a.email AS acc_email
    FROM orders o LEFT JOIN accounts a ON a.id = o.account_id`;
  const rows = u.role === 'admin'
    ? db.prepare(sql + ' ORDER BY o.created_at DESC').all()
    : db.prepare(sql + ' WHERE o.account_id = ? ORDER BY o.created_at DESC').all(u.id);
  res.json({ orders: rows.map(serializeOrder) });
});

app.post('/api/orders', (req, res) => {
  const u = currentUser(req);
  const { items, total } = req.body || {};
  if (!Array.isArray(items) || !items.length || total == null) return res.status(400).json({ error: 'bad_order' });
  const id = newId('o_');
  db.prepare(
    `INSERT INTO orders (id, account_id, items_json, total, status, created_at) VALUES (?, ?, ?, ?, 'new', ?)`
  ).run(id, u ? u.id : null, JSON.stringify(items), Number(total), now());
  const row = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
  res.json({ order: serializeOrder(row) });
});

// ---------- presence ----------
app.post('/api/presence', (req, res) => {
  const u = currentUser(req);
  const sid = String((req.body && req.body.sessionId) || '').slice(0, 64);
  if (!sid) return res.status(400).json({ error: 'no_sid' });
  db.prepare(
    `INSERT INTO presence (session_id, account_id, seen_at) VALUES (?, ?, ?)
     ON CONFLICT(session_id) DO UPDATE SET account_id = excluded.account_id, seen_at = excluded.seen_at`
  ).run(sid, u ? u.id : null, now());
  const cutoff = now() - 30_000;
  db.prepare('DELETE FROM presence WHERE seen_at < ?').run(cutoff);
  const count = db.prepare('SELECT COUNT(*) AS c FROM presence WHERE seen_at >= ?').get(cutoff).c;
  res.json({ online: count });
});

// ---------- static site ----------
app.use(express.static(SITE_ROOT, {
  index: 'index.html',
  setHeaders(res, p) {
    if (/\.(html|js|css)$/.test(p)) res.setHeader('Cache-Control', 'no-cache');
  },
}));
app.get(/^\/(?!api\/|uploads\/).*/, (req, res) => {
  res.sendFile(path.join(SITE_ROOT, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[medic-dariya] listening on http://127.0.0.1:${PORT}`);
});
