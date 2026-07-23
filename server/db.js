const path = require('path');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');

const DB_PATH = process.env.MD_DB_PATH || path.join(__dirname, 'data.sqlite');
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS accounts (
  id           TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  email        TEXT UNIQUE NOT NULL,
  pass_hash    TEXT NOT NULL,
  role         TEXT NOT NULL DEFAULT 'user',
  avatar       TEXT,
  created_at   INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token       TEXT PRIMARY KEY,
  account_id  TEXT NOT NULL,
  created_at  INTEGER NOT NULL,
  FOREIGN KEY(account_id) REFERENCES accounts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS products (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  descr         TEXT,
  price         REAL NOT NULL,
  old_price     REAL,
  sku           TEXT,
  color         TEXT,
  category      TEXT DEFAULT 'scrubs',
  gender        TEXT DEFAULT 'unisex',
  brand         TEXT,
  sizes_top     TEXT,
  sizes_bottom  TEXT,
  pants_lens    TEXT,
  avail         TEXT NOT NULL DEFAULT 'stock',
  photo         TEXT,
  created_at    INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS news (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  body        TEXT,
  photo       TEXT,
  created_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id          TEXT PRIMARY KEY,
  account_id  TEXT,
  items_json  TEXT NOT NULL,
  total       REAL NOT NULL,
  status      TEXT NOT NULL DEFAULT 'new',
  created_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS presence (
  session_id  TEXT PRIMARY KEY,
  account_id  TEXT,
  seen_at     INTEGER NOT NULL
);
`);

// Seed admin on first run
const SEED_EMAIL = 'admin@darina-medical.com';
const existing = db.prepare('SELECT id FROM accounts WHERE email = ?').get(SEED_EMAIL);
if (!existing) {
  const id = 'seed-admin-' + Date.now().toString(36);
  const hash = bcrypt.hashSync('Medic-darina-best31', 10);
  db.prepare(
    `INSERT INTO accounts (id, name, email, pass_hash, role, created_at)
     VALUES (?, ?, ?, ?, 'admin', ?)`
  ).run(id, 'Darina', SEED_EMAIL, hash, Date.now());
  console.log('[db] seeded admin account:', SEED_EMAIL);
}

module.exports = db;
