<?php
// Тимчасовий скрипт зміни пароля адміна. Видали одразу після використання!
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: text/plain; charset=utf-8');

require __DIR__ . '/_bootstrap.php';

$email = 'admin@darina-medical.com';
$new = 'dariya31';

$hash = password_hash($new, PASSWORD_BCRYPT);
$n = db()->prepare('UPDATE accounts SET pass_hash = ? WHERE email = ?')->execute([$hash, $email]);
$row = db()->prepare('SELECT id, name, email, role FROM accounts WHERE email = ?');
$row->execute([$email]);
$acc = $row->fetch(PDO::FETCH_ASSOC);

echo "email: $email\n";
echo "new_password: $new\n";
echo "updated: " . ($n ? 'yes' : 'no') . "\n";
echo "account: " . json_encode($acc, JSON_UNESCAPED_UNICODE) . "\n";

// Прибираємо всі старі сесії адміна, щоб треба було увійти заново
db()->prepare('DELETE FROM sessions WHERE account_id = ?')->execute([$acc['id'] ?? '']);
echo "sessions cleared\n";

echo "\nDONE — видали цей файл (setpass.php) через файловий менеджер!\n";
