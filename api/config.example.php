<?php
// Скопіюй цей файл у config.php і заповни своїми даними MySQL з кабінету cityhost.
return [
  'db_host' => 'localhost',
  'db_name' => 'ch9da1d325_medic',
  'db_user' => 'ch9da1d325_medic',
  'db_pass' => 'ЗАМІНИ_НА_ПАРОЛЬ_БАЗИ',
  'db_charset' => 'utf8mb4',

  // Абсолютний або відносний шлях до папки з фото. За замовчуванням — /uploads на сайті.
  'uploads_dir' => __DIR__ . '/../uploads',
  'uploads_url' => '/uploads',

  // Сідовий адмін (створюється один раз через install.php)
  'seed_admin_name'  => 'Darina',
  'seed_admin_email' => 'admin@darina-medical.com',
  'seed_admin_pass'  => 'dariya31',

  // SMTP для відправки листів (відновлення пароля тощо).
  // Якщо ключа "smtp" немає — падаємо назад на mail(), що на shared зазвичай мовчки не доходить.
  // 'smtp' => [
  //   'host'       => 'mail.medicdariya.com',
  //   'port'       => 587,               // 465 для SSL, 587 для STARTTLS
  //   'secure'     => 'tls',             // 'tls' | 'ssl' | ''
  //   'user'       => 'noreply@medicdariya.com',
  //   'pass'       => 'ЗАМІНИ_НА_ПАРОЛЬ_СКРИНЬКИ',
  //   'from_email' => 'noreply@medicdariya.com',
  //   'from_name'  => 'MEDIC DARIYA',
  // ],
];
