/* MEDIC DARIYA — SPA: i18n, theme, auth+DB, catalog, cart, admin, cabinet, presence. */

// =============================================================================
// 1. Translations dictionary
// =============================================================================
const translations = {
  ua: {
    'nav.home': 'Головна', 'nav.shop': 'Магазин', 'nav.news': 'Новини', 'nav.auth': 'Акаунт', 'nav.admin': 'Адмін',

    'news.title': 'Новини', 'news.sub': 'Оновлення асортименту, історії, знижки',
    'news.add': 'Нова новина', 'news.empty': 'Новин поки немає. Заходь пізніше!',
    'news.formTitle': 'Нова новина', 'news.fldTitle': 'Заголовок', 'news.fldBody': 'Текст новини',
    'news.cover': 'Обкладинка (необовʼязково)', 'news.publish': 'Опублікувати',
    'news.view': 'Новина', 'news.read': 'Читати далі', 'news.delete': 'Видалити новину',
    'news.confirmDel': 'Видалити цю новину?', 'news.published': 'Новину опубліковано',
    'news.removed': 'Новину видалено',

    'hero.badge': 'Преміум медичний одяг зі США',
    'hero.slogan1': 'Костюм лікаря —',
    'hero.slogan2': 'не медична форма,',
    'hero.slogan3': 'а власний медичний бренд.',
    'hero.desc': "Ексклюзивні колекції від брендів Cherokee, Grey's Anatomy тощо. Реальні розміри, чесні ціни та особистий підхід від лікаря-анестезіолога з 20-річним стажем.",
    'hero.cta': 'Перейти до магазину', 'hero.more': 'Про бренд',
    'hero.stat1': 'років у медицині', 'hero.stat2': 'оригінальні бренди', 'hero.stat3': 'персональний підбір',

    'feat1.title': 'Досвід лікаря',
    'feat1.desc': 'Дарія — анестезіолог-реаніматолог. Кожен костюм тестується на реальному робочому дні.',
    'feat2.title': 'Оригінал зі США',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies — прямі поставки, без підробок.",
    'feat3.title': 'Особистий підхід',
    'feat3.desc': 'Допоможемо з розмірами, порадимо крій, покажемо реальні фото — як подрузі.',

    'quote.text': '«Те, у що вдягнений лікар, має значення. Одяг передає повагу до пацієнта та до власної професії.»',
    'quote.author': 'Санджай Ґупта', 'quote.initials': 'СҐ',
    'quote.role': 'Нейрохірург, головний медичний кореспондент CNN',

    'evo.badge': 'Історія медичного стилю',
    'evo.title': 'Еволюція медичного стилю: від чорних сюртуків до преміум-моди',
    'evo.intro': 'Медичний одяг пройшов довгий шлях, аби стати таким, яким ми любимо його сьогодні — стильним, технологічним та бездоганно зручним.',
    'evo.e1.era': 'XIX століття', 'evo.e1.title': 'Епоха чорних сюртуків',
    'evo.e1.desc': 'До появи теорії стерильності лікарі оперували в звичайному темному одязі. Закривавлені рукави вважалися… ознакою досвідченості та високої майстерності хірурга.',
    'evo.e2.era': 'Початок XX століття', 'evo.e2.title': 'Ера білого халата',
    'evo.e2.desc': 'Розуміння гігієни змінило все. Білий колір став глобальним символом чистоти, науки та довіри. Проте білі халати виявилися надто масивними та суворими для щоденної активної роботи.',
    'evo.e3.era': '1970-ті', 'evo.e3.title': 'Народження «скрабсів»',
    'evo.e3.desc': "Яскраве світло в операційних відбивалося від білої тканини й засліплювало лікарів. Так з'явилися зелені та сині костюми (scrubs), які знімали напругу з очей під час тривалих операцій.",
    'evo.e4.era': 'Сьогодення', 'evo.e4.title': 'Комфорт, високі технології та індивідуальність',
    'evo.e4.desc': "Сучасний медичний одяг — це більше, ніж форма. Це ваш щоденний комфорт та броня. Бренди Cherokee, Grey's Anatomy та Figs перетворили медичні костюми на елемент моди: дихаючі та еластичні тканини, анатомічний крій і стильні фасони, які підкреслюють вашу професійність щодня.",
    'evo.outro1': 'Бинт і халат більше не обмежують рух.',
    'evo.outro2': 'Обирайте стиль, у якому приємно рятувати світ!',
    'evo.now': 'сьогодні',

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
    'err.required': "Обов'язкове поле", 'err.photo': 'Оберіть фото товару', 'err.sizes': 'Оберіть хоча б один розмір',

    'shop.title': 'Каталог', 'shop.sub': 'Свіжа колекція медичного одягу',
    'shop.buy': 'Додати в корзину', 'shop.size': 'Розмір', 'shop.qty': 'Кількість',
    'shop.stock': 'В наявності', 'shop.order': 'Під замовлення',
    'shop.sizeTop': 'Розмір топ', 'shop.sizeBottom': 'Розмір штани', 'shop.pantsLen': 'Довжина',
    'shop.old': 'Стара ціна',
    'shop.filterAll': 'Всі', 'shop.filterStock': 'В наявності', 'shop.filterOrder': 'Під замовлення',
    'shop.filterEmpty': 'Немає товарів за цим фільтром.',
    'cat.all': 'Всі категорії', 'cat.scrubs': 'Костюми', 'cat.gowns': 'Медичні халати',
    'cat.tops': 'Топи', 'cat.pants': 'Штани', 'cat.shoes': 'Взуття', 'cat.acc': 'Аксесуари', 'cat.other': 'Інше',
    'gender.female': 'Жіночі', 'gender.male': 'Чоловічі', 'gender.unisex': 'Унісекс',
    'brand.all': 'Всі бренди', 'brand.none': 'Без бренду',

    'cart.label': 'Кошик', 'cart.items': 'товарів', 'cart.currency': '₴',
    'cart.title': 'Ваша корзина', 'cart.total': 'Разом', 'cart.checkout': 'Оформити замовлення',
    'cart.empty': 'Корзина поки що порожня.', 'cart.clear': 'Очистити',
    'cart.confirmClear': 'Прибрати всі товари з корзини?',

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
    'cab.credsTitle': 'Дані для входу', 'cab.credEmail': 'Пошта', 'cab.credPass': 'Пароль',
    'cab.credCopied': 'Скопійовано', 'cab.credNoPass': 'Пароль недоступний. Увійди знову, щоб зберегти його в цьому браузері.',
    'cab.credsHint': 'Пароль зберігається лише в цьому браузері з моменту останнього входу. З іншого пристрою його не видно.',

    'admin.title': 'Адмін-панель', 'admin.sub': 'Керуйте товарами та замовленнями',
    'admin.formTitle': 'Новий товар',
    'admin.name': 'Назва', 'admin.desc': 'Опис', 'admin.price': 'Ціна за одиницю (₴)',
    'admin.avail': 'Доступність', 'admin.availStock': 'В наявності', 'admin.availOrder': 'Під замовлення',
    'admin.photo': 'Фото товару', 'admin.photoDrop': 'Натисніть, щоб обрати фото',
    'admin.sizes': 'Доступні розміри',
    'admin.sizesTop': 'Розмір топ', 'admin.sizesBottom': 'Розмір штани', 'admin.pantsLen': 'Довжина штанів',
    'admin.sizesHint': 'Якщо товар без штанів — залиш блок штанів і довжину порожніми.',
    'admin.oldPrice': 'Стара ціна для знижки (₴) — необовʼязково',
    'admin.sku': 'Код товару', 'admin.color': 'Колір', 'admin.category': 'Категорія', 'admin.gender': 'Стать', 'admin.brand': 'Бренд',
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
    'nav.home': 'Home', 'nav.shop': 'Shop', 'nav.news': 'News', 'nav.auth': 'Account', 'nav.admin': 'Admin',

    'news.title': 'News', 'news.sub': 'New arrivals, stories, discounts',
    'news.add': 'New post', 'news.empty': 'No news yet. Check back later!',
    'news.formTitle': 'New post', 'news.fldTitle': 'Title', 'news.fldBody': 'Body',
    'news.cover': 'Cover image (optional)', 'news.publish': 'Publish',
    'news.view': 'Post', 'news.read': 'Read more', 'news.delete': 'Delete post',
    'news.confirmDel': 'Delete this post?', 'news.published': 'Post published',
    'news.removed': 'Post removed',

    'hero.badge': 'Premium US-made medical apparel',
    'hero.slogan1': "A doctor's suit isn't",
    'hero.slogan2': 'a medical uniform,',
    'hero.slogan3': "it's your own medical brand.",
    'hero.desc': "Exclusive collections from Cherokee, Grey's Anatomy and other world-class brands. Honest sizing, fair prices and a personal touch from an anesthesiologist with 20 years of experience.",
    'hero.cta': 'Go to Shop', 'hero.more': 'About the brand',
    'hero.stat1': 'years in medicine', 'hero.stat2': 'original brands', 'hero.stat3': 'personal picking',

    'feat1.title': 'Doctor-led',
    'feat1.desc': 'Dariya is a practicing anesthesiologist. Every suit is tested on a real shift.',
    'feat2.title': 'Authentic USA',
    'feat2.desc': "Cherokee, Grey's Anatomy, Figs, Dickies — direct import, no fakes.",
    'feat3.title': 'Personal touch',
    'feat3.desc': "We help with sizing, cuts and share real photos — like a friend would.",

    'quote.text': "“What a doctor wears matters. Clothing conveys respect for the patient and for one's own profession.”",
    'quote.author': 'Sanjay Gupta', 'quote.initials': 'SG',
    'quote.role': 'Neurosurgeon, Chief Medical Correspondent, CNN',

    'evo.badge': 'History of medical style',
    'evo.title': 'The evolution of medical apparel: from black frock coats to premium fashion',
    'evo.intro': "Medical clothing has come a long way to become what we love today — stylish, high-tech and impeccably comfortable.",
    'evo.e1.era': '19th century', 'evo.e1.title': 'The era of black frock coats',
    'evo.e1.desc': 'Before germ theory, doctors operated in ordinary dark clothing. Blood-stained sleeves were considered… a mark of a surgeon\'s experience and mastery.',
    'evo.e2.era': 'Early 20th century', 'evo.e2.title': 'The white coat era',
    'evo.e2.desc': "The understanding of hygiene changed everything. White became the global symbol of cleanliness, science and trust. But white coats turned out to be too heavy and stiff for active daily work.",
    'evo.e3.era': '1970s', 'evo.e3.title': "The birth of «scrubs»",
    'evo.e3.desc': "Bright OR lights reflecting off white fabric blinded surgeons. So green and blue scrubs appeared — colours that eased the strain on the eyes during long operations.",
    'evo.e4.era': 'Today', 'evo.e4.title': 'Comfort, high-tech and individuality',
    'evo.e4.desc': "Modern medical apparel is more than a uniform. It is your daily comfort and armour. Brands like Cherokee, Grey's Anatomy and Figs turned scrubs into fashion: breathable stretch fabrics, anatomical cuts and stylish silhouettes that highlight your professionalism every day.",
    'evo.outro1': 'Bandages and coats no longer limit your movement.',
    'evo.outro2': 'Choose a style in which it feels good to save the world!',
    'evo.now': 'today',

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
    'err.required': 'This field is required', 'err.photo': 'Please choose a product photo', 'err.sizes': 'Pick at least one size',

    'shop.title': 'Shop', 'shop.sub': 'Fresh medical apparel collection',
    'shop.buy': 'Add to cart', 'shop.size': 'Size', 'shop.qty': 'Quantity',
    'shop.stock': 'In stock', 'shop.order': 'On order',
    'shop.sizeTop': 'Top size', 'shop.sizeBottom': 'Pants size', 'shop.pantsLen': 'Length',
    'shop.old': 'Old price',
    'shop.filterAll': 'All', 'shop.filterStock': 'In stock', 'shop.filterOrder': 'On order',
    'shop.filterEmpty': 'No products match this filter.',
    'cat.all': 'All categories', 'cat.scrubs': 'Scrubs', 'cat.gowns': 'Medical gowns',
    'cat.tops': 'Tops', 'cat.pants': 'Pants', 'cat.shoes': 'Shoes', 'cat.acc': 'Accessories', 'cat.other': 'Other',
    'gender.female': "Women's", 'gender.male': "Men's", 'gender.unisex': 'Unisex',
    'brand.all': 'All brands', 'brand.none': 'No brand',

    'cart.label': 'Cart', 'cart.items': 'items', 'cart.currency': 'UAH',
    'cart.title': 'Your cart', 'cart.total': 'Total', 'cart.checkout': 'Checkout',
    'cart.empty': 'Your cart is empty.', 'cart.clear': 'Clear',
    'cart.confirmClear': 'Remove everything from the cart?',

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
    'cab.credsTitle': 'Login details', 'cab.credEmail': 'Email', 'cab.credPass': 'Password',
    'cab.credCopied': 'Copied', 'cab.credNoPass': 'Password unavailable. Sign in again to save it in this browser.',
    'cab.credsHint': 'Password is stored only in this browser since your last sign-in. It is not visible from other devices.',

    'admin.title': 'Admin panel', 'admin.sub': 'Manage products and orders',
    'admin.formTitle': 'New product',
    'admin.name': 'Title', 'admin.desc': 'Description', 'admin.price': 'Price per unit (UAH)',
    'admin.avail': 'Availability', 'admin.availStock': 'In stock', 'admin.availOrder': 'On order',
    'admin.photo': 'Product photo', 'admin.photoDrop': 'Click to choose a photo',
    'admin.sizes': 'Available sizes',
    'admin.sizesTop': 'Top size', 'admin.sizesBottom': 'Pants size', 'admin.pantsLen': 'Pants length',
    'admin.sizesHint': 'If the item has no pants — leave the pants and length blocks empty.',
    'admin.oldPrice': 'Original price for a discount (UAH) — optional',
    'admin.sku': 'Product code', 'admin.color': 'Colour', 'admin.category': 'Category', 'admin.gender': 'Gender', 'admin.brand': 'Brand',
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
// 2. API layer (server-backed) + minimal localStorage for UI-only state
// =============================================================================
const API_BASE = ''; // same-origin
const TOKEN_KEY = 'md_token';

const API = {
  token() { return localStorage.getItem(TOKEN_KEY); },
  setToken(t) { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); },
  async req(path, opts = {}) {
    const headers = { ...(opts.headers || {}) };
    if (!(opts.body instanceof FormData) && opts.body != null) headers['Content-Type'] = 'application/json';
    const tok = API.token();
    if (tok) headers['Authorization'] = 'Bearer ' + tok;
    const res = await fetch(API_BASE + path, {
      method: opts.method || 'GET',
      headers,
      body: opts.body && !(opts.body instanceof FormData) ? JSON.stringify(opts.body) : opts.body,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || 'http_' + res.status), { code: data.error, status: res.status });
    return data;
  },
  signup: (body) => API.req('/api/auth.php?action=signup', { method: 'POST', body }),
  signin: (body) => API.req('/api/auth.php?action=signin', { method: 'POST', body }),
  signout: () => API.req('/api/auth.php?action=signout', { method: 'POST' }),
  me: () => API.req('/api/auth.php?action=me'),
  patchMe: (body) => API.req('/api/auth.php?action=updateMe', { method: 'POST', body }),
  products: () => API.req('/api/products.php'),
  addProduct: (body) => API.req('/api/products.php?action=add', { method: 'POST', body }),
  delProduct: (id) => API.req('/api/products.php?action=delete&id=' + encodeURIComponent(id), { method: 'POST' }),
  news: () => API.req('/api/news.php'),
  addNews: (body) => API.req('/api/news.php?action=add', { method: 'POST', body }),
  delNews: (id) => API.req('/api/news.php?action=delete&id=' + encodeURIComponent(id), { method: 'POST' }),
  orders: () => API.req('/api/orders.php'),
  addOrder: (body) => API.req('/api/orders.php?action=add', { method: 'POST', body }),
  presence: (sessionId) => API.req('/api/presence.php', { method: 'POST', body: { sessionId } }),
  upload: (file) => { const fd = new FormData(); fd.append('file', file); return API.req('/api/upload.php', { method: 'POST', body: fd }); },
};

// In-memory caches populated from API; localStorage kept only for cart/lang/theme.
const cache = { products: [], news: [], orders: [] };

const DB = {
  _read(key, fb) { try { return JSON.parse(localStorage.getItem(key)) ?? fb; } catch { return fb; } },
  _write(key, v) { localStorage.setItem(key, JSON.stringify(v)); },
  cart: { get: () => DB._read('md_cart', []), set: (v) => DB._write('md_cart', v) },
  products_custom: { get: () => cache.products, set: () => {} },
  news: { get: () => cache.news, set: () => {} },
  orders: { get: () => cache.orders, set: () => {} },
  deleted_builtins: { get: () => [], set: () => {} },
  session: { get: () => null, set: () => {} }, // token is authoritative; user in state.user
};

async function refreshProducts() { try { cache.products = (await API.products()).products; } catch {} }
async function refreshNews()     { try { cache.news     = (await API.news()).news; }         catch {} }
async function refreshOrders()   {
  if (!state.user) { cache.orders = []; return; }
  try { cache.orders = (await API.orders()).orders; } catch {}
}
async function refreshMe() {
  if (!API.token()) { state.user = null; return; }
  try { const r = await API.me(); state.user = r.user; if (!r.user) API.setToken(null); }
  catch { state.user = null; API.setToken(null); }
}

function currentAccount() { return state.user; }
async function updateAccount(patch) {
  try {
    const r = await API.patchMe(patch);
    state.user = r.user;
  } catch (e) { console.warn('patchMe failed', e); }
}

// =============================================================================
// 3. Application state
// =============================================================================
const state = {
  lang: localStorage.getItem('md_lang') || 'ua',
  theme: localStorage.getItem('md_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  currentPage: 'home',
  authMode: 'signup',
  user: null,
  cart: DB.cart.get(),
  adminPhotoData: null,
  adminAvail: 'stock',
  adminCategory: 'scrubs',
  adminGender: 'unisex',
  adminBrand: '',
  shopAvail: 'all',      // 'all' | 'stock' | 'order'
  shopCat: 'all',        // 'all' | category id
  shopGender: 'all',     // 'all' | 'female' | 'male' | 'unisex'
  shopBrand: 'all',      // 'all' | brand name
  newsPhotoData: null,
  sessionId: sessionStorage.getItem('md_sid') || (() => {
    const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('md_sid', id);
    return id;
  })(),
};

const defaultProducts = [];

const SIZE_ORDER = ['XXS','XS','S','M','L','XL','2XL','3XL','4XL','5XL','6XL'];

function allProducts() {
  return cache.products.map(p => ({ ...p, builtin: false }));
}

function productTitle(p) { return p.title || ''; }

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
  renderCartSheet();
  renderHelloUser();
  renderCabinet();
  renderAuthMode();
  renderAdminList();
  renderAdminOrders();
  renderNews();
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
const VALID_PAGES = new Set(['home','shop','news','auth','admin']);

function go(page, opts = {}) {
  if (!VALID_PAGES.has(page)) page = 'home';
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

  // Sync URL. `opts.silent` avoids feedback loops when navigating due to hashchange.
  const desiredHash = '#' + page;
  if (!opts.silent && location.hash !== desiredHash) {
    history.pushState({ page }, '', desiredHash);
  }
  document.title = pageTitle(page);
}

function pageTitle(page) {
  const base = 'MEDIC DARIYA';
  const key = { home: null, shop: 'nav.shop', news: 'nav.news', auth: 'nav.auth', admin: 'nav.admin' }[page];
  return key ? `${t(key)} — ${base}` : `${base} — Premium Medical Apparel`;
}

function handleHashChange() {
  const raw = (location.hash || '#home').slice(1);
  go(raw || 'home', { silent: true });
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

  try {
    const r = await API.signup({ name, email, password: pass });
    API.setToken(r.token);
    localStorage.setItem('md_pass_plain', pass);
    state.user = r.user;
    await refreshOrders();
    toast(`${t('toast.hello')}, ${name}!`);
    updateDOM();
    setTimeout(() => go('auth'), 250);
    presenceHeartbeat();
  } catch (e) {
    if (e.code === 'email_taken') setFieldError('email', 'err.exists');
    else toast(t('err.badLogin'));
  }
}

async function handleSignin(fd) {
  const email = (fd.get('email') || '').trim().toLowerCase();
  const pass = fd.get('password') || '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('email', 'err.email'); return; }
  setFieldError('email', null);
  if (pass.length < 6) { setFieldError('password', 'err.pass'); return; }
  setFieldError('password', null);

  try {
    const r = await API.signin({ email, password: pass });
    API.setToken(r.token);
    localStorage.setItem('md_pass_plain', pass);
    state.user = r.user;
    await refreshOrders();
    toast(t('toast.signedIn'));
    updateDOM();
    setTimeout(() => go('auth'), 250);
    presenceHeartbeat();
  } catch (e) {
    setFieldError('password', 'err.badLogin');
  }
}

async function signOut() {
  try { await API.signout(); } catch {}
  API.setToken(null);
  localStorage.removeItem('md_pass_plain');
  presenceRemove();
  state.user = null;
  cache.orders = [];
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

  // Show / hide password toggles
  document.querySelectorAll('[data-toggle-pw]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.getAttribute('data-toggle-pw'));
      if (!input) return;
      const willShow = input.type === 'password';
      input.type = willShow ? 'text' : 'password';
      btn.querySelector('.eye-on').classList.toggle('hidden', willShow);
      btn.querySelector('.eye-off').classList.toggle('hidden', !willShow);
      btn.setAttribute('aria-label', willShow ? 'Hide password' : 'Show password');
    });
  });

  // Avatar upload
  document.getElementById('avatar-input').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Файл не є зображенням.'); return; }
    try {
      const r = await API.upload(file);
      await updateAccount({ avatar: r.url });
      toast(t('toast.avatarUpdated'));
      renderCabinet();
      presenceHeartbeat();
    } catch (err) { alert('Не вдалося: ' + (err.message || err.code)); }
  });

  // Name edit
  document.getElementById('btn-edit-name').addEventListener('click', async () => {
    const cur = state.user?.name || '';
    const next = prompt(t('cab.namePrompt'), cur);
    if (!next || !next.trim() || next.trim() === cur) return;
    await updateAccount({ name: next.trim() });
    toast(t('toast.nameUpdated'));
    renderCabinet();
    presenceHeartbeat();
  });

  // Show/hide password
  document.getElementById('creds-toggle-pass')?.addEventListener('click', () => {
    const el = document.getElementById('creds-pass');
    if (!el) return;
    const showing = el.dataset.visible === '1';
    el.dataset.visible = showing ? '0' : '1';
    const plain = el.dataset.plain || '';
    el.textContent = !showing && plain ? plain : '••••••••';
    if (!showing && !plain) toast(t('cab.credNoPass'));
    const icon = document.querySelector('#creds-toggle-pass i[data-lucide]');
    if (icon) icon.setAttribute('data-lucide', showing ? 'eye' : 'eye-off');
    if (window.lucide) window.lucide.createIcons();
  });

  // Copy email
  document.getElementById('creds-copy-email')?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(state.user?.email || ''); toast(t('cab.credCopied')); } catch {}
  });

  // Copy password
  document.getElementById('creds-copy-pass')?.addEventListener('click', async () => {
    const plain = document.getElementById('creds-pass')?.dataset.plain || '';
    if (!plain) { toast(t('cab.credNoPass')); return; }
    try { await navigator.clipboard.writeText(plain); toast(t('cab.credCopied')); } catch {}
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

  // Login credentials block
  const credsEmail = document.getElementById('creds-email');
  const credsPass = document.getElementById('creds-pass');
  if (credsEmail) credsEmail.textContent = acc.email;
  if (credsPass) {
    const savedPass = localStorage.getItem('md_pass_plain') || '';
    credsPass.dataset.plain = savedPass;
    credsPass.dataset.visible = credsPass.dataset.visible === '1' ? '1' : '0';
    credsPass.textContent = credsPass.dataset.visible === '1' && savedPass ? savedPass : '••••••••';
  }

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
  const myOrders = cache.orders;
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
const CATEGORY_ORDER = ['scrubs','gowns','tops','pants','shoes','acc','other'];

function renderCategoryChips() {
  const wrap = document.getElementById('category-chips');
  if (!wrap) return;
  // Which categories actually have products (respect current avail filter for the counts)
  const products = allProducts();
  const availOk = (p) => state.shopAvail === 'all' || p.avail === state.shopAvail;
  const counts = { all: products.filter(availOk).length };
  for (const cat of CATEGORY_ORDER) {
    counts[cat] = products.filter(p => availOk(p) && (p.category || 'scrubs') === cat).length;
  }
  const chips = [['all', t('cat.all')], ...CATEGORY_ORDER.map(c => [c, t('cat.' + c)])];
  wrap.innerHTML = chips
    .filter(([cat]) => cat === 'all' || counts[cat] > 0)
    .map(([cat, label]) => `
      <button data-cat-filter="${cat}"
        class="size-chip ${state.shopCat === cat ? 'active' : ''}">
        ${escapeHTML(label)}<span class="ml-1 opacity-70 text-[11px]">${counts[cat]}</span>
      </button>`).join('');
  wrap.querySelectorAll('[data-cat-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.shopCat = b.getAttribute('data-cat-filter');
      renderShop();
    });
  });
}

