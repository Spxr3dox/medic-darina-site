/* MEDIC DARIYA — SPA: i18n, theme, auth+DB, catalog, cart, admin panel. */

// =============================================================================
// 1. Translations dictionary
// =============================================================================
const translations = {
  ua: {
    'nav.home': 'Головна',
    'nav.shop': 'Магазин',
    'nav.auth': 'Акаунт',
    'nav.admin': 'Адмін',

    'hero.badge': 'Преміум медичний одяг зі США',
    'hero.slogan1': 'Костюм лікаря —',
    'hero.slogan2': 'не медична форма,',
    'hero.slogan3': 'а власний медичний бренд.',
    'hero.desc': "Ексклюзивна колекція Cherokee, Grey's Anatomy, Figs та інших світових брендів. Реальні розміри, чесні ціни та особистий підхід від лікаря-анестезіолога з 20-річним стажем.",
    'hero.cta': 'Перейти до магазину',
    'hero.more': 'Про бренд',
    'hero.stat1': 'років у медицині',
    'hero.stat2': 'оригінальні бренди',
    'hero.stat3': 'персональний підбір',

    'feat1.title': 'Досвід лікаря',
    'feat1.desc': 'Дарія — анестезіолог-реаніматолог. Кожен костюм тестується на реальному робочому дні.',
    'feat2.title': 'Оригінал зі США',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies, Tofflen — прямі поставки, без підробок.",
    'feat3.title': 'Особистий підхід',
    'feat3.desc': 'Допоможемо з розмірами, порадимо крій, покажемо реальні фото — як подрузі.',

    'auth.title': 'Створіть акаунт',
    'auth.sub': 'Щоб перейти до магазину, зареєструйтесь',
    'auth.titleIn': 'Ласкаво просимо',
    'auth.subIn': 'Увійдіть у свій акаунт',
    'auth.modeSignup': 'Реєстрація',
    'auth.modeSignin': 'Вхід',
    'auth.name': "Ім'я",
    'auth.email': 'Пошта',
    'auth.pass': 'Пароль',
    'auth.pass2': 'Підтвердіть пароль',
    'auth.submit': 'Створити акаунт',
    'auth.submitIn': 'Увійти',
    'auth.back': 'Назад',
    'auth.signout': 'Вийти',
    'auth.goShop': 'До магазину',
    'auth.goAdmin': 'Відкрити адмін-панель',
    'auth.roleAdmin': 'Адміністратор',

    'err.name': "Введіть ім'я",
    'err.email': 'Некоректна пошта',
    'err.pass': 'Мінімум 6 символів',
    'err.pass2': 'Паролі не збігаються',
    'err.exists': 'Такий email вже зареєстровано',
    'err.badLogin': 'Невірна пошта або пароль',

    'shop.title': 'Каталог',
    'shop.sub': 'Свіжа колекція медичного одягу',
    'shop.buy': 'Купити',
    'shop.size': 'Розмір',
    'shop.qty': 'Кількість',
    'shop.stock': 'В наявності',
    'shop.order': 'Під замовлення',

    'cart.label': 'Кошик',
    'cart.items': 'товарів',
    'cart.currency': '₴',

    'sheet.title': 'Дякуємо за замовлення!',
    'sheet.desc': "Для підтвердження та уточнення деталей оберіть зручний спосіб зв'язку з нашим менеджером:",
    'sheet.cancel': 'Скасувати',

    'toast.added': 'Додано до кошика',
    'toast.hello': 'Ласкаво просимо',
    'toast.signedIn': 'Успішний вхід',
    'toast.signedOut': 'Ви вийшли з акаунту',
    'toast.productAdded': 'Товар додано в магазин',
    'toast.productRemoved': 'Товар видалено',

    'admin.title': 'Адмін-панель',
    'admin.sub': 'Додайте товари в магазин',
    'admin.formTitle': 'Новий товар',
    'admin.name': 'Назва',
    'admin.desc': 'Опис',
    'admin.price': 'Ціна за одиницю (₴)',
    'admin.avail': 'Доступність',
    'admin.availStock': 'В наявності',
    'admin.availOrder': 'Під замовлення',
    'admin.photo': 'Фото товару',
    'admin.photoDrop': 'Натисніть, щоб обрати фото',
    'admin.add': 'Додати товар',
    'admin.listTitle': 'Мої товари',
    'admin.empty': 'Поки що немає доданих товарів.',
    'admin.delete': 'Видалити',
    'admin.count': 'товарів',

    'footer.rights': '© 2026 MEDIC DARIYA. Усі права захищено.',

    'prod.1.title': "Жіночий костюм «Dariya Top»",
    'prod.2.title': 'Чоловічий хірургічний костюм',
    'prod.3.title': 'Premium Medical Scrub',
    'prod.4.title': 'Класичний медичний халат',
  },
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.auth': 'Account',
    'nav.admin': 'Admin',

    'hero.badge': 'Premium US-made medical apparel',
    'hero.slogan1': "A doctor's suit isn't",
    'hero.slogan2': 'a medical uniform,',
    'hero.slogan3': "it's your own medical brand.",
    'hero.desc': "An exclusive selection of Cherokee, Grey's Anatomy, Figs and other world-class brands. Honest sizing, fair prices and a personal touch from an anesthesiologist with 20 years of experience.",
    'hero.cta': 'Go to Shop',
    'hero.more': 'About the brand',
    'hero.stat1': 'years in medicine',
    'hero.stat2': 'original brands',
    'hero.stat3': 'personal picking',

    'feat1.title': 'Doctor-led',
    'feat1.desc': 'Dariya is a practicing anesthesiologist. Every suit is tested on a real shift.',
    'feat2.title': 'Authentic USA',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies, Tofflen — direct import, no fakes.",
    'feat3.title': 'Personal touch',
    'feat3.desc': "We help with sizing, cuts and share real photos — like a friend would.",

    'auth.title': 'Create an account',
    'auth.sub': 'Register to enter the shop',
    'auth.titleIn': 'Welcome back',
    'auth.subIn': 'Sign in to your account',
    'auth.modeSignup': 'Sign up',
    'auth.modeSignin': 'Sign in',
    'auth.name': 'Full name',
    'auth.email': 'Email',
    'auth.pass': 'Password',
    'auth.pass2': 'Confirm password',
    'auth.submit': 'Create account',
    'auth.submitIn': 'Sign in',
    'auth.back': 'Back',
    'auth.signout': 'Sign out',
    'auth.goShop': 'Go to shop',
    'auth.goAdmin': 'Open admin panel',
    'auth.roleAdmin': 'Administrator',

    'err.name': 'Please enter your name',
    'err.email': 'Invalid email',
    'err.pass': 'At least 6 characters',
    'err.pass2': 'Passwords do not match',
    'err.exists': 'This email is already registered',
    'err.badLogin': 'Invalid email or password',

    'shop.title': 'Shop',
    'shop.sub': 'Fresh medical apparel collection',
    'shop.buy': 'Buy',
    'shop.size': 'Size',
    'shop.qty': 'Quantity',
    'shop.stock': 'In stock',
    'shop.order': 'On order',

    'cart.label': 'Cart',
    'cart.items': 'items',
    'cart.currency': 'UAH',

    'sheet.title': 'Thank you for your order!',
    'sheet.desc': 'To confirm and clarify the details, please choose a convenient way to contact our manager:',
    'sheet.cancel': 'Cancel',

    'toast.added': 'Added to cart',
    'toast.hello': 'Welcome',
    'toast.signedIn': 'Signed in',
    'toast.signedOut': 'Signed out',
    'toast.productAdded': 'Product added to shop',
    'toast.productRemoved': 'Product removed',

    'admin.title': 'Admin panel',
    'admin.sub': 'Add products to the shop',
    'admin.formTitle': 'New product',
    'admin.name': 'Title',
    'admin.desc': 'Description',
    'admin.price': 'Price per unit (UAH)',
    'admin.avail': 'Availability',
    'admin.availStock': 'In stock',
    'admin.availOrder': 'On order',
    'admin.photo': 'Product photo',
    'admin.photoDrop': 'Click to choose a photo',
    'admin.add': 'Add product',
    'admin.listTitle': 'My products',
    'admin.empty': 'No products added yet.',
    'admin.delete': 'Delete',
    'admin.count': 'items',

    'footer.rights': '© 2026 MEDIC DARIYA. All rights reserved.',

    'prod.1.title': "Women's set «Dariya Top»",
    'prod.2.title': "Men's surgical scrubs",
    'prod.3.title': 'Premium Medical Scrub',
    'prod.4.title': 'Classic medical gown',
  }
};

