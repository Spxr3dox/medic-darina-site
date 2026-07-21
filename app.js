/* MEDIC DARIYA — SPA: i18n, theme, auth+DB, catalog, cart, admin, cabinet, presence. */

// =============================================================================
// 1. Translations dictionary
// =============================================================================
const translations = {
  ua: {
    'nav.home': 'Головна', 'nav.shop': 'Магазин', 'nav.auth': 'Акаунт', 'nav.admin': 'Адмін',

    'hero.badge': 'Преміум медичний одяг зі США',
    'hero.slogan1': 'Костюм лікаря —',
    'hero.slogan2': 'не медична форма,',
    'hero.slogan3': 'а власний медичний бренд.',
    'hero.desc': "Ексклюзивна колекція Cherokee, Grey's Anatomy, Figs та інших світових брендів. Реальні розміри, чесні ціни та особистий підхід від лікаря-анестезіолога з 20-річним стажем.",
    'hero.cta': 'Перейти до магазину', 'hero.more': 'Про бренд',
    'hero.stat1': 'років у медицині', 'hero.stat2': 'оригінальні бренди', 'hero.stat3': 'персональний підбір',

    'feat1.title': 'Досвід лікаря',
    'feat1.desc': 'Дарія — анестезіолог-реаніматолог. Кожен костюм тестується на реальному робочому дні.',
    'feat2.title': 'Оригінал зі США',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies, Tofflen — прямі поставки, без підробок.",
    'feat3.title': 'Особистий підхід',
    'feat3.desc': 'Допоможемо з розмірами, порадимо крій, покажемо реальні фото — як подрузі.',

    'auth.title': 'Створіть акаунт', 'auth.sub': 'Щоб перейти до магазину, зареєструйтесь',
    'auth.titleIn': 'Ласкаво просимо', 'auth.subIn': 'Увійдіть у свій акаунт',
    'auth.modeSignup': 'Реєстрація', 'auth.modeSignin': 'Вхід',
    'auth.name': "Ім'я", 'auth.email': 'Пошта', 'auth.pass': 'Пароль', 'auth.pass2': 'Підтвердіть пароль',
    'auth.submit': 'Створити акаунт', 'auth.submitIn': 'Увійти', 'auth.back': 'Назад',
    'auth.signout': 'Вийти', 'auth.goShop': 'До магазину', 'auth.goAdmin': 'Адмін-панель',
    'auth.roleAdmin': 'Адміністратор',

    'err.name': "Введіть ім'я", 'err.email': 'Некоректна пошта',
    'err.pass': 'Мінімум 6 символів', 'err.pass2': 'Паролі не збігаються',
    'err.exists': 'Такий email вже зареєстровано', 'err.badLogin': 'Невірна пошта або пароль',
    'err.required': "Обов'язкове поле", 'err.photo': 'Оберіть фото товару',

    'shop.title': 'Каталог', 'shop.sub': 'Свіжа колекція медичного одягу',
    'shop.buy': 'Купити', 'shop.size': 'Розмір', 'shop.qty': 'Кількість',
    'shop.stock': 'В наявності', 'shop.order': 'Під замовлення',

    'cart.label': 'Кошик', 'cart.items': 'товарів', 'cart.currency': '₴',

    'sheet.title': 'Дякуємо за замовлення!',
    'sheet.desc': "Для підтвердження та уточнення деталей оберіть зручний спосіб зв'язку з нашим менеджером:",
    'sheet.cancel': 'Скасувати',

    'toast.added': 'Додано до кошика', 'toast.hello': 'Ласкаво просимо',
    'toast.signedIn': 'Успішний вхід', 'toast.signedOut': 'Ви вийшли з акаунту',
    'toast.productAdded': 'Товар додано в магазин', 'toast.productRemoved': 'Товар видалено',
    'toast.avatarUpdated': 'Аватар оновлено', 'toast.nameUpdated': "Ім'я оновлено",
    'toast.orderPlaced': 'Замовлення оформлено',

    'cab.orders': 'замовлень', 'cab.spent': 'сума',
    'cab.historyTitle': 'Мої замовлення', 'cab.historyEmpty': 'Ви ще не робили замовлень. Час почати!',
    'cab.namePrompt': 'Нове імʼя:', 'cab.orderStatus': 'В обробці',

    'admin.title': 'Адмін-панель', 'admin.sub': 'Керуйте товарами та замовленнями',
    'admin.formTitle': 'Новий товар',
    'admin.name': 'Назва', 'admin.desc': 'Опис', 'admin.price': 'Ціна за одиницю (₴)',
    'admin.avail': 'Доступність', 'admin.availStock': 'В наявності', 'admin.availOrder': 'Під замовлення',
    'admin.photo': 'Фото товару', 'admin.photoDrop': 'Натисніть, щоб обрати фото',
    'admin.add': 'Додати товар', 'admin.addHint': 'Додати новий товар можна прямо з каталогу',
    'admin.listTitle': 'Мої товари', 'admin.empty': 'Поки що немає доданих товарів. Кнопка «+ Додати товар» — в каталозі.',
    'admin.delete': 'Видалити', 'admin.count': 'товарів',
    'admin.templateBadge': 'ШАБЛОН', 'admin.confirmDel': 'Видалити цей товар з магазину?',
    'admin.ordersTitle': 'Замовлення клієнтів', 'admin.ordersEmpty': 'Замовлень поки немає.',
    'admin.onlineTitle': 'Онлайн зараз', 'admin.onlineEmpty': 'Ніхто не онлайн.',
    'admin.onlineHint': 'Дані з цього браузера', 'admin.online': 'онлайн',

    'footer.rights': '© 2026 MEDIC DARIYA. Усі права захищено.',

    'prod.d1.title': "Жіночий костюм «Dariya Top»",
    'prod.d2.title': 'Чоловічий хірургічний костюм',
    'prod.d3.title': 'Premium Medical Scrub',
    'prod.d4.title': 'Класичний медичний халат',
  },
  en: {
    'nav.home': 'Home', 'nav.shop': 'Shop', 'nav.auth': 'Account', 'nav.admin': 'Admin',

    'hero.badge': 'Premium US-made medical apparel',
    'hero.slogan1': "A doctor's suit isn't",
    'hero.slogan2': 'a medical uniform,',
    'hero.slogan3': "it's your own medical brand.",
    'hero.desc': "An exclusive selection of Cherokee, Grey's Anatomy, Figs and other world-class brands. Honest sizing, fair prices and a personal touch from an anesthesiologist with 20 years of experience.",
    'hero.cta': 'Go to Shop', 'hero.more': 'About the brand',
    'hero.stat1': 'years in medicine', 'hero.stat2': 'original brands', 'hero.stat3': 'personal picking',

    'feat1.title': 'Doctor-led',
    'feat1.desc': 'Dariya is a practicing anesthesiologist. Every suit is tested on a real shift.',
    'feat2.title': 'Authentic USA',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies, Tofflen — direct import, no fakes.",
    'feat3.title': 'Personal touch',
    'feat3.desc': "We help with sizing, cuts and share real photos — like a friend would.",

    'auth.title': 'Create an account', 'auth.sub': 'Register to enter the shop',
    'auth.titleIn': 'Welcome back', 'auth.subIn': 'Sign in to your account',
    'auth.modeSignup': 'Sign up', 'auth.modeSignin': 'Sign in',
    'auth.name': 'Full name', 'auth.email': 'Email', 'auth.pass': 'Password', 'auth.pass2': 'Confirm password',
    'auth.submit': 'Create account', 'auth.submitIn': 'Sign in', 'auth.back': 'Back',
    'auth.signout': 'Sign out', 'auth.goShop': 'Go to shop', 'auth.goAdmin': 'Admin panel',
    'auth.roleAdmin': 'Administrator',

    'err.name': 'Please enter your name', 'err.email': 'Invalid email',
    'err.pass': 'At least 6 characters', 'err.pass2': 'Passwords do not match',
    'err.exists': 'This email is already registered', 'err.badLogin': 'Invalid email or password',
    'err.required': 'This field is required', 'err.photo': 'Please choose a product photo',

    'shop.title': 'Shop', 'shop.sub': 'Fresh medical apparel collection',
    'shop.buy': 'Buy', 'shop.size': 'Size', 'shop.qty': 'Quantity',
    'shop.stock': 'In stock', 'shop.order': 'On order',

    'cart.label': 'Cart', 'cart.items': 'items', 'cart.currency': 'UAH',

    'sheet.title': 'Thank you for your order!',
    'sheet.desc': 'To confirm and clarify the details, please choose a convenient way to contact our manager:',
    'sheet.cancel': 'Cancel',

    'toast.added': 'Added to cart', 'toast.hello': 'Welcome',
    'toast.signedIn': 'Signed in', 'toast.signedOut': 'Signed out',
    'toast.productAdded': 'Product added to shop', 'toast.productRemoved': 'Product removed',
    'toast.avatarUpdated': 'Avatar updated', 'toast.nameUpdated': 'Name updated',
    'toast.orderPlaced': 'Order placed',

    'cab.orders': 'orders', 'cab.spent': 'spent',
    'cab.historyTitle': 'My orders', 'cab.historyEmpty': "You haven't placed any orders yet. Let's start!",
    'cab.namePrompt': 'New name:', 'cab.orderStatus': 'Processing',

    'admin.title': 'Admin panel', 'admin.sub': 'Manage products and orders',
    'admin.formTitle': 'New product',
    'admin.name': 'Title', 'admin.desc': 'Description', 'admin.price': 'Price per unit (UAH)',
    'admin.avail': 'Availability', 'admin.availStock': 'In stock', 'admin.availOrder': 'On order',
    'admin.photo': 'Product photo', 'admin.photoDrop': 'Click to choose a photo',
    'admin.add': 'Add product', 'admin.addHint': 'Add a new product right from the catalog',
    'admin.listTitle': 'My products', 'admin.empty': 'No products yet. Use "+ Add product" in the catalog.',
    'admin.delete': 'Delete', 'admin.count': 'items',
    'admin.templateBadge': 'TEMPLATE', 'admin.confirmDel': 'Remove this product from the shop?',
    'admin.ordersTitle': 'Customer orders', 'admin.ordersEmpty': 'No orders yet.',
    'admin.onlineTitle': 'Online now', 'admin.onlineEmpty': 'Nobody online.',
    'admin.onlineHint': 'From this browser', 'admin.online': 'online',

    'footer.rights': '© 2026 MEDIC DARIYA. All rights reserved.',

    'prod.d1.title': "Women's set «Dariya Top»",
    'prod.d2.title': "Men's surgical scrubs",
    'prod.d3.title': 'Premium Medical Scrub',
    'prod.d4.title': 'Classic medical gown',
  }
};