// Full list of brands we sell — kept in sync with the admin form chips.
const KNOWN_BRANDS = ['Cherokee','Figs','Skechers',"Grey's Anatomy",'Jaanuu','Medelita','Healing Hands','Dickies'];

function renderBrandChips() {
  const wrap = document.getElementById('brand-chips');
  if (!wrap) return;
  // Products in the current gender / avail / category slice (before brand filter).
  const pool = allProducts().filter(p => {
    if (state.shopAvail !== 'all' && p.avail !== state.shopAvail) return false;
    if (state.shopCat !== 'all' && (p.category || 'scrubs') !== state.shopCat) return false;
    if (state.shopGender !== 'all' && (p.gender || 'unisex') !== state.shopGender) return false;
    return true;
  });
  const counts = {};
  for (const p of pool) {
    const b = (p.brand || '').trim();
    if (!b) continue;
    counts[b] = (counts[b] || 0) + 1;
  }
  // On "Під замовлення" always list every known brand as a promise of
  // what can be ordered, even if there's no product yet.
  const brandsWithProducts = Object.keys(counts).sort();
  const brands = state.shopAvail === 'order'
    ? [...new Set([...KNOWN_BRANDS, ...brandsWithProducts])]
    : brandsWithProducts;

  if (brands.length === 0) {
    wrap.innerHTML = '';
    if (state.shopBrand !== 'all') state.shopBrand = 'all';
    return;
  }

  const chips = [['all', t('brand.all'), pool.length], ...brands.map(b => [b, b, counts[b] || 0])];
  wrap.innerHTML = chips.map(([val, label, count]) => `
    <button data-brand-filter="${escapeHTML(val)}"
      class="size-chip ${state.shopBrand === val ? 'active' : ''} ${count === 0 ? 'opacity-60' : ''}">
      ${escapeHTML(label)}<span class="ml-1 opacity-70 text-[11px]">${count}</span>
    </button>`).join('');
  wrap.querySelectorAll('[data-brand-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.shopBrand = b.getAttribute('data-brand-filter');
      renderShop();
    });
  });
}

