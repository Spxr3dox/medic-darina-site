# MEDIC DARIYA — деплой на cityhost.ua (Хостинг 2.0)

Хостинг shared, тому бекенд написано на **PHP + MySQL** — саме те, що працює на cityhost без VPS.

Один раз треба:
1. Створити MySQL-базу
2. Прописати її дані у `api/config.php`
3. Залити всі файли по FTP
4. Відкрити `https://medicdariya.com/api/install.php` (одноразовий інсталер)

## 1. Створити MySQL-базу

Кабінет cityhost → **Хостинг 2.0** → тариф `ch9da1d325` → вкладка **«Бази даних»** → **«Створити базу»**.

- Назва бази: наприклад `ch9da1d325_medic`
- Користувач: `ch9da1d325_medic`
- Пароль: згенеруй новий і **збережи**

Після створення система покаже:
- host (зазвичай `localhost`)
- назва бази
- користувач
- пароль

Ці 4 значення потрібні для наступного кроку.

## 2. Налаштувати `api/config.php`

У локальній копії сайту:

```bash
cp api/config.example.php api/config.php
```

Відкрий `api/config.php` у редакторі та підстав дані з попереднього кроку:

```php
'db_host' => 'localhost',
'db_name' => 'ch9da1d325_medic',
'db_user' => 'ch9da1d325_medic',
'db_pass' => 'ТУТ_ПАРОЛЬ_БАЗИ',
```

**Не комітити** цей файл у git — він у `.gitignore`.

## 3. Залити файли на хостинг

Кабінет cityhost → **Хостинг 2.0** → `ch9da1d325` → **«Файловий менеджер»** (або по FTP).

Root сайту у cityhost — папка `public_html/` (або `www/`). Заливай туди все з `/home/spaxer/Стільниця/sites/medic-dariya/`:

```
public_html/
├── index.html
├── app.js
├── styles.css
├── assets/
├── api/           ← весь вміст, включно з config.php
└── uploads/       ← порожня, права запису (755 або 775)
```

Уваги:
- Папка `uploads/` мусить мати права на запис (chmod 755, а якщо PHP-FPM бунтує — 775).
- Не заливати `.git/`, `README.md`, `DEPLOY.md` — це для розробки.

## 4. Запустити інсталер

Відкрий у браузері:

```
https://medicdariya.com/api/install.php
```

Побачиш JSON типу:

```json
{
  "ok": true,
  "statements_applied": 6,
  "admin_seeded": true,
  "admin_email": "admin@darina-medical.com",
  "uploads_dir_ok": true
}
```

Якщо `admin_seeded: true` — сідовий адмін створений (`admin@darina-medical.com` / `Medic-darina-best31`).

**Після цього видали `api/install.php` через файловий менеджер!**

## 5. Перевірка

- Відкрий сайт: `https://medicdariya.com/`
- Увійди як адмін
- Додай товар — він повинен зʼявитися на іншому пристрої в іншому браузері.

## Оновлення

При зміні коду:
- Залий по FTP тільки змінені файли (`app.js`, або якийсь `api/*.php`).
- `config.php` і базу не чіпати.

## Резервне копіювання

- **База**: у phpMyAdmin (кабінет cityhost) → експорт SQL.
- **Uploads**: скачати папку `uploads/` по FTP.

## Скидання пароля адміна

Якщо забула пароль:
1. Відкрити phpMyAdmin через кабінет.
2. Таблиця `accounts` → знайти рядок з `email = 'admin@darina-medical.com'` → видалити.
3. Знову відкрити `https://medicdariya.com/api/install.php` (тимчасово залити його назад) — сідовий адмін відновиться з дефолтним паролем.
4. Видалити `install.php`.
