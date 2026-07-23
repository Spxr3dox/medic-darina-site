<?php
require __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

if ($method === 'GET') {
  $u = require_auth();
  $sql = 'SELECT o.*, a.name AS acc_name, a.email AS acc_email
          FROM orders o LEFT JOIN accounts a ON a.id = o.account_id';
  if (($u['role'] ?? 'user') === 'admin') {
    $rows = db()->query($sql . ' ORDER BY o.created_at DESC')->fetchAll();
  } else {
    $st = db()->prepare($sql . ' WHERE o.account_id = ? ORDER BY o.created_at DESC');
    $st->execute([$u['id']]);
    $rows = $st->fetchAll();
  }
  json_out(['orders' => array_map('serialize_order', $rows)]);
}

if ($method === 'POST' && $action === 'add') {
  $u = current_user();
  $b = body_json();
  if (empty($b['items']) || !is_array($b['items']) || !isset($b['total'])) json_err('bad_order');
  $id = new_id('o_');
  db()->prepare(
    "INSERT INTO orders (id, account_id, items_json, total, status, created_at)
     VALUES (?, ?, ?, ?, 'new', ?)"
  )->execute([$id, $u['id'] ?? null, json_encode($b['items'], JSON_UNESCAPED_UNICODE), (float) $b['total'], now_ms()]);
  $st = db()->prepare(
    'SELECT o.*, a.name AS acc_name, a.email AS acc_email
     FROM orders o LEFT JOIN accounts a ON a.id = o.account_id WHERE o.id = ?'
  );
  $st->execute([$id]);
  json_out(['order' => serialize_order($st->fetch())]);
}

json_err('not_found', 404);
