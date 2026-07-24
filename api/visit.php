<?php
require __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_err('not_found', 404);

$b = body_json();
$sid = substr((string) ($b['sessionId'] ?? ''), 0, 64);
if ($sid === '') json_err('no_sid');

$page = substr((string) ($b['page'] ?? ''), 0, 64);
$ref  = substr((string) ($b['ref']  ?? ($_SERVER['HTTP_REFERER'] ?? '')), 0, 255);
$ua   = substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255);
$ip   = substr((string) ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? ''), 0, 64);
if ($ip && strpos($ip, ',') !== false) $ip = trim(explode(',', $ip)[0]);

$u = current_user();

db()->prepare(
  'INSERT INTO visits (session_id, account_id, page, ref, ua, ip, created_at)
   VALUES (?, ?, ?, ?, ?, ?, ?)'
)->execute([$sid, $u['id'] ?? null, $page ?: null, $ref ?: null, $ua ?: null, $ip ?: null, now_ms()]);

json_out(['ok' => true]);
