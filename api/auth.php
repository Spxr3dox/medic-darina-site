<?php
require __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

if ($method === 'GET' && $action === 'me') {
  $u = current_user();
  json_out(['user' => $u ? serialize_account($u) : null]);
}

if ($method === 'POST' && $action === 'signup') {
  $b = body_json();
  $name = trim((string) ($b['name'] ?? ''));
  $email = strtolower(trim((string) ($b['email'] ?? '')));
  $pass = (string) ($b['password'] ?? '');
  if ($name === '' || $email === '' || $pass === '') json_err('missing_fields');
  $st = db()->prepare('SELECT 1 FROM accounts WHERE email = ?');
  $st->execute([$email]);
  if ($st->fetchColumn()) json_err('email_taken', 409);
  $id = new_id('u_');
  $hash = password_hash($pass, PASSWORD_BCRYPT);
  db()->prepare(
    "INSERT INTO accounts (id, name, email, pass_hash, role, created_at) VALUES (?, ?, ?, ?, 'user', ?)"
  )->execute([$id, $name, $email, $hash, now_ms()]);
  $token = new_id('t_');
  db()->prepare('INSERT INTO sessions (token, account_id, created_at) VALUES (?, ?, ?)')
    ->execute([$token, $id, now_ms()]);
  $acc = db()->prepare('SELECT * FROM accounts WHERE id = ?');
  $acc->execute([$id]);
  json_out(['token' => $token, 'user' => serialize_account($acc->fetch())]);
}

if ($method === 'POST' && $action === 'signin') {
  $b = body_json();
  $email = strtolower(trim((string) ($b['email'] ?? '')));
  $pass = (string) ($b['password'] ?? '');
  if ($email === '' || $pass === '') json_err('missing_fields');
  $st = db()->prepare('SELECT * FROM accounts WHERE email = ?');
  $st->execute([$email]);
  $acc = $st->fetch();
  if (!$acc || !password_verify($pass, $acc['pass_hash'])) json_err('bad_credentials', 401);
  $token = new_id('t_');
  db()->prepare('INSERT INTO sessions (token, account_id, created_at) VALUES (?, ?, ?)')
    ->execute([$token, $acc['id'], now_ms()]);
  json_out(['token' => $token, 'user' => serialize_account($acc)]);
}

if ($method === 'POST' && $action === 'signout') {
  $hdr = $_SERVER['HTTP_AUTHORIZATION'] ?? ($_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '');
  if ($hdr && stripos($hdr, 'Bearer ') === 0) {
    db()->prepare('DELETE FROM sessions WHERE token = ?')->execute([trim(substr($hdr, 7))]);
  }
  json_out(['ok' => true]);
}

if ($method === 'POST' && $action === 'updateMe') {
  $u = require_auth();
  $b = body_json();
  $name = isset($b['name']) && trim((string) $b['name']) !== '' ? trim((string) $b['name']) : $u['name'];
  $avatar = array_key_exists('avatar', $b) ? $b['avatar'] : $u['avatar'];
  db()->prepare('UPDATE accounts SET name = ?, avatar = ? WHERE id = ?')
    ->execute([$name, $avatar, $u['id']]);
  $st = db()->prepare('SELECT * FROM accounts WHERE id = ?');
  $st->execute([$u['id']]);
  json_out(['user' => serialize_account($st->fetch())]);
}

if ($method === 'POST' && $action === 'forgot') {
  $b = body_json();
  $email = strtolower(trim((string) ($b['email'] ?? '')));
  if ($email === '') json_err('missing_fields');
  $st = db()->prepare('SELECT id, name, email FROM accounts WHERE email = ?');
  $st->execute([$email]);
  $acc = $st->fetch();
  // ЗАВЖДИ повертаємо ok, щоб не розголошувати чи email існує в базі
  if (!$acc) json_out(['ok' => true]);

  // Прибираємо старі невикористані токени користувача
  db()->prepare('DELETE FROM password_resets WHERE account_id = ? AND used_at IS NULL')->execute([$acc['id']]);

  $token = new_id('r_');
  $expires = now_ms() + 60 * 60 * 1000; // 1 година
  db()->prepare(
    'INSERT INTO password_resets (token, account_id, expires_at, created_at) VALUES (?, ?, ?, ?)'
  )->execute([$token, $acc['id'], $expires, now_ms()]);

  // Формуємо URL з токеном (використовуємо HTTPS + Host заголовок)
  $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
  $host = $_SERVER['HTTP_HOST'] ?? 'medicdariya.com';
  $link = $scheme . '://' . $host . '/#reset?token=' . rawurlencode($token);

  $subject = 'MEDIC DARIYA — відновлення пароля';
  $body =
    "Вітаємо, {$acc['name']}!\r\n\r\n" .
    "Ви (або хтось від вашого імені) запросили відновлення пароля до вашого акаунту MEDIC DARIYA.\r\n" .
    "Щоб задати новий пароль, перейдіть за посиланням протягом 1 години:\r\n\r\n" .
    "$link\r\n\r\n" .
    "Якщо ви не запитували відновлення — просто проігноруйте цей лист, ваш пароль лишиться без змін.\r\n\r\n" .
    "— MEDIC DARIYA\r\n";

  $from = 'noreply@' . preg_replace('~^www\.~', '', $host);
  $c = cfg();
  $smtp = $c['smtp'] ?? null;

  if (is_array($smtp) && !empty($smtp['host'])) {
    require_once __DIR__ . '/_smtp.php';
    smtp_send([
      'host' => $smtp['host'],
      'port' => $smtp['port'] ?? 587,
      'user' => $smtp['user'] ?? '',
      'pass' => $smtp['pass'] ?? '',
      'secure' => $smtp['secure'] ?? 'tls',
      'ehlo' => $host,
      'from_email' => $smtp['from_email'] ?? $smtp['user'] ?? $from,
      'from_name' => $smtp['from_name'] ?? 'MEDIC DARIYA',
      'to' => $acc['email'],
      'subject' => $subject,
      'body' => $body,
    ]);
  } else {
    $headers = [
      'From: MEDIC DARIYA <' . $from . '>',
      'Reply-To: ' . $from,
      'Content-Type: text/plain; charset=utf-8',
      'MIME-Version: 1.0',
      'X-Mailer: PHP/' . PHP_VERSION,
    ];
    @mail($acc['email'], '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
  }

  json_out(['ok' => true]);
}

if ($method === 'POST' && $action === 'reset') {
  $b = body_json();
  $tok = (string) ($b['token'] ?? '');
  $newPass = (string) ($b['password'] ?? '');
  if ($tok === '' || strlen($newPass) < 6) json_err('bad_input');

  $st = db()->prepare(
    'SELECT r.*, a.email FROM password_resets r JOIN accounts a ON a.id = r.account_id WHERE r.token = ?'
  );
  $st->execute([$tok]);
  $r = $st->fetch();
  if (!$r) json_err('invalid_token', 400);
  if ($r['used_at']) json_err('token_used', 400);
  if ((int) $r['expires_at'] < now_ms()) json_err('token_expired', 400);

  $hash = password_hash($newPass, PASSWORD_BCRYPT);
  db()->beginTransaction();
  db()->prepare('UPDATE accounts SET pass_hash = ? WHERE id = ?')->execute([$hash, $r['account_id']]);
  db()->prepare('UPDATE password_resets SET used_at = ? WHERE token = ?')->execute([now_ms(), $tok]);
  db()->prepare('DELETE FROM sessions WHERE account_id = ?')->execute([$r['account_id']]);
  db()->commit();

  json_out(['ok' => true, 'email' => $r['email']]);
}

json_err('not_found', 404);