function renderShop() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  // Availability segmented control state
  document.querySelectorAll('#avail-seg [data-avail-filter]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-avail-filter') === state.shopAvail);
  });
  renderCategoryChips();

  const segBlock = (label, items, group) => items.length ? `
    <div class="mt-3">
      <div class="text-[12px] text-ios-text2 dark:text-ios-darkText2 mb-1">${label}</div>
      <div class="size-seg" data-seg="${group}">
        ${items.map((s,i) => `<button data-val="${escapeHTML(s)}" class="${i===0?'active':''}">${escapeHTML(s)}</button>`).join('')}
      </div>
    </div>` : '';

  // Sync segmented visuals for gender + availability
  document.querySelectorAll('#gender-seg [data-gender-filter]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-gender-filter') === state.shopGender);
  });
  renderBrandChips();

  const filtered = allProducts().filter(p => {
    if (state.shopAvail !== 'all' && p.avail !== state.shopAvail) return false;
    if (state.shopCat !== 'all' && (p.category || 'scrubs') !== state.shopCat) return false;
    if (state.shopGender !== 'all' && (p.gender || 'unisex') !== state.shopGender) return false;
    if (state.shopBrand !== 'all' && (p.brand || '') !== state.shopBrand) return false;
    return true;
  });

  const emptyEl = document.getElementById('product-empty');
  if (emptyEl) emptyEl.classList.toggle('hidden', filtered.length > 0);

  grid.innerHTML = filtered.map(p => {
    const title = productTitle(p);
    const desc = p.desc ? `<p class="text-[12.5px] text-ios-text2 dark:text-ios-darkText2 mt-1 line-clamp-2">${escapeHTML(p.desc)}</p>` : '';
    const availLabel = p.avail === 'order' ? t('shop.order') : t('shop.stock');
    const availClass = p.avail === 'order'
      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-300'
      : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300';
    const image = `<div class="prod-img" style="background:#000"><img src="${p.photo}" alt="" class="absolute inset-0 w-full h-full object-cover" /></div>`;
    const segments = ''
      + segBlock(t('shop.sizeTop'),    p.sizesTop,     'top')
      + segBlock(t('shop.sizeBottom'), p.sizesBottom,  'bottom')
      + segBlock(t('shop.pantsLen'),   p.pantsLengths, 'len');

    return `
    <article class="rounded-ios bg-white dark:bg-ios-darkCard p-3 shadow-sm flex flex-col" data-product="${p.id}">
      ${image}
      <div class="pt-4 px-1 flex-1 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full ${availClass}">${availLabel}</span>
        </div>
        <h3 class="font-bold text-[16px] leading-tight">${escapeHTML(title)}</h3>
        ${(p.color || p.sku || p.brand) ? `
          <div class="mt-1 flex items-center gap-2 flex-wrap text-[11.5px] text-ios-text2 dark:text-ios-darkText2">
            ${p.brand ? `<span class="font-semibold text-brand dark:text-brand-light">${escapeHTML(p.brand)}</span>` : ''}
            ${p.color ? `<span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-brand"></span>${escapeHTML(p.color)}</span>` : ''}
            ${p.sku ? `<span class="font-mono opacity-80">SKU ${escapeHTML(p.sku)}</span>` : ''}
          </div>` : ''}
        ${desc}
        <div class="mt-1 flex items-baseline gap-2 flex-wrap">
          <span class="text-brand dark:text-brand-light font-extrabold text-[17px]">${p.price} <span class="text-[13px] font-semibold opacity-80">${t('cart.currency')}</span></span>
          ${p.oldPrice ? `<span class="text-[13px] text-ios-text2 dark:text-ios-darkText2 line-through">${p.oldPrice} ${t('cart.currency')}</span>
                          <span class="text-[11px] font-bold px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-500">−${Math.round((1 - p.price/p.oldPrice)*100)}%</span>` : ''}
        </div>
        ${segments}
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

    card.querySelectorAll('[data-seg]').forEach(seg => {
      seg.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          seg.querySelectorAll('button').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
        });
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
      const pick = (group) => card.querySelector(`[data-seg="${group}"] button.active`)?.getAttribute('data-val') || null;
      const parts = [];
      const size = pick('size');
      const top = pick('top');
      const bottom = pick('bottom');
      const len = pick('len');
      if (size)   parts.push(size);
      if (top)    parts.push(`${t('shop.sizeTop')}: ${top}`);
      if (bottom) parts.push(`${t('shop.sizeBottom')}: ${bottom}${len ? ' · ' + len : ''}`);
      const label = parts.join(' · ') || '—';
      const qty = +qtyEl.textContent;
      buyNow(id, label, qty);
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
// "Buy" only adds to the cart. Real order placement happens on checkout.
function buyNow(id, sizeLabel, qty) {
  const product = allProducts().find(p => p.id === id);
  if (!product) return;
  addToCart({
    id, title: productTitle(product), price: product.price,
    size: sizeLabel, qty,
  });
  toast(t('toast.added'));
}

function addToCart(item) {
  const existing = state.cart.find(i => i.id === item.id && i.size === item.size);
  if (existing) existing.qty = Math.min(20, existing.qty + item.qty);
  else state.cart.push({ ...item });
  persistCart();
  renderCartPill();
  renderCartSheet();
}

function updateCartItem(index, qty) {
  if (index < 0 || index >= state.cart.length) return;
  if (qty <= 0) state.cart.splice(index, 1);
  else state.cart[index].qty = Math.min(20, qty);
  persistCart();
  renderCartPill();
  renderCartSheet();
}

function clearCart() {
  state.cart = [];
  persistCart();
  renderCartPill();
  renderCartSheet();
  closeCartSheet();
}

function persistCart() { DB.cart.set(state.cart); }

function cartTotal() {
  return state.cart.reduce((s,i) => s + i.price * i.qty, 0);
}

function checkout() {
  if (!state.user) { go('auth'); return; }
  if (state.cart.length === 0) return;
  const items = state.cart.map(i => ({
    productId: i.id, title: i.title, price: i.price, size: i.size, qty: i.qty,
  }));
  placeOrder(items);
  state.cart = [];
  persistCart();
  renderCartPill();
  renderCartSheet();
  closeCartSheet();
  setTimeout(openSheet, 250);   // contact sheet (Telegram / Instagram)
}

async function placeOrder(items) {
  if (!state.user) return;
  const total = items.reduce((s,i) => s + i.price * i.qty, 0);
  try { await API.addOrder({ items, total }); await refreshOrders(); }
  catch (e) { alert('Помилка замовлення: ' + (e.message || e.code)); return; }
  toast(t('toast.orderPlaced'));
  renderCabinet();
  renderAdminOrders();
}

function renderCartPill() {
  const pill = document.getElementById('cart-pill');
  if (!pill) return;
  const count = state.cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = cartTotal().toLocaleString('uk-UA');
  pill.classList.toggle('hidden', count === 0);
}

function renderCartSheet() {
  const list = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  if (!list) return;

  const items = state.cart;
  empty.classList.toggle('hidden', items.length > 0);
  footer.classList.toggle('hidden', items.length === 0);
  list.classList.toggle('hidden', items.length === 0);

  list.innerHTML = items.map((it, idx) => `
    <div class="flex items-start gap-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] p-3">
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-[15px] truncate">${escapeHTML(it.title)}</div>
        <div class="text-[12.5px] text-ios-text2 dark:text-ios-darkText2 mt-0.5">${escapeHTML(it.size)}</div>
        <div class="mt-2 flex items-center gap-3">
          <div class="stepper">
            <button data-cart-step="-1" data-idx="${idx}">−</button>
            <span class="val">${it.qty}</span>
            <button data-cart-step="1" data-idx="${idx}">+</button>
          </div>
          <button data-cart-del="${idx}" class="text-red-500 text-[13px] font-semibold">
            ✕
          </button>
        </div>
      </div>
      <div class="text-right shrink-0">
        <div class="font-extrabold text-brand dark:text-brand-light">${(it.price * it.qty).toLocaleString('uk-UA')} ${t('cart.currency')}</div>
        <div class="text-[11px] text-ios-text2 dark:text-ios-darkText2">${it.price} × ${it.qty}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('cart-sheet-total').textContent = cartTotal().toLocaleString('uk-UA');

  list.querySelectorAll('[data-cart-step]').forEach(b => {
    b.addEventListener('click', () => {
      const idx = +b.getAttribute('data-idx');
      const delta = +b.getAttribute('data-cart-step');
      updateCartItem(idx, state.cart[idx].qty + delta);
    });
  });
  list.querySelectorAll('[data-cart-del]').forEach(b => {
    b.addEventListener('click', () => updateCartItem(+b.getAttribute('data-cart-del'), 0));
  });
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
const openCartSheet = () => { renderCartSheet(); openSheetById('cart-sheet'); };
const closeCartSheet = () => closeSheetById('cart-sheet');

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

  // Category picker (single-select chips)
  document.querySelectorAll('#p-category button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#p-category button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.adminCategory = b.getAttribute('data-cat');
    });
  });

  // Gender picker (segmented control)
  document.querySelectorAll('#p-gender button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#p-gender button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.adminGender = b.getAttribute('data-gender');
    });
  });

  // Brand picker (single-select chips)
  document.querySelectorAll('#p-brand button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#p-brand button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      state.adminBrand = b.getAttribute('data-brand') || '';
    });
  });

  // Sizes multi-select toggles (top + bottom)
  document.querySelectorAll('#p-sizes-top .size-chip, #p-sizes-bottom .size-chip, #p-pants-len .size-chip').forEach(b => {
    b.addEventListener('click', () => {
      b.classList.toggle('active');
      setFieldError('p-sizes', null);
    });
  });

  const photoInput = document.getElementById('p-photo');
  photoInput.addEventListener('change', async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Файл не є зображенням.'); photoInput.value = ''; return; }
    try {
      const r = await API.upload(file);
      state.adminPhotoData = r.url;
      const preview = document.getElementById('p-photo-preview');
      preview.src = r.url;
      preview.classList.remove('hidden');
      document.getElementById('p-photo-empty').classList.add('hidden');
    } catch (e) { alert('Не вдалося завантажити фото: ' + (e.message || e.code)); }
  });

  document.getElementById('admin-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').trim();
    const desc = (fd.get('desc') || '').trim();
    const price = parseInt(fd.get('price'), 10);

    const pickSized = (sel) => Array.from(document.querySelectorAll(sel + ' .size-chip.active'))
      .map(el => el.getAttribute('data-size'))
      .sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b));
    const sizesTop = pickSized('#p-sizes-top');
    const sizesBottom = pickSized('#p-sizes-bottom');
    const pantsLengths = Array.from(document.querySelectorAll('#p-pants-len .size-chip.active'))
      .map(el => el.getAttribute('data-len'));

    let ok = true;
    if (!name) { setFieldError('p-name', 'err.required'); ok = false; } else setFieldError('p-name', null);
    if (!desc) { setFieldError('p-desc', 'err.required'); ok = false; } else setFieldError('p-desc', null);
    if (!price || price < 1) { setFieldError('p-price', 'err.required'); ok = false; } else setFieldError('p-price', null);
    if (!state.adminPhotoData) { setFieldError('p-photo', 'err.photo'); ok = false; } else setFieldError('p-photo', null);
    if (sizesTop.length === 0 && sizesBottom.length === 0) { setFieldError('p-sizes', 'err.sizes'); ok = false; } else setFieldError('p-sizes', null);
    if (!ok) return;

    const rawOld = parseInt(fd.get('oldPrice'), 10);
    const oldPrice = (Number.isFinite(rawOld) && rawOld > price) ? rawOld : null;

    const product = {
      title: name, desc, price, oldPrice,
      sku: (fd.get('sku') || '').trim(),
      color: (fd.get('color') || '').trim(),
      category: state.adminCategory,
      gender: state.adminGender,
      brand: state.adminBrand,
      sizesTop, sizesBottom, pantsLengths,
      avail: state.adminAvail, photo: state.adminPhotoData,
    };
    try { await API.addProduct(product); await refreshProducts(); }
    catch (err) { alert('Не вдалося додати товар: ' + (err.message || err.code)); return; }

    form.reset();
    state.adminPhotoData = null;
    state.adminAvail = 'stock';
    document.querySelectorAll('#p-avail button').forEach((b,i) => b.classList.toggle('active', i === 0));
    document.querySelectorAll('#p-sizes-top .size-chip, #p-sizes-bottom .size-chip').forEach(el => {
      const s = el.getAttribute('data-size');
      el.classList.toggle('active', s === 'S' || s === 'M' || s === 'L');
    });
    document.querySelectorAll('#p-pants-len .size-chip').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-len') === 'Regular');
    });
    document.querySelectorAll('#p-category button').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-cat') === 'scrubs');
    });
    state.adminCategory = 'scrubs';
    document.querySelectorAll('#p-gender button').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-gender') === 'unisex');
    });
    state.adminGender = 'unisex';
    document.querySelectorAll('#p-brand button').forEach((b) => {
      b.classList.toggle('active', !b.getAttribute('data-brand'));
    });
    state.adminBrand = '';
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
    const image = `<img src="${p.photo}" class="w-16 h-16 rounded-xl object-cover shrink-0" alt="" />`;
    const builtinBadge = '';
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
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-del');
      if (!confirm(t('admin.confirmDel'))) return;
      try { await API.delProduct(id); await refreshProducts(); }
      catch (e) { alert('Помилка: ' + (e.message || e.code)); return; }
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

  const orders = cache.orders.slice();
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
// News feed
// =============================================================================
const openNewsSheet = () => openSheetById('news-sheet');
const closeNewsSheet = () => closeSheetById('news-sheet');
const openNewsView = () => openSheetById('news-view-sheet');
const closeNewsView = () => closeSheetById('news-view-sheet');

