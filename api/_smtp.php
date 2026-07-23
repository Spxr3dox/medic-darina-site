<?php
declare(strict_types=1);

// Мінімальний SMTP-клієнт (STARTTLS або SSL). Без залежностей, без Composer.
// Використання:
//   smtp_send([
//     'host'=>'mail.medicdariya.com','port'=>587,'user'=>'noreply@medicdariya.com',
//     'pass'=>'…','secure'=>'tls',   // 'tls'|'ssl'|''
//     'from_email'=>'noreply@medicdariya.com','from_name'=>'MEDIC DARIYA',
//     'to'=>'user@gmail.com','subject'=>'…','body'=>'…',
//   ]);

function smtp_send(array $o): array {
  $host = $o['host'];
  $port = (int) ($o['port'] ?? 587);
  $secure = strtolower($o['secure'] ?? '');
  $timeout = (int) ($o['timeout'] ?? 15);

  $connectHost = ($secure === 'ssl') ? 'ssl://' . $host : $host;
  $errno = 0; $errstr = '';
  $fp = @stream_socket_client($connectHost . ':' . $port, $errno, $errstr, $timeout);
  if (!$fp) return ['ok' => false, 'stage' => 'connect', 'err' => "$errno $errstr"];
  stream_set_timeout($fp, $timeout);

  $log = [];
  $read = function () use ($fp, &$log): string {
    $out = '';
    while (($line = fgets($fp, 1024)) !== false) {
      $out .= $line;
      if (isset($line[3]) && $line[3] === ' ') break;
    }
    $log[] = '< ' . trim($out);
    return $out;
  };
  $write = function (string $cmd) use ($fp, &$log): void {
    fwrite($fp, $cmd . "\r\n");
    $log[] = '> ' . preg_replace('~^(AUTH\s+\S+\s+).+$~i', '$1***', $cmd);
  };
  $expect = function (string $resp, string $code) use (&$log): bool {
    return substr($resp, 0, 3) === $code;
  };

  $resp = $read();
  if (!$expect($resp, '220')) { fclose($fp); return ['ok'=>false,'stage'=>'greeting','log'=>$log]; }

  $ehloHost = $o['ehlo'] ?? 'localhost';
  $write('EHLO ' . $ehloHost);
  $resp = $read();
  if (!$expect($resp, '250')) { fclose($fp); return ['ok'=>false,'stage'=>'ehlo','log'=>$log]; }

  if ($secure === 'tls') {
    $write('STARTTLS');
    $resp = $read();
    if (!$expect($resp, '220')) { fclose($fp); return ['ok'=>false,'stage'=>'starttls','log'=>$log]; }
    stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    $write('EHLO ' . $ehloHost);
    $resp = $read();
    if (!$expect($resp, '250')) { fclose($fp); return ['ok'=>false,'stage'=>'ehlo2','log'=>$log]; }
  }

  if (!empty($o['user']) && !empty($o['pass'])) {
    $write('AUTH LOGIN');
    $resp = $read();
    if (!$expect($resp, '334')) { fclose($fp); return ['ok'=>false,'stage'=>'auth_login','log'=>$log]; }
    $write(base64_encode($o['user']));
    $resp = $read();
    if (!$expect($resp, '334')) { fclose($fp); return ['ok'=>false,'stage'=>'auth_user','log'=>$log]; }
    $write(base64_encode($o['pass']));
    $resp = $read();
    if (!$expect($resp, '235')) { fclose($fp); return ['ok'=>false,'stage'=>'auth_pass','log'=>$log]; }
  }

  $from = $o['from_email'];
  $write('MAIL FROM: <' . $from . '>');
  $resp = $read();
  if (!$expect($resp, '250')) { fclose($fp); return ['ok'=>false,'stage'=>'mail_from','log'=>$log]; }

  $write('RCPT TO: <' . $o['to'] . '>');
  $resp = $read();
  if (!$expect($resp, '250')) { fclose($fp); return ['ok'=>false,'stage'=>'rcpt_to','log'=>$log]; }

  $write('DATA');
  $resp = $read();
  if (!$expect($resp, '354')) { fclose($fp); return ['ok'=>false,'stage'=>'data','log'=>$log]; }

  $fromName = $o['from_name'] ?? '';
  $subject = '=?UTF-8?B?' . base64_encode($o['subject']) . '?=';
  $headers  = 'From: ' . ($fromName ? '"' . addslashes($fromName) . '" ' : '') . '<' . $from . '>' . "\r\n";
  $headers .= 'To: <' . $o['to'] . '>' . "\r\n";
  $headers .= 'Subject: ' . $subject . "\r\n";
  $headers .= 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
  $headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
  $headers .= 'Date: ' . date('r') . "\r\n";
  $headers .= 'Message-ID: <' . bin2hex(random_bytes(8)) . '@' . $host . '>' . "\r\n";

  // dot-stuffing: рядок, що починається з крапки, треба дублювати першу крапку
  $body = preg_replace('/^\./m', '..', str_replace("\r\n", "\n", $o['body']));
  $body = str_replace("\n", "\r\n", $body);

  fwrite($fp, $headers . "\r\n" . $body . "\r\n.\r\n");
  $log[] = '> [BODY]';
  $resp = $read();
  if (!$expect($resp, '250')) { fclose($fp); return ['ok'=>false,'stage'=>'body','log'=>$log]; }

  fwrite($fp, "QUIT\r\n");
  fclose($fp);
  return ['ok' => true, 'log' => $log];
}
