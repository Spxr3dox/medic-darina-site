# MEDIC DARIYA — деплой на VPS (cityhost.ua)

Стек: Node.js 20 LTS + Express + SQLite (better-sqlite3) + Nginx + Let's Encrypt.

Усі команди виконуються під root або через `sudo`. Домен нижче — заміни на свій.

```
DOMAIN=medic-dariya.example
```

## 1. Node 20 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs build-essential python3
node -v   # v20.x
```

## 2. Клонуємо код

```bash
apt-get install -y git
mkdir -p /var/www && cd /var/www
git clone https://github.com/Spxr3dox/medic-darina-site.git medic-dariya
cd medic-dariya/server
npm install --omit=dev
```

`better-sqlite3` підтягне prebuild для Node 20 без компіляції.

## 3. Перший запуск

```bash
node server.js
# → [db] seeded admin account: admin@darina-medical.com
# → [medic-dariya] listening on http://127.0.0.1:3000
```

Оборви `Ctrl+C` — далі pm2.

## 4. pm2 (авто-старт при ребуті)

```bash
npm i -g pm2
cd /var/www/medic-dariya/server
pm2 start server.js --name medic-dariya
pm2 save
pm2 startup systemd -u root --hp /root   # виконай команду, яку виведе
```

## 5. Nginx reverse proxy

```bash
apt-get install -y nginx
cat >/etc/nginx/sites-available/medic-dariya <<EOF
server {
  listen 80;
  server_name $DOMAIN;

  client_max_body_size 12M;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
  }
}
EOF
ln -sf /etc/nginx/sites-available/medic-dariya /etc/nginx/sites-enabled/medic-dariya
nginx -t && systemctl reload nginx
```

Тепер сайт відкриється по HTTP.

## 6. SSL (Let's Encrypt)

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d $DOMAIN --agree-tos -m admin@darina-medical.com --redirect
```

Certbot сам додасть redirect з HTTP на HTTPS і поставить auto-renew.

## 7. Оновлення (при пуші в GitHub)

```bash
cd /var/www/medic-dariya
git pull
cd server && npm install --omit=dev
pm2 restart medic-dariya
```

## 8. Дані

- SQLite: `/var/www/medic-dariya/server/data.sqkite` — бекапити разом із:
- Uploads: `/var/www/medic-dariya/server/uploads/`

Приклад бекапу по cron:

```bash
0 3 * * * tar -czf /root/backups/md-$(date +%F).tgz -C /var/www/medic-dariya/server data.sqlite uploads
```

## 9. Скидання адміна

Якщо забула пароль:

```bash
sqlite3 /var/www/medic-dariya/server/data.sqlite \
  "DELETE FROM accounts WHERE email='admin@darina-medical.com';"
pm2 restart medic-dariya   # re-seeds
```