function bindNews() {
  document.getElementById('btn-open-news').addEventListener('click', openNewsSheet);
  document.getElementById('news-sheet-backdrop').addEventListener('click', closeNewsSheet);
  document.getElementById('news-sheet-cancel').addEventListener('click', closeNewsSheet);
  document.getElementById('news-view-backdrop').addEventListener('click', closeNewsView);
  document.getElementById('news-view-close').addEventListener('click', closeNewsView);

  const photoInput = document.getElementById('n-photo');
  photoInput.addEventListener('change', async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Файл не є зображенням.'); photoInput.value = ''; return; }
    try {
      const r = await API.upload(file);
      state.newsPhotoData = r.url;
      const preview = document.getElementById('n-photo-preview');
      preview.src = r.url;
      preview.classList.remove('hidden');
      document.getElementById('n-photo-empty').classList.add('hidden');
    } catch (e) { alert('Не вдалося завантажити фото: ' + (e.message || e.code)); }
  });

  document.getElementById('news-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const title = (fd.get('title') || '').trim();
    const body = (fd.get('body') || '').trim();

    let ok = true;
    if (!title) { setFieldError('n-title', 'err.required'); ok = false; } else setFieldError('n-title', null);
    if (!body)  { setFieldError('n-body',  'err.required'); ok = false; } else setFieldError('n-body', null);
    if (!ok) return;

    try { await API.addNews({ title, body, photo: state.newsPhotoData || null }); await refreshNews(); }
    catch (err) { alert('Помилка публікації: ' + (err.message || err.code)); return; }

    form.reset();
    state.newsPhotoData = null;
    document.getElementById('n-photo-preview').classList.add('hidden');
    document.getElementById('n-photo-empty').classList.remove('hidden');

    closeNewsSheet();
    toast(t('news.published'));
    renderNews();
  });
}

