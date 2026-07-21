/* MEDIC DARIYA — SPA logic: i18n, theme, auth, catalog, cart, action sheet. */

// -----------------------------------------------------------------------------
// 1. Translations dictionary
// -----------------------------------------------------------------------------
const translations = {
  ua: {
    'nav.home': 'Головна',
    'nav.shop': 'Магазин',
    'nav.auth': 'Акаунт',

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
    'auth.name': "Ім'я",
    'auth.email': 'Пошта',
    'auth.pass': 'Пароль',
    'auth.pass2': 'Підтвердіть пароль',
    'auth.submit': 'Створити акаунт',
    'auth.back': 'Назад',

    'err.name': "Введіть ім'я",
    'err.email': 'Некоректна пошта',
    'err.pass': 'Мінімум 6 символів',
    'err.pass2': 'Паролі не збігаються',

    'shop.title': 'Каталог',
    'shop.sub': 'Свіжа колекція медичного одягу',
    'shop.buy': 'Купити',
    'shop.size': 'Розмір',
    'shop.qty': 'Кількість',

    'cart.label': 'Кошик',
    'cart.items': 'товарів',
    'cart.currency': '₴',

    'sheet.title': 'Дякуємо за замовлення!',
    'sheet.desc': "Для підтвердження та уточнення деталей оберіть зручний спосіб зв'язку з нашим менеджером:",
    'sheet.cancel': 'Скасувати',

    'toast.added': 'Додано до кошика',
    'toast.hello': 'Ласкаво просимо',

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
    'auth.name': 'Full name',
    'auth.email': 'Email',
    'auth.pass': 'Password',
    'auth.pass2': 'Confirm password',
    'auth.submit': 'Create account',
    'auth.back': 'Back',

    'err.name': 'Please enter your name',
    'err.email': 'Invalid email',
    'err.pass': 'At least 6 characters',
    'err.pass2': 'Passwords do not match',

    'shop.title': 'Shop',
    'shop.sub': 'Fresh medical apparel collection',
    'shop.buy': 'Buy',
    'shop.size': 'Size',
    'shop.qty': 'Quantity',

    'cart.label': 'Cart',
    'cart.items': 'items',
    'cart.currency': 'UAH',

    'sheet.title': 'Thank you for your order!',
    'sheet.desc': 'To confirm and clarify the details, please choose a convenient way to contact our manager:',
    'sheet.cancel': 'Cancel',

    'toast.added': 'Added to cart',
    'toast.hello': 'Welcome',

    'footer.rights': '© 2026 MEDIC DARIYA. All rights reserved.',

    'prod.1.title': "Women's set «Dariya Top»",
    'prod.2.title': "Men's surgical scrubs",
    'prod.3.title': 'Premium Medical Scrub',
    'prod.4.title': 'Classic medical gown',
  }
};

