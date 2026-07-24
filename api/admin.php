<?php
require __DIR__ . '/_bootstrap.php';

require_admin();

$action = $_GET['action'] ?? '';

if ($action === 'users') {
  $rows = db()->query(
    "SELECT a.id, a.name, a.email, a.role, a.created_at,
            (SELECT COUNT(*) FROM orders o WHERE o.account_id = a.id) AS orders_count,
            (SELECT MAX(v.created_at) FROM visits v WHERE v.account_id = a.id) AS last_seen
     FROM accounts a
     ORDER BY a.created_at DESC"
  )->fetchAll();

  $users = array_map(function ($r) {
    return [
      'id'          => $r['id'],
      'name'        => $r['name'],
      'email'       => $r['email'],
      'role'        => $r['role'],
      'createdAt'   => (int) $r['created_at'],
      'ordersCount' => (int) ($r['orders_count'] ?? 0),
      'lastSeen'    => $r['last_seen'] !== null ? (int) $r['last_seen'] : null,
    ];
  }, $rows);

  json_out(['users' => $users, 'total' => count($users)]);
}

if ($action === 'stats') {
  $now  = now_ms();
  $day  = $now - 24 * 60 * 60 * 1000;
  $week = $now - 7  * 24 * 60 * 60 * 1000;
  $month = $now - 30 * 24 * 60 * 60 * 1000;

  $c = function (string $sql, array $args = []): int {
    $st = db()->prepare($sql);
    $st->execute($args);
    return (int) $st->fetchColumn();
  };

  $totalUsers   = $c('SELECT COUNT(*) FROM accounts');
  $totalOrders  = $c('SELECT COUNT(*) FROM orders');
  $totalRevenue = (float) db()->query('SELECT COALESCE(SUM(total),0) FROM orders')->fetchColumn();

  $visitsAll     = $c('SELECT COUNT(*) FROM visits');
  $visitsDay     = $c('SELECT COUNT(*) FROM visits WHERE created_at >= ?', [$day]);
  $visitsWeek    = $c('SELECT COUNT(*) FROM visits WHERE created_at >= ?', [$week]);
  $visitsMonth   = $c('SELECT COUNT(*) FROM visits WHERE created_at >= ?', [$month]);

  $uniqueDay     = $c('SELECT COUNT(DISTINCT session_id) FROM visits WHERE created_at >= ?', [$day]);
  $uniqueWeek    = $c('SELECT COUNT(DISTINCT session_id) FROM visits WHERE created_at >= ?', [$week]);
  $uniqueMonth   = $c('SELECT COUNT(DISTINCT session_id) FROM visits WHERE created_at >= ?', [$month]);
  $uniqueAll     = $c('SELECT COUNT(DISTINCT session_id) FROM visits');

  // Per-day breakdown for the last 14 days
  $byDay = [];
  for ($i = 13; $i >= 0; $i--) {
    $from = $now - ($i + 1) * 86400_000;
    $to   = $now -  $i      * 86400_000;
    $vis  = $c('SELECT COUNT(*) FROM visits WHERE created_at >= ? AND created_at < ?', [$from, $to]);
    $uni  = $c('SELECT COUNT(DISTINCT session_id) FROM visits WHERE created_at >= ? AND created_at < ?', [$from, $to]);
    $byDay[] = ['ts' => $from, 'visits' => $vis, 'unique' => $uni];
  }

  // Top pages (last 30 days)
  $st = db()->prepare(
    'SELECT page, COUNT(*) AS n FROM visits
     WHERE created_at >= ? AND page IS NOT NULL AND page <> ""
     GROUP BY page ORDER BY n DESC LIMIT 10'
  );
  $st->execute([$month]);
  $topPages = array_map(function ($r) {
    return ['page' => $r['page'], 'count' => (int) $r['n']];
  }, $st->fetchAll());

  json_out([
    'totals' => [
      'users'   => $totalUsers,
      'orders'  => $totalOrders,
      'revenue' => $totalRevenue,
      'visits'  => $visitsAll,
      'unique'  => $uniqueAll,
    ],
    'visits' => [
      'day'   => $visitsDay,   'uniqueDay'   => $uniqueDay,
      'week'  => $visitsWeek,  'uniqueWeek'  => $uniqueWeek,
      'month' => $visitsMonth, 'uniqueMonth' => $uniqueMonth,
    ],
    'byDay'    => $byDay,
    'topPages' => $topPages,
  ]);
}

json_err('not_found', 404);
