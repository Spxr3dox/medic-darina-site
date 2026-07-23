<?php
require __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') json_err('not_found', 404);
require_auth();
if (empty($_FILES['file'])) json_err('no_file');

$f = $_FILES['file'];
if ($f['error'] !== UPLOAD_ERR_OK) json_err('upload_failed', 400, ['code' => $f['error']]);
if ($f['size'] > 8 * 1024 * 1024) json_err('too_large');

$mime = mime_content_type($f['tmp_name']) ?: '';
if (!preg_match('~^image/(jpeg|png|webp|gif)$~', $mime, $m)) json_err('not_image');
$ext = ['jpeg' => 'jpg', 'png' => 'png', 'webp' => 'webp', 'gif' => 'gif'][$m[1]];

$c = cfg();
$dir = $c['uploads_dir'];
if (!is_dir($dir)) @mkdir($dir, 0755, true);
if (!is_writable($dir)) json_err('uploads_dir_not_writable', 500);

$name = new_id('') . '.' . $ext;
$dest = rtrim($dir, '/') . '/' . $name;
if (!move_uploaded_file($f['tmp_name'], $dest)) json_err('move_failed', 500);

$url = rtrim($c['uploads_url'], '/') . '/' . $name;
json_out(['url' => $url]);
