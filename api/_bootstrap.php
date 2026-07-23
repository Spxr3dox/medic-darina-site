<?php
declare(strict_types=1);

// Universal bootstrap for every /api/*.php endpoint.
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

// Handle CORS preflight (usually not needed same-origin, but harmless).
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Authorization');
  http_response_code(204);
  exit;
}

function json_out($data, int $code = 200): void {
  http_response_code($code);
  echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}
function json_err(string $err, int $code = 400, array $extra = []): void {
  json_out(array_merge(['error' => $err], $extra), $code);
}

function cfg(): array {
  static $c = null;
  if ($c !== null) return $c;
  $path = __DIR__ . '/config.php';
  if (!is_file($path)) {
    json_err('config_missing', 500, ['hint' => 'Copy api/config.example.php to api/config.php and fill DB credentials.']);
  }
  $c = require $path;
  return $c;
}

function db(): PDO {
  static $pdo = null;
  if ($pdo !== null) return $pdo;
  $c = cfg();
  $dsn = "mysql:host={$c['db_host']};dbname={$c['db_name']};charset={$c['db_charset']}";
  try {
    $pdo = new PDO($dsn, $c['db_user'], $c['db_pass'], [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
  } catch (Throwable $e) {
    error_log('DB connect failed: ' . $e->getMessage());
    json_err('db_unavailable', 500);
  }
  return $pdo;
}

function body_json(): array {
  $raw = file_get_contents('php://input') ?: '';
  if ($raw === '') return [];
  $arr = json_decode($raw, true);
  return is_array($arr) ? $arr : [];
}

function now_ms(): int { return (int) (microtime(true) * 1000); }

function new_id(string $prefix = ''): string {
  return $prefix . rtrim(strtr(base64_encode(random_bytes(9)), '+/', '-_'), '=');
}

function current_user(): ?array {
  $hdr = $_SERVER['HTTP_AUTHORIZATION'] ?? ($_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '');
  if (!$hdr || stripos($hdr, 'Bearer ') !== 0) return null;
  $tok = trim(substr($hdr, 7));
  if ($tok === '') return null;
  $st = db()->prepare(
    'SELECT a.* FROM sessions s JOIN accounts a ON a.id = s.account_id WHERE s.token = ? LIMIT 1'
  );
  $st->execute([$tok]);
  $r = $st->fetch();
  return $r ?: null;
}
function require_auth(): array {
  $u = current_user();
  if (!$u) json_err('auth_required', 401);
  return $u;
}
function require_admin(): array {
  $u = require_auth();
  if (($u['role'] ?? 'user') !== 'admin') json_err('admin_required', 403);
  return $u;
}

function serialize_account(array $a): array {
  return [
    'id' => $a['id'], 'name' => $a['name'], 'email' => $a['email'],
    'role' => $a['role'], 'avatar' => $a['avatar'] ?? null,
    'createdAt' => (int) $a['created_at'],
  ];
}
function serialize_product(array $p): array {
  return [
    'id' => $p['id'],
    'title' => $p['title'],
    'desc' => $p['descr'] ?? '',
    'price' => (float) $p['price'],
    'oldPrice' => isset($p['old_price']) ? (float) $p['old_price'] : null,
    'sku' => $p['sku'] ?? '', 'color' => $p['color'] ?? '',
    'category' => $p['category'] ?? 'scrubs',
    'gender' => $p['gender'] ?? 'unisex',
    'brand' => $p['brand'] ?? '',
    'sizesTop' => json_decode($p['sizes_top'] ?? '[]', true) ?: [],
    'sizesBottom' => json_decode($p['sizes_bottom'] ?? '[]', true) ?: [],
    'pantsLengths' => json_decode($p['pants_lens'] ?? '[]', true) ?: [],
    'avail' => $p['avail'] ?? 'stock',
    'photo' => $p['photo'] ?? null,
    'createdAt' => (int) $p['created_at'],
  ];
}
function serialize_news(array $n): array {
  return [
    'id' => $n['id'], 'title' => $n['title'], 'body' => $n['body'] ?? '',
    'photo' => $n['photo'] ?? null, 'createdAt' => (int) $n['created_at'],
  ];
}
function serialize_order(array $o): array {
  return [
    'id' => $o['id'], 'accountId' => $o['account_id'],
    'userName' => $o['acc_name'] ?? 'Гість',
    'userEmail' => $o['acc_email'] ?? '',
    'items' => json_decode($o['items_json'] ?? '[]', true) ?: [],
    'total' => (float) $o['total'],
    'status' => $o['status'] ?? 'new',
    'createdAt' => (int) $o['created_at'],
  ];
}
