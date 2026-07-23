<?php
// Одноразовий інсталер. Відкрий у браузері: https://medicdariya.com/api/install.php
// Створює таблиці й сідового адміна. Після успішного запуску можна видалити цей файл.
require __DIR__ . '/_bootstrap.php';

$c = cfg();

// 1) Applied schema
$sql = file_get_contents(__DIR__ . '/schema.sql');
$statements = array_filter(array_map('trim', preg_split('/;\s*[\r\n]+/', $sql)));
$applied = 0;
foreach ($statements as $s) {
  if ($s === '' || str_starts_with($s, '--')) continue;
  db()->exec($s);
  $applied++;
}

// 2) Seed admin (idempotent)
$st = db()->prepare('SELECT id FROM accounts WHERE email = ?');
$st->execute([$c['seed_admin_email']]);
$seeded = false;
if (!$st->fetchColumn()) {
  $id = 'seed-admin-' . base_convert((string) time(), 10, 36);
  $hash = password_hash($c['seed_admin_pass'], PASSWORD_BCRYPT);
  db()->prepare(
    "INSERT INTO accounts (id, name, email, pass_hash, role, created_at) VALUES (?, ?, ?, ?, 'admin', ?)"
  )->execute([$id, $c['seed_admin_name'], $c['seed_admin_email'], $hash, now_ms()]);
  $seeded = true;
}

// 3) Verify uploads dir
$uploads_ok = is_dir($c['uploads_dir']) && is_writable($c['uploads_dir']);
if (!$uploads_ok) @mkdir($c['uploads_dir'], 0755, true);
$uploads_ok = is_dir($c['uploads_dir']) && is_writable($c['uploads_dir']);

json_out([
  'ok' => true,
  'statements_applied' => $applied,
  'admin_seeded' => $seeded,
  'admin_email' => $c['seed_admin_email'],
  'uploads_dir_ok' => $uploads_ok,
  'note' => 'Все готово. Тепер видали цей файл (api/install.php) з хостингу.',
]);
