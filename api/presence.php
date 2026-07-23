<?php
require __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_err('not_found', 404);

$b = body_json();
$sid = substr((string) ($b['sessionId'] ?? ''), 0, 64);
if ($sid === '') json_err('no_sid');

$u = current_user();
$now = now_ms();

db()->prepare(
  'INSERT INTO presence (session_id, account_id, seen_at) VALUES (?, ?, ?)
   ON DUPLICATE KEY UPDATE account_id = VALUES(account_id), seen_at = VALUES(seen_at)'
)->execute([$sid, $u['id'] ?? null, $now]);

$cutoff = $now - 30_000;
db()->prepare('DELETE FROM presence WHERE seen_at < ?')->execute([$cutoff]);
$st = db()->prepare('SELECT COUNT(*) FROM presence WHERE seen_at >= ?');
$st->execute([$cutoff]);
json_out(['online' => (int) $st->fetchColumn()]);