// -----------------------------------------------------------------------------
// 2. Application state
// -----------------------------------------------------------------------------
const state = {
  lang: localStorage.getItem('md_lang') || 'ua',
  theme: localStorage.getItem('md_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  currentPage: 'home',              // 'home' | 'auth' | 'shop'
  user: JSON.parse(localStorage.getItem('md_user') || 'null'),
  cart: [],                         // array of {id, size, qty}
};

// Product catalog (titles come from translations at render time)
const products = [
  { id: 1, price: 1650, sizes: ['S','M','L','XL'], mono: 'DT', pg: 'linear-gradient(135deg,#0d9fb4,#053742)' },
  { id: 2, price: 1490, sizes: ['M','L','XL','XXL'], mono: 'CS', pg: 'linear-gradient(135deg,#1e1e28,#3a3a4a)' },
  { id: 3, price: 2100, sizes: ['S','M','L'],       mono: 'PS', pg: 'linear-gradient(135deg,#006675,#003d47)' },
  { id: 4, price: 1250, sizes: ['S','M','L','XL'],  mono: 'CG', pg: 'linear-gradient(135deg,#e0e5ec,#a7b3c1)' },
];

// -----------------------------------------------------------------------------
// 3. i18n render
// -----------------------------------------------------------------------------
function t(key) { return translations[state.lang][key] ?? key; }

function updateDOM() {
  // static translated nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // language segmented control visuals
  const thumb = document.getElementById('lang-thumb');
  const ua = document.querySelector('[data-lang="ua"]');
  const en = document.querySelector('[data-lang="en"]');
  if (state.lang === 'ua') {
    thumb.style.transform = 'translateX(0)';
    ua.classList.add('text-white'); ua.classList.remove('text-ios-text2','dark:text-ios-darkText2');
    en.classList.remove('text-white'); en.classList.add('text-ios-text2','dark:text-ios-darkText2');
  } else {
    thumb.style.transform = 'translateX(100%)';
    en.classList.add('text-white'); en.classList.remove('text-ios-text2','dark:text-ios-darkText2');
    ua.classList.remove('text-white'); ua.classList.add('text-ios-text2','dark:text-ios-darkText2');
  }

  // Update the html lang attribute for a11y
  document.documentElement.lang = state.lang === 'ua' ? 'uk' : 'en';

  // Re-render dynamic parts
  renderShop();
  renderCartPill();
  renderHelloUser();
  updateNavThumb();
}

// -----------------------------------------------------------------------------
// 4. Theme
// -----------------------------------------------------------------------------
function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
}
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('md_theme', state.theme);
  applyTheme();
}

// -----------------------------------------------------------------------------
// 5. Page navigation
// -----------------------------------------------------------------------------
function go(page) {
  // "shop" requires a session; fall back to auth otherwise
  if (page === 'shop' && !state.user) page = 'auth';
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
  const active = nav.querySelector(`[data-nav="${state.currentPage}"]`);
  if (!active) return;
  // Update pill position/size
  const navRect = nav.getBoundingClientRect();
  const btnRect = active.getBoundingClientRect();
  thumb.style.width = btnRect.width + 'px';
  thumb.style.transform = `translateX(${btnRect.left - navRect.left - 2}px)`;
  // Recolor buttons
  nav.querySelectorAll('.nav-btn').forEach(b => {
    const isActive = b === active;
    b.classList.toggle('text-white', isActive);
    b.classList.toggle('text-ios-text2', !isActive);
    b.classList.toggle('dark:text-ios-darkText2', !isActive);
  });
}

function goShopOrAuth() {
  if (state.user) go('shop'); else go('auth');
}

// -----------------------------------------------------------------------------
// 6. Auth form
// -----------------------------------------------------------------------------
function setFieldError(name, msgKey) {
  const field = document.querySelector(`#f-${name}, #f-${name === 'password' ? 'pass' : ''}, #f-${name === 'password2' ? 'pass2' : ''}`);
  const wrap = document.querySelector(`[data-err="${name}"]`)?.closest('.ios-field');
  const errEl = document.querySelector(`[data-err="${name}"]`);
  if (!errEl || !wrap) return;
  if (msgKey) {
    wrap.classList.add('invalid');
    errEl.textContent = t(msgKey);
  } else {
    wrap.classList.remove('invalid');
    errEl.textContent = '';
  }
}

function validateAuth(fd) {
  let ok = true;
  const name = fd.get('name').trim();
  const email = fd.get('email').trim();
  const pass = fd.get('password');
  const pass2 = fd.get('password2');

  if (!name) { setFieldError('name', 'err.name'); ok = false; } else setFieldError('name', null);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) { setFieldError('email', 'err.email'); ok = false; } else setFieldError('email', null);

  if (!pass || pass.length < 6) { setFieldError('password', 'err.pass'); ok = false; } else setFieldError('password', null);

  if (pass !== pass2 || !pass2) { setFieldError('password2', 'err.pass2'); ok = false; } else setFieldError('password2', null);

  return ok ? { name, email } : null;
}

function bindAuth() {
  const form = document.getElementById('auth-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const parsed = validateAuth(fd);
    if (!parsed) return;
    state.user = parsed;
    localStorage.setItem('md_user', JSON.stringify(parsed));
    toast(`${t('toast.hello')}, ${parsed.name}!`);
    setTimeout(() => go('shop'), 250);
  });
}

