<?php
require __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_err('not_found', 404);
require_auth();
if (empty($_FILES['file'])) json_err('no_file');

$f = $_FILES['file'];
if ($f['error'] !== UPLOAD_ERR_OK) json_err('upload_failed', 400, ['code' => $f['error']]);
if ($f['size'] > 12 * 1024 * 1024) json_err('too_large');

// name може бути з дивними символами — беремо MIME по вмісту
$mime = function_exists('mime_content_type') ? (mime_content_type($f['tmp_name']) ?: '') : '';
// fallback: getimagesize
if ($mime === '' || !preg_match('~^image/~', $mime)) {
  $gi = @getimagesize($f['tmp_name']);
  if ($gi && !empty($gi['mime'])) $mime = $gi['mime'];
}
if (!preg_match('~^image/(jpeg|png|webp|gif)$~', $mime, $m)) json_err('not_image', 400, ['mime' => $mime]);
$ext = ['jpeg' => 'jpg', 'png' => 'png', 'webp' => 'webp', 'gif' => 'gif'][$m[1]];

$c = cfg();
$dir = realpath($c['uploads_dir']) ?: $c['uploads_dir'];
if (!is_dir($dir)) @mkdir($dir, 0755, true);
if (!is_writable($dir)) json_err('uploads_dir_not_writable', 500, ['dir' => $dir]);

$name = new_id('') . '.' . $ext;
$dest = rtrim($dir, '/') . '/' . $name;

// 1) стандартний спосіб
$moved = @move_uploaded_file($f['tmp_name'], $dest);

// 2) fallback: copy() — якщо move_uploaded_file впав через дивну взаємодію з open_basedir
if (!$moved && is_uploaded_file($f['tmp_name'])) {
  $moved = @copy($f['tmp_name'], $dest);
  if ($moved) @unlink($f['tmp_name']);
}

// 3) fallback: читати вміст і писати file_put_contents
if (!$moved) {
  $data = @file_get_contents($f['tmp_name']);
  if ($data !== false) {
    $written = @file_put_contents($dest, $data);
    $moved = $written === strlen($data);
  }
}

if (!$moved || !is_file($dest)) {
  json_err('move_failed', 500, [
    'dir' => $dir,
    'dest' => $dest,
    'tmp_exists' => is_file($f['tmp_name']),
    'is_uploaded' => is_uploaded_file($f['tmp_name']),
    'is_writable' => is_writable($dir),
    'last_error' => error_get_last(),
  ]);
}

@chmod($dest, 0644);

$url = rtrim($c['uploads_url'], '/') . '/' . $name;
json_out(['url' => $url, 'saved' => filesize($dest)]);