// =============================================================================
// 2. "Database" over localStorage
// =============================================================================
const DB = {
  _read(key, fb) { try { return JSON.parse(localStorage.getItem(key)) ?? fb; } catch { return fb; } },
  _write(key, v) { localStorage.setItem(key, JSON.stringify(v)); },
  accounts:        { get: () => DB._read('md_accounts', []),        set: (v) => DB._write('md_accounts', v) },
  products_custom: { get: () => DB._read('md_products_custom', []), set: (v) => DB._write('md_products_custom', v) },
  deleted_builtins:{ get: () => DB._read('md_deleted_builtins', []), set: (v) => DB._write('md_deleted_builtins', v) },
  orders:          { get: () => DB._read('md_orders', []),          set: (v) => DB._write('md_orders', v) },
  session:         { get: () => DB._read('md_session', null),       set: (v) => DB._write('md_session', v) },
  online:          { get: () => DB._read('md_online', {}),          set: (v) => DB._write('md_online', v) },
};

async function hashPassword(pass) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pass));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function seedAdmin() {
  const accounts = DB.accounts.get();
  const email = 'admin@darina-medical.com';
  if (accounts.some(a => a.email === email)) return;
  const passwordHash = await hashPassword('Medic-darina-best31');
  accounts.push({ name: 'Darina', email, passwordHash, role: 'admin', avatar: null });
  DB.accounts.set(accounts);
}