// =============================================================================
// 2. "Database" abstraction over localStorage
// =============================================================================
const DB = {
  _read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  _write(key, val) { localStorage.setItem(key, JSON.stringify(val)); },

  accounts:        { get: () => DB._read('md_accounts', []),        set: (v) => DB._write('md_accounts', v) },
  products_custom: { get: () => DB._read('md_products_custom', []), set: (v) => DB._write('md_products_custom', v) },
  session:         { get: () => DB._read('md_session', null),       set: (v) => DB._write('md_session', v) },
};

// SHA-256 → hex (Web Crypto)
async function hashPassword(pass) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pass));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

// Seed admin account on first run if it does not exist.
async function seedAdmin() {
  const accounts = DB.accounts.get();
  const email = 'admin@darina-medical.com';
  if (accounts.some(a => a.email === email)) return;
  const passwordHash = await hashPassword('Medic-darina-best31');
  accounts.push({ name: 'Darina', email, passwordHash, role: 'admin' });
  DB.accounts.set(accounts);
}

// =============================================================================
// 3. Application state
// =============================================================================
const state = {
  lang: localStorage.getItem('md_lang') || 'ua',
  theme: localStorage.getItem('md_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  currentPage: 'home',
  authMode: 'signup',           // 'signup' | 'signin'
  user: DB.session.get(),        // {name, email, role}
  cart: [],
  adminPhotoData: null,          // base64 data URL of chosen photo
  adminAvail: 'stock',           // 'stock' | 'order'
};

// Built-in demo products (rendered as placeholder monograms)
const defaultProducts = [
  { id: 'd1', price: 1650, sizes: ['S','M','L','XL'],   mono: 'DT', pg: 'linear-gradient(135deg,#0d9fb4,#053742)', avail: 'stock', builtin: true },
  { id: 'd2', price: 1490, sizes: ['M','L','XL','XXL'], mono: 'CS', pg: 'linear-gradient(135deg,#1e1e28,#3a3a4a)', avail: 'stock', builtin: true },
  { id: 'd3', price: 2100, sizes: ['S','M','L'],        mono: 'PS', pg: 'linear-gradient(135deg,#006675,#003d47)', avail: 'order', builtin: true },
  { id: 'd4', price: 1250, sizes: ['S','M','L','XL'],   mono: 'CG', pg: 'linear-gradient(135deg,#e0e5ec,#a7b3c1)', avail: 'stock', builtin: true },
];

function allProducts() {
  const custom = DB.products_custom.get().map(p => ({
    id: p.id, price: p.price, sizes: ['S','M','L','XL'],
    title: p.title, desc: p.desc, photo: p.photo, avail: p.avail,
    builtin: false,
  }));
  return [...defaultProducts, ...custom];
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
  renderAuthMode();
  renderAdminList();
  updateNavThumb();
}

// =============================================================================
// 5. Theme
// =============================================================================
function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
}
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('md_theme', state.theme);
  applyTheme();
}

