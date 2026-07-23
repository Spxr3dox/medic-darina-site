<?php
require __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

if ($method === 'GET') {
  $rows = db()->query('SELECT * FROM news ORDER BY created_at DESC')->fetchAll();
  json_out(['news' => array_map('serialize_news', $rows)]);
}

if ($method === 'POST' && $action === 'add') {
  require_admin();
  $b = body_json();
  if (empty($b['title'])) json_err('missing_fields');
  $id = new_id('n_');
  db()->prepare('INSERT INTO news (id, title, body, photo, created_at) VALUES (?, ?, ?, ?, ?)')
    ->execute([$id, trim((string) $b['title']), (string) ($b['body'] ?? ''), $b['photo'] ?? null, now_ms()]);
  $st = db()->prepare('SELECT * FROM news WHERE id = ?');
  $st->execute([$id]);
  json_out(['news' => serialize_news($st->fetch())]);
}

if ($method === 'POST' && $action === 'delete') {
  require_admin();
  $id = (string) ($_GET['id'] ?? '');
  if ($id === '') json_err('missing_id');
  db()->prepare('DELETE FROM news WHERE id = ?')->execute([$id]);
  json_out(['ok' => true]);
}

json_err('not_found', 404);