// Look up the full account record for the current session (has avatar).
function currentAccount() {
  if (!state.user) return null;
  return DB.accounts.get().find(a => a.email === state.user.email) || null;
}

function updateAccount(patch) {
  const accounts = DB.accounts.get();
  const idx = accounts.findIndex(a => a.email === state.user?.email);
  if (idx === -1) return;
  accounts[idx] = { ...accounts[idx], ...patch };
  DB.accounts.set(accounts);
  // Refresh session snapshot (name only; keep role & email)
  if (patch.name) state.user.name = patch.name;
  DB.session.set(state.user);
}

// =============================================================================
// 3. Application state
// =============================================================================
const state = {
  lang: localStorage.getItem('md_lang') || 'ua',
  theme: localStorage.getItem('md_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  currentPage: 'home',
  authMode: 'signup',
  user: DB.session.get(),
  cart: [],
  adminPhotoData: null,
  adminAvail: 'stock',
  sessionId: sessionStorage.getItem('md_sid') || (() => {
    const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('md_sid', id);
    return id;
  })(),
};

const defaultProducts = [
  { id: 'd1', price: 1650, sizes: ['S','M','L','XL'],   mono: 'DT', pg: 'linear-gradient(135deg,#0d9fb4,#053742)', avail: 'stock', builtin: true },
  { id: 'd2', price: 1490, sizes: ['M','L','XL','XXL'], mono: 'CS', pg: 'linear-gradient(135deg,#1e1e28,#3a3a4a)', avail: 'stock', builtin: true },
  { id: 'd3', price: 2100, sizes: ['S','M','L'],        mono: 'PS', pg: 'linear-gradient(135deg,#006675,#003d47)', avail: 'order', builtin: true },
  { id: 'd4', price: 1250, sizes: ['S','M','L','XL'],   mono: 'CG', pg: 'linear-gradient(135deg,#e0e5ec,#a7b3c1)', avail: 'stock', builtin: true },
];

function allProducts() {
  const deleted = new Set(DB.deleted_builtins.get());
  const builtins = defaultProducts.filter(p => !deleted.has(p.id));
  const custom = DB.products_custom.get().map(p => ({
    id: p.id, price: p.price, sizes: ['S','M','L','XL'],
    title: p.title, desc: p.desc, photo: p.photo, avail: p.avail, builtin: false,
  }));
  return [...builtins, ...custom];
}

function productTitle(p) {
  return p.builtin ? t(`prod.${p.id}.title`) : (p.title || '');
}

// =============================================================================
// 4. i18n render
// =============================================================================
function t(key) { return translations[state.lang][key] ?? key; }

function updateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  // Language segmented control
  const thumb = document.getElementById('lang-thumb');
  const ua = document.querySelector('[data-lang="ua"]');
  const en = document.querySelector('[data-lang="en"]');
  if (thumb && ua && en) {
    const active = state.lang === 'ua' ? ua : en;
    const inactive = state.lang === 'ua' ? en : ua;
    thumb.style.transform = state.lang === 'ua' ? 'translateX(0)' : 'translateX(100%)';
    active.classList.add('text-white'); active.classList.remove('text-ios-text2','dark:text-ios-darkText2');
    inactive.classList.remove('text-white'); inactive.classList.add('text-ios-text2','dark:text-ios-darkText2');
  }

  document.documentElement.lang = state.lang === 'ua' ? 'uk' : 'en';

  renderShop();
  renderCartPill();
  renderHelloUser();
  renderCabinet();
  renderAuthMode();
  renderAdminList();
  renderAdminOrders();
  renderOnline();
  updateNavThumb();
}

// =============================================================================
// 5. Theme
// =============================================================================
function applyTheme() { document.documentElement.classList.toggle('dark', state.theme === 'dark'); }
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('md_theme', state.theme);
  applyTheme();
}