// =============================================================================
// 6. Page navigation
// =============================================================================
function go(page) {
  // Access rules
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

  // Show or hide admin button by role
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
  const wrap = errEl.closest('.ios-field');
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
    document.getElementById('signed-name').textContent = state.user.name;
    document.getElementById('signed-email').textContent = state.user.email;
    document.getElementById('signed-avatar').textContent = state.user.name.slice(0,2).toUpperCase();
    const roleBadge = document.getElementById('signed-role');
    const adminBtn = document.getElementById('btn-admin-enter');
    if (state.user.role === 'admin') {
      roleBadge.classList.remove('hidden');
      adminBtn.classList.remove('hidden');
    } else {
      roleBadge.classList.add('hidden');
      adminBtn.classList.add('hidden');
    }
    return;
  }

  signedCard.classList.add('hidden');
  formCard.classList.remove('hidden');

  // Mode segmented visuals
  const thumb = document.getElementById('auth-mode-thumb');
  document.querySelectorAll('.auth-mode-btn').forEach(b => {
    const on = b.getAttribute('data-mode') === state.authMode;
    b.classList.toggle('text-black', on);
    b.classList.toggle('dark:text-white', on);
    b.classList.toggle('text-ios-text2', !on);
    b.classList.toggle('dark:text-ios-darkText2', !on);
  });
  if (thumb) thumb.style.transform = state.authMode === 'signup' ? 'translateX(0)' : 'translateX(100%)';

  // Hide/show fields per mode
  document.querySelectorAll('#auth-form [data-only]').forEach(el => {
    el.classList.toggle('hidden', el.getAttribute('data-only') !== state.authMode);
  });

  // Heading + submit label
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
  const account = { name, email, passwordHash, role: 'user' };
  accounts.push(account);
  DB.accounts.set(accounts);

  const sess = { name, email, role: 'user' };
  state.user = sess;
  DB.session.set(sess);
  toast(`${t('toast.hello')}, ${name}!`);
  setTimeout(() => go('shop'), 250);
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

  const sess = { name: account.name, email: account.email, role: account.role || 'user' };
  state.user = sess;
  DB.session.set(sess);
  toast(t('toast.signedIn'));
  setTimeout(() => go(sess.role === 'admin' ? 'admin' : 'shop'), 250);
}

