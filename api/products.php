<?php
require __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

if ($method === 'GET') {
  $rows = db()->query('SELECT * FROM products ORDER BY created_at DESC')->fetchAll();
  json_out(['products' => array_map('serialize_product', $rows)]);
}

if ($method === 'POST' && $action === 'add') {
  require_admin();
  $b = body_json();
  if (empty($b['title']) || !isset($b['price'])) json_err('missing_fields');
  $id = new_id('c_');
  db()->prepare(
    "INSERT INTO products
      (id, title, descr, price, old_price, sku, color, category, gender, brand,
       sizes_top, sizes_bottom, pants_lens, avail, photo, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  )->execute([
    $id,
    trim((string) $b['title']),
    (string) ($b['desc'] ?? ''),
    (float) $b['price'],
    isset($b['oldPrice']) && $b['oldPrice'] !== null ? (float) $b['oldPrice'] : null,
    (string) ($b['sku'] ?? ''),
    (string) ($b['color'] ?? ''),
    (string) ($b['category'] ?? 'scrubs'),
    (string) ($b['gender'] ?? 'unisex'),
    (string) ($b['brand'] ?? ''),
    json_encode(is_array($b['sizesTop'] ?? null) ? $b['sizesTop'] : []),
    json_encode(is_array($b['sizesBottom'] ?? null) ? $b['sizesBottom'] : []),
    json_encode(is_array($b['pantsLengths'] ?? null) ? $b['pantsLengths'] : []),
    ($b['avail'] ?? '') === 'order' ? 'order' : 'stock',
    $b['photo'] ?? null,
    now_ms(),
  ]);
  $st = db()->prepare('SELECT * FROM products WHERE id = ?');
  $st->execute([$id]);
  json_out(['product' => serialize_product($st->fetch())]);
}

if ($method === 'POST' && $action === 'update') {
  require_admin();
  $id = (string) ($_GET['id'] ?? '');
  if ($id === '') json_err('missing_id');
  $st = db()->prepare('SELECT * FROM products WHERE id = ?');
  $st->execute([$id]);
  if (!$st->fetch()) json_err('not_found', 404);
  $b = body_json();
  db()->prepare(
    "UPDATE products SET
       title = ?, descr = ?, price = ?, old_price = ?, sku = ?, color = ?,
       category = ?, gender = ?, brand = ?,
       sizes_top = ?, sizes_bottom = ?, pants_lens = ?,
       avail = ?, photo = ?
     WHERE id = ?"
  )->execute([
    trim((string) ($b['title'] ?? '')),
    (string) ($b['desc'] ?? ''),
    (float) ($b['price'] ?? 0),
    isset($b['oldPrice']) && $b['oldPrice'] !== null ? (float) $b['oldPrice'] : null,
    (string) ($b['sku'] ?? ''),
    (string) ($b['color'] ?? ''),
    (string) ($b['category'] ?? 'scrubs'),
    (string) ($b['gender'] ?? 'unisex'),
    (string) ($b['brand'] ?? ''),
    json_encode(is_array($b['sizesTop'] ?? null) ? $b['sizesTop'] : []),
    json_encode(is_array($b['sizesBottom'] ?? null) ? $b['sizesBottom'] : []),
    json_encode(is_array($b['pantsLengths'] ?? null) ? $b['pantsLengths'] : []),
    ($b['avail'] ?? '') === 'order' ? 'order' : 'stock',
    $b['photo'] ?? null,
    $id,
  ]);
  $r = db()->prepare('SELECT * FROM products WHERE id = ?');
  $r->execute([$id]);
  json_out(['product' => serialize_product($r->fetch())]);
}

if ($method === 'POST' && $action === 'delete') {
  require_admin();
  $id = (string) ($_GET['id'] ?? '');
  if ($id === '') json_err('missing_id');
  db()->prepare('DELETE FROM products WHERE id = ?')->execute([$id]);
  json_out(['ok' => true]);
}

json_err('not_found', 404);