// =============================================================================
// 6. Page navigation
// =============================================================================
function go(page) {
  if (page === 'shop' && !state.user) page = 'auth';
  if (page === 'admin' && state.user?.role !== 'admin') page = 'auth';

  state.currentPage = page;
  document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.remove('hidden');
    target.style.animation = 'none';
    void target.offsetWidth;
    target.style.animation = '';
  }
  updateNavThumb();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavThumb() {
  const nav = document.getElementById('main-nav');
  const thumb = document.getElementById('nav-thumb');
  if (!nav || !thumb) return;

  document.querySelectorAll('[data-admin-only]').forEach(el => {
    el.classList.toggle('hidden', state.user?.role !== 'admin');
  });

  const active = nav.querySelector(`[data-nav="${state.currentPage}"]`);
  if (!active || active.classList.contains('hidden')) { thumb.style.opacity = 0; return; }
  thumb.style.opacity = 1;
  const navRect = nav.getBoundingClientRect();
  const btnRect = active.getBoundingClientRect();
  thumb.style.width = btnRect.width + 'px';
  thumb.style.transform = `translateX(${btnRect.left - navRect.left - 2}px)`;

  nav.querySelectorAll('.nav-btn').forEach(b => {
    const isActive = b === active;
    b.classList.toggle('text-white', isActive);
    b.classList.toggle('text-ios-text2', !isActive);
    b.classList.toggle('dark:text-ios-darkText2', !isActive);
  });
}

// =============================================================================
// 7. Auth
// =============================================================================
function setFieldError(name, msgKey) {
  const errEl = document.querySelector(`[data-err="${name}"]`);
  if (!errEl) return;
  const wrap = errEl.closest('.ios-field') || errEl.previousElementSibling?.closest('.ios-field');
  if (msgKey) { wrap?.classList.add('invalid'); errEl.textContent = t(msgKey); }
  else { wrap?.classList.remove('invalid'); errEl.textContent = ''; }
}

function clearAuthErrors() {
  ['name','email','password','password2'].forEach(k => setFieldError(k, null));
}

function renderAuthMode() {
  const signedCard = document.getElementById('auth-signed');
  const formCard = document.getElementById('auth-form-card');
  if (!signedCard || !formCard) return;

  if (state.user) {
    formCard.classList.add('hidden');
    signedCard.classList.remove('hidden');
    return;
  }

  signedCard.classList.add('hidden');
  formCard.classList.remove('hidden');

  const thumb = document.getElementById('auth-mode-thumb');
  document.querySelectorAll('.auth-mode-btn').forEach(b => {
    const on = b.getAttribute('data-mode') === state.authMode;
    b.classList.toggle('text-black', on);
    b.classList.toggle('dark:text-white', on);
    b.classList.toggle('text-ios-text2', !on);
    b.classList.toggle('dark:text-ios-darkText2', !on);
  });
  if (thumb) thumb.style.transform = state.authMode === 'signup' ? 'translateX(0)' : 'translateX(100%)';

  document.querySelectorAll('#auth-form [data-only]').forEach(el => {
    el.classList.toggle('hidden', el.getAttribute('data-only') !== state.authMode);
  });

  const heading = document.getElementById('auth-heading');
  const sub = document.getElementById('auth-sub');
  const submitLabel = document.getElementById('auth-submit-label');
  if (state.authMode === 'signup') {
    heading.textContent = t('auth.title'); sub.textContent = t('auth.sub');
    submitLabel.textContent = t('auth.submit');
  } else {
    heading.textContent = t('auth.titleIn'); sub.textContent = t('auth.subIn');
    submitLabel.textContent = t('auth.submitIn');
  }
  clearAuthErrors();
}

async function handleSignup(fd) {
  let ok = true;
  const name = (fd.get('name') || '').trim();
  const email = (fd.get('email') || '').trim().toLowerCase();
  const pass = fd.get('password') || '';
  const pass2 = fd.get('password2') || '';

  if (!name) { setFieldError('name', 'err.name'); ok = false; } else setFieldError('name', null);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('email', 'err.email'); ok = false; } else setFieldError('email', null);
  if (pass.length < 6) { setFieldError('password', 'err.pass'); ok = false; } else setFieldError('password', null);
  if (pass !== pass2 || !pass2) { setFieldError('password2', 'err.pass2'); ok = false; } else setFieldError('password2', null);
  if (!ok) return;

  const accounts = DB.accounts.get();
  if (accounts.some(a => a.email === email)) { setFieldError('email', 'err.exists'); return; }

  const passwordHash = await hashPassword(pass);
  accounts.push({ name, email, passwordHash, role: 'user', avatar: null });
  DB.accounts.set(accounts);

  state.user = { name, email, role: 'user' };
  DB.session.set(state.user);
  toast(`${t('toast.hello')}, ${name}!`);
  updateDOM();
  setTimeout(() => go('auth'), 250);   // → cabinet
  presenceHeartbeat();
}

async function handleSignin(fd) {
  const email = (fd.get('email') || '').trim().toLowerCase();
  const pass = fd.get('password') || '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('email', 'err.email'); return; }
  setFieldError('email', null);
  if (pass.length < 6) { setFieldError('password', 'err.pass'); return; }
  setFieldError('password', null);

  const passwordHash = await hashPassword(pass);
  const account = DB.accounts.get().find(a => a.email === email && a.passwordHash === passwordHash);
  if (!account) { setFieldError('password', 'err.badLogin'); return; }

  state.user = { name: account.name, email: account.email, role: account.role || 'user' };
  DB.session.set(state.user);
  toast(t('toast.signedIn'));
  updateDOM();
  setTimeout(() => go('auth'), 250);   // → cabinet
  presenceHeartbeat();
}

function signOut() {
  presenceRemove();
  state.user = null;
  localStorage.removeItem('md_session');
  state.authMode = 'signin';
  updateDOM();
  toast(t('toast.signedOut'));
  go('home');
}