function renderNews() {
  const list = document.getElementById('news-list');
  const empty = document.getElementById('news-empty');
  if (!list) return;

  const posts = cache.news;
  empty.classList.toggle('hidden', posts.length > 0);
  const isAdmin = state.user?.role === 'admin';

  list.innerHTML = posts.map(p => {
    const d = new Date(p.createdAt);
    const dateStr = d.toLocaleDateString(state.lang === 'ua' ? 'uk-UA' : 'en-GB',
      { day: '2-digit', month: 'long', year: 'numeric' });
    const cover = p.photo
      ? `<img src="${p.photo}" alt="" class="w-full aspect-[16/9] object-cover" />`
      : `<div class="w-full aspect-[16/9] bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center">
           <img src="assets/logo.jpg" class="w-16 h-16 rounded-2xl opacity-90" alt="" />
         </div>`;
    const delBtn = isAdmin ? `
      <button data-news-del="${p.id}"
        class="shrink-0 w-9 h-9 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition"
        aria-label="Delete">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>` : '';

    return `
      <article class="rounded-[24px] bg-white dark:bg-ios-darkCard shadow-sm overflow-hidden">
        <button data-news-open="${p.id}" class="block w-full text-left">
          ${cover}
        </button>
        <div class="p-5">
          <div class="flex items-start gap-3">
            <div class="flex-1 min-w-0">
              <div class="text-[12px] font-semibold text-brand dark:text-brand-light uppercase tracking-wider">${dateStr}</div>
              <button data-news-open="${p.id}" class="block text-left mt-1">
                <h3 class="font-bold text-[19px] sm:text-[22px] leading-tight hover:text-brand dark:hover:text-brand-light transition">${escapeHTML(p.title)}</h3>
              </button>
              <p class="mt-2 text-[14.5px] text-ios-text2 dark:text-ios-darkText2 leading-relaxed line-clamp-3">${escapeHTML(p.body)}</p>
              <button data-news-open="${p.id}"
                class="mt-3 text-brand dark:text-brand-light font-semibold text-[14px] hover:underline">
                ${t('news.read')} →
              </button>
            </div>
            ${delBtn}
          </div>
        </div>
      </article>`;
  }).join('');

  list.querySelectorAll('[data-news-open]').forEach(b => {
    b.addEventListener('click', () => openNewsPost(b.getAttribute('data-news-open')));
  });
  list.querySelectorAll('[data-news-del]').forEach(b => {
    b.addEventListener('click', async (e) => {
      e.stopPropagation();
      const id = b.getAttribute('data-news-del');
      if (!confirm(t('news.confirmDel'))) return;
      try { await API.delNews(id); await refreshNews(); }
      catch (err) { alert('Помилка: ' + (err.message || err.code)); return; }
      toast(t('news.removed'));
      renderNews();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function openNewsPost(id) {
  const post = cache.news.find(p => p.id === id);
  if (!post) return;
  const d = new Date(post.createdAt);
  const dateStr = d.toLocaleDateString(state.lang === 'ua' ? 'uk-UA' : 'en-GB',
    { day: '2-digit', month: 'long', year: 'numeric' });
  document.getElementById('nv-title').textContent = post.title;
  document.getElementById('nv-body').textContent = post.body;
  document.getElementById('nv-date').textContent = dateStr;
  const cover = document.getElementById('nv-cover');
  if (post.photo) { cover.src = post.photo; cover.classList.remove('hidden'); }
  else            { cover.classList.add('hidden'); cover.removeAttribute('src'); }
  openNewsView();
}

// =============================================================================
// Presence / online users
// =============================================================================
const PRESENCE_TTL = 20_000;         // treat entry as online if seen in last 20s
const PRESENCE_INTERVAL = 5_000;     // heartbeat every 5s

let onlineCount = 0;
async function presenceHeartbeat() {
  try {
    const r = await API.presence(state.sessionId);
    onlineCount = r.online || 0;
  } catch {}
  renderOnline();
}
function presenceRemove() { /* server prunes by TTL */ }
function activeOnlineList() { return []; /* only aggregate count is exposed by API */ }

function renderOnline() {
  const list = document.getElementById('online-list');
  const empty = document.getElementById('online-empty');
  const countEl = document.getElementById('online-count');
  if (!list) return;

  const users = activeOnlineList();
  countEl.textContent = onlineCount;
  empty.classList.toggle('hidden', onlineCount > 0);

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
  return; // detailed per-user view not available with server API; card no longer opens
  // eslint-disable-next-line no-unreachable
  const acc = null; const online = false; const orders = [];

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

// Read an image File and produce a downscaled JPEG data URL that fits in
// localStorage. Handles phone photos (5-15 MB) transparently.
async function imageFileToDataURL(file, opts = {}) {
  const maxSide = opts.maxSide ?? 1600;
  const quality = opts.quality ?? 0.85;

  const rawUrl = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

  const img = await new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = rawUrl;
  });

  // Small enough already — keep the original.
  if (img.width <= maxSide && img.height <= maxSide && file.size < 400 * 1024) {
    return rawUrl;
  }

  const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
  const w = Math.round(img.width * scale);
  const h = Math.round(img.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL('image/jpeg', quality);
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

  // Shop availability filter
  document.querySelectorAll('#avail-seg [data-avail-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.shopAvail = b.getAttribute('data-avail-filter');
      renderShop();
    });
  });
  // Shop gender filter
  document.querySelectorAll('#gender-seg [data-gender-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.shopGender = b.getAttribute('data-gender-filter');
      renderShop();
    });
  });
  document.querySelectorAll('[data-nav]').forEach(b =>
    b.addEventListener('click', () => go(b.getAttribute('data-nav')))
  );

  document.getElementById('sheet-backdrop').addEventListener('click', closeSheet);
  document.getElementById('sheet-cancel').addEventListener('click', closeSheet);
  document.getElementById('cart-btn').addEventListener('click', openCartSheet);

  document.getElementById('user-sheet-backdrop').addEventListener('click', closeUserSheet);
  document.getElementById('user-sheet-close').addEventListener('click', closeUserSheet);

  document.getElementById('cart-sheet-backdrop').addEventListener('click', closeCartSheet);
  document.getElementById('cart-sheet-close').addEventListener('click', closeCartSheet);
  document.getElementById('cart-clear').addEventListener('click', () => { if (confirm(t('cart.confirmClear'))) clearCart(); });
  document.getElementById('cart-checkout').addEventListener('click', checkout);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeSheet(); closeAddSheet(); closeUserSheet(); closeCartSheet(); }
  });
  window.addEventListener('resize', updateNavThumb);
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('popstate', handleHashChange);

  // Presence lifecycle
  window.addEventListener('beforeunload', presenceRemove);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) presenceHeartbeat(); });
}

// =============================================================================
// 17. Boot
// =============================================================================
async function boot() {
  applyTheme();
  bindGlobal();
  bindAuth();
  bindAdmin();
  bindNews();

  // Restore session, load data from server before first render
  await refreshMe();
  await Promise.all([refreshProducts(), refreshNews(), refreshOrders()]);

  updateDOM();
  if (window.lucide) window.lucide.createIcons();

  handleHashChange();
  presenceHeartbeat();
  setInterval(presenceHeartbeat, PRESENCE_INTERVAL);
  // Periodic data refresh so other devices see new items
  setInterval(async () => {
    await Promise.all([refreshProducts(), refreshNews()]);
    if (state.currentPage === 'shop') renderShop();
    if (state.currentPage === 'news') renderNews();
    if (state.currentPage === 'admin') { renderAdminList(); renderAdminOrders(); }
  }, 15000);
}
document.addEventListener('DOMContentLoaded', boot);
