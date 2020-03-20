<?php

$footerUserName = $_POST['footerUserName'];
$footerUserPhone = $_POST['footerUserPhone'];
$footerUserText = $_POST['footerUserText'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = "UTF-8";

try {
    //Server settings
    $mail->SMTPDebug = 0;                             // Enable verbose debug output
    $mail->isSMTP();                                  // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';             // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                         // Enable SMTP authentication
    $mail->Username   = 'webdev.akh@gmail.com';     // SMTP username
    $mail->Password   = '!123Qqwe';                   // SMTP password
    $mail->SMTPSecure = 'ssl';                        // Enable TLS encryption;
    $mail->Port       = 465;                          // TCP port to connect to

    //Recipients
    $mail->setFrom('webdev.akh@gmail.com');
    $mail->addAddress('khischenkoas@dex-ua.com');      // Add a recipient

    // Content
    $mail->isHTML(true);                              // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    // $mail->Subject = 'New request from web site';
    $mail->Body    = "Имя пользователя: ${footerUserName}, телефон: ${footerUserPhone}. Сообщение пользователя: ${footerUserText}";

    if ($mail->send()) {
      echo "ok";
    } else {
      echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
    // $mail->send();
    // header('Location: thanks.html');

} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}