function bindAuth() {
  const form = document.getElementById('auth-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (state.authMode === 'signup') handleSignup(fd);
    else handleSignin(fd);
  });

  document.querySelectorAll('.auth-mode-btn').forEach(b => {
    b.addEventListener('click', () => {
      state.authMode = b.getAttribute('data-mode');
      renderAuthMode();
    });
  });

  document.getElementById('btn-signout').addEventListener('click', signOut);
  document.getElementById('btn-admin-enter').addEventListener('click', () => go('admin'));

  // Avatar upload
  document.getElementById('avatar-input').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 1.5 * 1024 * 1024) { alert('Файл більший за 1.5 MB.'); return; }
    const dataUrl = await new Promise(res => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.readAsDataURL(file);
    });
    updateAccount({ avatar: dataUrl });
    toast(t('toast.avatarUpdated'));
    renderCabinet();
    presenceHeartbeat();
  });

  // Name edit
  document.getElementById('btn-edit-name').addEventListener('click', () => {
    const cur = state.user?.name || '';
    const next = prompt(t('cab.namePrompt'), cur);
    if (!next || !next.trim() || next.trim() === cur) return;
    updateAccount({ name: next.trim() });
    toast(t('toast.nameUpdated'));
    renderCabinet();
    presenceHeartbeat();
  });
}