// -----------------------------------------------------------------------------
// 7. Marketplace rendering
// -----------------------------------------------------------------------------
function renderShop() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = products.map(p => {
    const title = t(`prod.${p.id}.title`);
    return `
    <article class="rounded-ios bg-white dark:bg-ios-darkCard p-3 shadow-sm flex flex-col" data-product="${p.id}">
      <div class="prod-img" data-mono="${p.mono}" style="--pg:${p.pg}"></div>

      <div class="pt-4 px-1 flex-1 flex flex-col">
        <h3 class="font-bold text-[16px] leading-tight">${title}</h3>
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

  // Attach handlers per card
  grid.querySelectorAll('[data-product]').forEach(card => {
    const id = +card.getAttribute('data-product');

    // Size picker
    card.querySelectorAll('[data-size-seg] button').forEach(b => {
      b.addEventListener('click', () => {
        card.querySelectorAll('[data-size-seg] button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
      });
    });

    // Stepper
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

    // Buy
    card.querySelector('[data-buy]').addEventListener('click', () => {
      const size = card.querySelector('[data-size-seg] button.active')?.getAttribute('data-size') || 'M';
      const qty = +qtyEl.textContent;
      addToCart(id, size, qty);
      openSheet();
    });
  });

  // Recreate lucide icons that might live inside cards (none here, but safe)
  if (window.lucide) window.lucide.createIcons();
}

function renderHelloUser() {
  const el = document.getElementById('hello-user');
  if (el && state.user) el.textContent = state.user.name;
}

// -----------------------------------------------------------------------------
// 8. Cart
// -----------------------------------------------------------------------------
function addToCart(id, size, qty) {
  const existing = state.cart.find(i => i.id === id && i.size === size);
  if (existing) existing.qty += qty;
  else state.cart.push({ id, size, qty });
  toast(t('toast.added'));
  renderCartPill();
}

function renderCartPill() {
  const pill = document.getElementById('cart-pill');
  const count = state.cart.reduce((s,i) => s + i.qty, 0);
  const total = state.cart.reduce((s,i) => {
    const p = products.find(p => p.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total.toLocaleString('uk-UA');
  pill.classList.toggle('hidden', count === 0);
}

// -----------------------------------------------------------------------------
// 9. Action sheet
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// 10. Toast
// -----------------------------------------------------------------------------
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  const inner = document.getElementById('toast-inner');
  inner.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// -----------------------------------------------------------------------------
// 11. Wire up global handlers
// -----------------------------------------------------------------------------
function bindGlobal() {
  // theme
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // language
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.addEventListener('click', () => {
      state.lang = b.getAttribute('data-lang');
      localStorage.setItem('md_lang', state.lang);
      updateDOM();
    });
  });

  // CTA & nav
  document.querySelectorAll('[data-cta="shop"]').forEach(b => b.addEventListener('click', goShopOrAuth));
  document.querySelectorAll('[data-nav]').forEach(b =>
    b.addEventListener('click', () => go(b.getAttribute('data-nav')))
  );

  // Sheet
  document.getElementById('sheet-backdrop').addEventListener('click', closeSheet);
  document.getElementById('sheet-cancel').addEventListener('click', closeSheet);

  // Cart button also opens sheet for quick checkout
  document.getElementById('cart-btn').addEventListener('click', openSheet);

  // Esc closes sheet
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSheet();
  });

  // Keep nav pill aligned on resize
  window.addEventListener('resize', updateNavThumb);
}

// -----------------------------------------------------------------------------
// 12. Boot
// -----------------------------------------------------------------------------
function boot() {
  applyTheme();
  bindGlobal();
  bindAuth();
  updateDOM();
  // Render lucide icons after first paint
  if (window.lucide) window.lucide.createIcons();
  // If a session already exists, no auto-redirect — user starts on home.
}
document.addEventListener('DOMContentLoaded', boot);
