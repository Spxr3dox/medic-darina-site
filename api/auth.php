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

json_err('not_found', 404);