// =============================================================================
// 8. Cabinet render
// =============================================================================
function renderCabinet() {
  if (!state.user) return;
  const acc = currentAccount();
  const nameEl = document.getElementById('signed-name');
  const emailEl = document.getElementById('signed-email');
  if (!nameEl || !acc) return;

  nameEl.textContent = acc.name;
  emailEl.textContent = acc.email;

  const initials = acc.name.slice(0,2).toUpperCase();
  document.getElementById('signed-avatar-initials').textContent = initials;
  const img = document.getElementById('signed-avatar-img');
  if (acc.avatar) { img.src = acc.avatar; img.classList.remove('hidden'); }
  else { img.classList.add('hidden'); img.removeAttribute('src'); }

  const roleBadge = document.getElementById('signed-role');
  const adminBtn = document.getElementById('btn-admin-enter');
  const isAdmin = acc.role === 'admin';
  roleBadge.classList.toggle('hidden', !isAdmin);
  adminBtn.classList.toggle('hidden', !isAdmin);

  // Orders for this user
  const myOrders = DB.orders.get().filter(o => o.userEmail === acc.email);
  const total = myOrders.reduce((s,o) => s + o.total, 0);
  document.getElementById('stat-orders').textContent = myOrders.length;
  document.getElementById('stat-total').textContent = `${total.toLocaleString('uk-UA')} ${t('cart.currency')}`;

  // History list
  const list = document.getElementById('orders-list');
  const empty = document.getElementById('orders-empty');
  const badge = document.getElementById('orders-count-badge');
  badge.textContent = `${myOrders.length} ${t('admin.count')}`;
  empty.classList.toggle('hidden', myOrders.length > 0);
  list.innerHTML = myOrders.slice().reverse().map(o => renderOrderCard(o)).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderOrderCard(o) {
  const d = new Date(o.createdAt);
  const dateStr = d.toLocaleString(state.lang === 'ua' ? 'uk-UA' : 'en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  const itemLines = o.items.map(i =>
    `<div class="text-[13px] text-ios-text2 dark:text-ios-darkText2">
      ${escapeHTML(i.title)} · ${i.size} · ${i.qty}× · <b>${(i.price * i.qty).toLocaleString('uk-UA')} ${t('cart.currency')}</b>
    </div>`).join('');
  return `
    <div class="rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] p-3">
      <div class="flex items-center justify-between gap-2">
        <div class="text-[12px] font-semibold text-brand dark:text-brand-light">#${o.id}</div>
        <div class="text-[12px] text-ios-text2 dark:text-ios-darkText2">${dateStr}</div>
      </div>
      <div class="mt-1.5">${itemLines}</div>
      <div class="flex items-center justify-between mt-2">
        <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300">${t('cab.orderStatus')}</span>
        <div class="font-extrabold text-brand dark:text-brand-light">${o.total.toLocaleString('uk-UA')} ${t('cart.currency')}</div>
      </div>
    </div>`;
}

// =============================================================================
// 9. Shop rendering
// =============================================================================
function renderShop() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = allProducts().map(p => {
    const title = productTitle(p);
    const desc = p.desc ? `<p class="text-[12.5px] text-ios-text2 dark:text-ios-darkText2 mt-1 line-clamp-2">${escapeHTML(p.desc)}</p>` : '';
    const availLabel = p.avail === 'order' ? t('shop.order') : t('shop.stock');
    const availClass = p.avail === 'order'
      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-300'
      : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300';
    const image = p.builtin
      ? `<div class="prod-img" data-mono="${p.mono}" style="--pg:${p.pg}"></div>`
      : `<div class="prod-img" style="background:#000"><img src="${p.photo}" alt="" class="absolute inset-0 w-full h-full object-cover" /></div>`;

    return `
    <article class="rounded-ios bg-white dark:bg-ios-darkCard p-3 shadow-sm flex flex-col" data-product="${p.id}">
      ${image}
      <div class="pt-4 px-1 flex-1 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${availClass}">${availLabel}</span>
        </div>
        <h3 class="font-bold text-[16px] leading-tight">${escapeHTML(title)}</h3>
        ${desc}
        <div class="mt-1 text-brand dark:text-brand-light font-extrabold text-[17px]">${p.price} <span class="text-[13px] font-semibold opacity-80">${t('cart.currency')}</span></div>
        <div class="mt-3">
          <div class="text-[12px] text-ios-text2 dark:text-ios-darkText2 mb-1">${t('shop.size')}</div>
          <div class="size-seg" data-size-seg>
            ${p.sizes.map((s,i) => `<button data-size="${s}" class="${i===0?'active':''}">${s}</button>`).join('')}
          </div>
        </div>
        <div class="mt-3 flex items-center justify-between gap-2">
          <div>
            <div class="text-[12px] text-ios-text2 dark:text-ios-darkText2 mb-1">${t('shop.qty')}</div>
            <div class="stepper">
              <button data-step="-1">−</button>
              <span class="val" data-qty>1</span>
              <button data-step="1">+</button>
            </div>
          </div>
          <button data-buy
            class="mt-5 flex-1 h-11 rounded-xl bg-brand hover:bg-brand-dark active:scale-[0.98] text-white font-semibold text-[15px] transition">
            ${t('shop.buy')}
          </button>
        </div>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('[data-product]').forEach(card => {
    const id = card.getAttribute('data-product');

    card.querySelectorAll('[data-size-seg] button').forEach(b => {
      b.addEventListener('click', () => {
        card.querySelectorAll('[data-size-seg] button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
      });
    });

    const qtyEl = card.querySelector('[data-qty]');
    card.querySelectorAll('[data-step]').forEach(b => {
      b.addEventListener('click', () => {
        const delta = +b.getAttribute('data-step');
        let v = +qtyEl.textContent + delta;
        if (v < 1) v = 1; if (v > 20) v = 20;
        qtyEl.textContent = v;
      });
    });

    card.querySelector('[data-buy]').addEventListener('click', () => {
      const size = card.querySelector('[data-size-seg] button.active')?.getAttribute('data-size') || 'M';
      const qty = +qtyEl.textContent;
      buyNow(id, size, qty);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderHelloUser() {
  const el = document.getElementById('hello-user');
  if (el && state.user) el.textContent = state.user.name;
}

// =============================================================================
// 10. Buy / Cart / Order
// =============================================================================
function buyNow(id, size, qty) {
  const product = allProducts().find(p => p.id === id);
  if (!product) return;
  addToCart(id, size, qty);
  placeOrder([{ productId: id, title: productTitle(product), price: product.price, size, qty }]);
  openSheet();
}

function addToCart(id, size, qty) {
  const existing = state.cart.find(i => i.id === id && i.size === size);
  if (existing) existing.qty += qty;
  else state.cart.push({ id, size, qty });
  renderCartPill();
}

function placeOrder(items) {
  if (!state.user) return;
  const total = items.reduce((s,i) => s + i.price * i.qty, 0);
  const order = {
    id: Date.now().toString(36).toUpperCase(),
    userEmail: state.user.email,
    userName: state.user.name,
    items, total,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };
  const list = DB.orders.get();
  list.push(order);
  DB.orders.set(list);
  toast(t('toast.orderPlaced'));
  renderCabinet();
  renderAdminOrders();
}

function renderCartPill() {
  const pill = document.getElementById('cart-pill');
  if (!pill) return;
  const count = state.cart.reduce((s,i) => s + i.qty, 0);
  const priceOf = (id) => allProducts().find(p => p.id === id)?.price ?? 0;
  const total = state.cart.reduce((s,i) => s + priceOf(i.id) * i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total.toLocaleString('uk-UA');
  pill.classList.toggle('hidden', count === 0);
}

// =============================================================================
// 11. Bottom sheets (order confirm, add-product, user-view)
// =============================================================================
function openSheetById(id) {
  const s = document.getElementById(id);
  s.classList.remove('hidden');
  requestAnimationFrame(() => s.classList.add('open'));
  document.body.style.overflow = 'hidden';
}
function closeSheetById(id) {
  const s = document.getElementById(id);
  s.classList.remove('open');
  setTimeout(() => s.classList.add('hidden'), 320);
  document.body.style.overflow = '';
}
const openSheet = () => openSheetById('sheet');
const closeSheet = () => closeSheetById('sheet');
const openAddSheet = () => openSheetById('add-sheet');
const closeAddSheet = () => closeSheetById('add-sheet');
const openUserSheet = () => openSheetById('user-sheet');
const closeUserSheet = () => closeSheetById('user-sheet');

// =============================================================================
// 12. Toast
// =============================================================================
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  const inner = document.getElementById('toast-inner');
  inner.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// =============================================================================
// 13. Admin
// =============================================================================
function bindAdmin() {
  document.getElementById('btn-open-add').addEventListener('click', openAddSheet);
  document.getElementById('add-sheet-backdrop').addEventListener('click', closeAddSheet);
  document.getElementById('add-sheet-cancel').addEventListener('click', closeAddSheet);

  document.querySelectorAll('#p-avail button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#p-avail button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.adminAvail = b.getAttribute('data-avail');
    });
  });

  const photoInput = document.getElementById('p-photo');
  photoInput.addEventListener('change', async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert('Файл більший за 2 MB.'); photoInput.value = ''; return; }
    const dataUrl = await new Promise(res => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.readAsDataURL(file);
    });
    state.adminPhotoData = dataUrl;
    const preview = document.getElementById('p-photo-preview');
    preview.src = dataUrl;
    preview.classList.remove('hidden');
    document.getElementById('p-photo-empty').classList.add('hidden');
  });

  document.getElementById('admin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').trim();
    const desc = (fd.get('desc') || '').trim();
    const price = parseInt(fd.get('price'), 10);

    let ok = true;
    if (!name) { setFieldError('p-name', 'err.required'); ok = false; } else setFieldError('p-name', null);
    if (!desc) { setFieldError('p-desc', 'err.required'); ok = false; } else setFieldError('p-desc', null);
    if (!price || price < 1) { setFieldError('p-price', 'err.required'); ok = false; } else setFieldError('p-price', null);
    if (!state.adminPhotoData) { setFieldError('p-photo', 'err.photo'); ok = false; } else setFieldError('p-photo', null);
    if (!ok) return;

    const product = {
      id: 'c' + Date.now(), title: name, desc, price,
      avail: state.adminAvail, photo: state.adminPhotoData,
      createdAt: new Date().toISOString(),
    };
    const list = DB.products_custom.get();
    list.unshift(product);
    DB.products_custom.set(list);

    form.reset();
    state.adminPhotoData = null;
    state.adminAvail = 'stock';
    document.querySelectorAll('#p-avail button').forEach((b,i) => b.classList.toggle('active', i === 0));
    document.getElementById('p-photo-preview').classList.add('hidden');
    document.getElementById('p-photo-empty').classList.remove('hidden');

    closeAddSheet();
    toast(t('toast.productAdded'));
    renderAdminList();
    renderShop();
  });
}

function renderAdminList() {
  const list = document.getElementById('admin-list');
  const empty = document.getElementById('admin-empty');
  const count = document.getElementById('admin-count');
  if (!list) return;

  const items = allProducts();       // includes visible built-ins + custom
  count.textContent = `${items.length} ${t('admin.count')}`;
  empty.classList.toggle('hidden', items.length > 0);

  list.innerHTML = items.map(p => {
    const availLabel = p.avail === 'order' ? t('shop.order') : t('shop.stock');
    const availClass = p.avail === 'order'
      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-300'
      : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300';
    const title = productTitle(p);
    const desc = p.desc ? escapeHTML(p.desc) : '';
    const image = p.builtin
      ? `<div class="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center font-black text-white text-lg" style="background:${p.pg}">${p.mono}</div>`
      : `<img src="${p.photo}" class="w-16 h-16 rounded-xl object-cover shrink-0" alt="" />`;
    const builtinBadge = p.builtin
      ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand/10 text-brand dark:text-brand-light">${t('admin.templateBadge')}</span>` : '';
    return `
      <div class="flex items-center gap-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] p-3">
        ${image}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${availClass}">${availLabel}</span>
            ${builtinBadge}
            <span class="text-brand dark:text-brand-light font-bold text-[14px]">${p.price} ${t('cart.currency')}</span>
          </div>
          <div class="font-semibold truncate">${escapeHTML(title)}</div>
          <div class="text-[12.5px] text-ios-text2 dark:text-ios-darkText2 line-clamp-1">${desc}</div>
        </div>
        <button data-del="${p.id}" data-builtin="${p.builtin ? '1' : '0'}"
          class="shrink-0 w-9 h-9 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition"
          aria-label="Delete">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>`;
  }).join('');

  list.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del');
      const isBuiltin = btn.getAttribute('data-builtin') === '1';
      if (!confirm(t('admin.confirmDel'))) return;
      if (isBuiltin) {
        const dl = DB.deleted_builtins.get();
        if (!dl.includes(id)) { dl.push(id); DB.deleted_builtins.set(dl); }
      } else {
        DB.products_custom.set(DB.products_custom.get().filter(p => p.id !== id));
      }
      toast(t('toast.productRemoved'));
      renderAdminList();
      renderShop();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderAdminOrders() {
  const list = document.getElementById('admin-orders-list');
  const empty = document.getElementById('admin-orders-empty');
  const count = document.getElementById('admin-orders-count');
  if (!list) return;

  const orders = DB.orders.get().slice().reverse();
  count.textContent = `${orders.length} ${t('admin.count')}`;
  empty.classList.toggle('hidden', orders.length > 0);

  list.innerHTML = orders.map(o => {
    const d = new Date(o.createdAt);
    const dateStr = d.toLocaleString(state.lang === 'ua' ? 'uk-UA' : 'en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    const itemLines = o.items.map(i =>
      `<div class="text-[13px] text-ios-text2 dark:text-ios-darkText2">${escapeHTML(i.title)} · ${i.size} · ${i.qty}×</div>`).join('');
    return `
      <div class="rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] p-3">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-[12px] font-semibold text-brand dark:text-brand-light">#${o.id}</span>
              <span class="text-[12px] text-ios-text2 dark:text-ios-darkText2">${dateStr}</span>
            </div>
            <div class="font-semibold truncate mt-0.5">${escapeHTML(o.userName)} · <span class="text-ios-text2 dark:text-ios-darkText2 text-[13px] font-normal">${escapeHTML(o.userEmail)}</span></div>
          </div>
          <div class="font-extrabold text-brand dark:text-brand-light">${o.total.toLocaleString('uk-UA')} ${t('cart.currency')}</div>
        </div>
        <div class="mt-2 grid gap-0.5">${itemLines}</div>
      </div>`;
  }).join('');
}

// =============================================================================
// 14. Presence / online users
// =============================================================================
const PRESENCE_TTL = 20_000;         // treat entry as online if seen in last 20s
const PRESENCE_INTERVAL = 5_000;     // heartbeat every 5s

function presenceHeartbeat() {
  const map = DB.online.get();
  // Prune stale entries
  const now = Date.now();
  for (const [sid, e] of Object.entries(map)) {
    if (now - (e.lastSeen || 0) > PRESENCE_TTL) delete map[sid];
  }
  if (state.user) {
    const acc = currentAccount();
    map[state.sessionId] = {
      email: state.user.email,
      name: state.user.name,
      avatar: acc?.avatar || null,
      role: state.user.role,
      lastSeen: now,
    };
  } else {
    delete map[state.sessionId];
  }
  DB.online.set(map);
  renderOnline();
}

function presenceRemove() {
  const map = DB.online.get();
  delete map[state.sessionId];
  DB.online.set(map);
}

function activeOnlineList() {
  const map = DB.online.get();
  const now = Date.now();
  // Group by email, keep freshest
  const byEmail = new Map();
  for (const [, e] of Object.entries(map)) {
    if (!e || now - (e.lastSeen || 0) > PRESENCE_TTL) continue;
    const prev = byEmail.get(e.email);
    if (!prev || prev.lastSeen < e.lastSeen) byEmail.set(e.email, e);
  }
  return Array.from(byEmail.values());
}

function renderOnline() {
  const list = document.getElementById('online-list');
  const empty = document.getElementById('online-empty');
  const countEl = document.getElementById('online-count');
  if (!list) return;

  const users = activeOnlineList();
  countEl.textContent = users.length;
  empty.classList.toggle('hidden', users.length > 0);

  list.innerHTML = users.map(u => {
    const initials = (u.name || '?').slice(0,2).toUpperCase();
    const avatar = u.avatar
      ? `<img src="${u.avatar}" class="w-7 h-7 rounded-full object-cover" alt="" />`
      : `<div class="w-7 h-7 rounded-full bg-brand text-white text-[11px] font-bold flex items-center justify-center">${escapeHTML(initials)}</div>`;
    const roleBadge = u.role === 'admin'
      ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand/10 text-brand dark:text-brand-light">ADMIN</span>` : '';
    return `
      <button data-view-user="${escapeHTML(u.email)}"
        class="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition">
        ${avatar}
        <span class="font-semibold text-[13px]">${escapeHTML(u.name)}</span>
        ${roleBadge}
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      </button>`;
  }).join('');

  list.querySelectorAll('[data-view-user]').forEach(b => {
    b.addEventListener('click', () => viewUser(b.getAttribute('data-view-user')));
  });
}

function viewUser(email) {
  const acc = DB.accounts.get().find(a => a.email === email);
  if (!acc) return;
  const online = activeOnlineList().some(u => u.email === email);
  const orders = DB.orders.get().filter(o => o.userEmail === email);

  document.getElementById('us-name').textContent = acc.name;
  document.getElementById('us-email').textContent = acc.email;
  document.getElementById('us-role').classList.toggle('hidden', acc.role !== 'admin');
  document.getElementById('us-orders').textContent = orders.length;
  document.getElementById('us-online').textContent = online ? '● online' : '○ offline';
  document.getElementById('us-online').classList.toggle('text-emerald-500', online);
  document.getElementById('us-online').classList.toggle('text-ios-text2', !online);

  const av = document.getElementById('us-avatar');
  if (acc.avatar) {
    av.innerHTML = `<img src="${acc.avatar}" class="w-full h-full object-cover" alt="" />`;
  } else {
    av.textContent = (acc.name || '?').slice(0,2).toUpperCase();
  }
  openUserSheet();
  if (window.lucide) window.lucide.createIcons();
}

// =============================================================================
// 15. Utilities
// =============================================================================
function escapeHTML(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// =============================================================================
// 16. Global handlers
// =============================================================================
function bindGlobal() {
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  document.querySelectorAll('[data-lang]').forEach(b => {
    b.addEventListener('click', () => {
      state.lang = b.getAttribute('data-lang');
      localStorage.setItem('md_lang', state.lang);
      updateDOM();
    });
  });

  document.querySelectorAll('[data-cta="shop"]').forEach(b => b.addEventListener('click', () => go('shop')));
  document.querySelectorAll('[data-nav]').forEach(b =>
    b.addEventListener('click', () => go(b.getAttribute('data-nav')))
  );

  document.getElementById('sheet-backdrop').addEventListener('click', closeSheet);
  document.getElementById('sheet-cancel').addEventListener('click', closeSheet);
  document.getElementById('cart-btn').addEventListener('click', openSheet);

  document.getElementById('user-sheet-backdrop').addEventListener('click', closeUserSheet);
  document.getElementById('user-sheet-close').addEventListener('click', closeUserSheet);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeSheet(); closeAddSheet(); closeUserSheet(); }
  });
  window.addEventListener('resize', updateNavThumb);

  // Cross-tab sync of DB changes
  window.addEventListener('storage', (e) => {
    if (!e.key || !e.key.startsWith('md_')) return;
    if (e.key === 'md_online') renderOnline();
    if (e.key === 'md_orders') { renderCabinet(); renderAdminOrders(); }
    if (e.key === 'md_products_custom') { renderShop(); renderAdminList(); }
    if (e.key === 'md_accounts') { renderCabinet(); renderOnline(); }
  });

  // Presence lifecycle
  window.addEventListener('beforeunload', presenceRemove);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) presenceHeartbeat(); });
}

// =============================================================================
// 17. Boot
// =============================================================================
async function boot() {
  applyTheme();
  await seedAdmin();
  bindGlobal();
  bindAuth();
  bindAdmin();
  updateDOM();
  if (window.lucide) window.lucide.createIcons();

  // Presence
  presenceHeartbeat();
  setInterval(presenceHeartbeat, PRESENCE_INTERVAL);
}
document.addEventListener('DOMContentLoaded', boot);