function signOut() {
  state.user = null;
  localStorage.removeItem('md_session');
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
}

// =============================================================================
// 8. Shop rendering
// =============================================================================
function renderShop() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = allProducts().map(p => {
    const title = p.builtin ? t(`prod.${p.id.slice(1)}.title`) : (p.title || '');
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
        if (v < 1) v = 1;
        if (v > 20) v = 20;
        qtyEl.textContent = v;
      });
    });

    card.querySelector('[data-buy]').addEventListener('click', () => {
      const size = card.querySelector('[data-size-seg] button.active')?.getAttribute('data-size') || 'M';
      const qty = +qtyEl.textContent;
      addToCart(id, size, qty);
      openSheet();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderHelloUser() {
  const el = document.getElementById('hello-user');
  if (el && state.user) el.textContent = state.user.name;
}

// =============================================================================
// 9. Cart
// =============================================================================
function addToCart(id, size, qty) {
  const existing = state.cart.find(i => i.id === id && i.size === size);
  if (existing) existing.qty += qty;
  else state.cart.push({ id, size, qty });
  toast(t('toast.added'));
  renderCartPill();
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
// 10. Action sheet
// =============================================================================
function openSheet() {
  const sheet = document.getElementById('sheet');
  sheet.classList.remove('hidden');
  requestAnimationFrame(() => sheet.classList.add('open'));
  document.body.style.overflow = 'hidden';
}
function closeSheet() {
  const sheet = document.getElementById('sheet');
  sheet.classList.remove('open');
  setTimeout(() => sheet.classList.add('hidden'), 320);
  document.body.style.overflow = '';
}

// =============================================================================
// 11. Toast
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
// 12. Admin panel
// =============================================================================
function bindAdmin() {
  // Availability segmented control
  document.querySelectorAll('#p-avail button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#p-avail button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.adminAvail = b.getAttribute('data-avail');
    });
  });

  // Photo upload
  const photoInput = document.getElementById('p-photo');
  photoInput.addEventListener('change', async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Файл більший за 2 MB. Оберіть менше фото.');
      photoInput.value = '';
      return;
    }
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

  // Submit form
  document.getElementById('admin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').trim();
    const desc = (fd.get('desc') || '').trim();
    const price = parseInt(fd.get('price'), 10);

    let ok = true;
    if (!name) { setFieldError('p-name', 'err.name'); ok = false; } else setFieldError('p-name', null);
    if (!desc) { setFieldError('p-desc', 'err.name'); ok = false; } else setFieldError('p-desc', null);
    if (!price || price < 1) { setFieldError('p-price', 'err.name'); ok = false; } else setFieldError('p-price', null);
    if (!state.adminPhotoData) { setFieldError('p-photo', 'err.name'); ok = false; } else setFieldError('p-photo', null);
    if (!ok) return;

    const product = {
      id: 'c' + Date.now(),
      title: name,
      desc,
      price,
      avail: state.adminAvail,
      photo: state.adminPhotoData,
      createdAt: new Date().toISOString(),
    };
    const list = DB.products_custom.get();
    list.unshift(product);
    DB.products_custom.set(list);

    // Reset form
    form.reset();
    state.adminPhotoData = null;
    state.adminAvail = 'stock';
    document.querySelectorAll('#p-avail button').forEach((b,i) => b.classList.toggle('active', i === 0));
    document.getElementById('p-photo-preview').classList.add('hidden');
    document.getElementById('p-photo-empty').classList.remove('hidden');

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

  const items = DB.products_custom.get();
  count.textContent = `${items.length} ${t('admin.count')}`;
  empty.classList.toggle('hidden', items.length > 0);

  list.innerHTML = items.map(p => {
    const availLabel = p.avail === 'order' ? t('shop.order') : t('shop.stock');
    const availClass = p.avail === 'order'
      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-300'
      : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300';
    return `
      <div class="flex items-center gap-3 rounded-2xl bg-white dark:bg-ios-darkCard shadow-sm p-3">
        <img src="${p.photo}" class="w-16 h-16 rounded-xl object-cover shrink-0" alt="" />
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${availClass}">${availLabel}</span>
            <span class="text-brand dark:text-brand-light font-bold text-[14px]">${p.price} ${t('cart.currency')}</span>
          </div>
          <div class="font-semibold truncate">${escapeHTML(p.title)}</div>
          <div class="text-[12.5px] text-ios-text2 dark:text-ios-darkText2 line-clamp-1">${escapeHTML(p.desc)}</div>
        </div>
        <button data-del="${p.id}"
          class="shrink-0 w-9 h-9 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition"
          aria-label="Delete">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>`;
  }).join('');

  list.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del');
      const next = DB.products_custom.get().filter(p => p.id !== id);
      DB.products_custom.set(next);
      toast(t('toast.productRemoved'));
      renderAdminList();
      renderShop();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// =============================================================================
// 13. Utilities
// =============================================================================
function escapeHTML(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// =============================================================================
// 14. Wire up global handlers
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

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });
  window.addEventListener('resize', updateNavThumb);
}

// =============================================================================
// 15. Boot
// =============================================================================
async function boot() {
  applyTheme();
  await seedAdmin();
  bindGlobal();
  bindAuth();
  bindAdmin();
  updateDOM();
  if (window.lucide) window.lucide.createIcons();
}
document.addEventListener('DOMContentLoaded', boot);
