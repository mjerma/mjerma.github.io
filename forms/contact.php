<?php

  require_once '../vendor/autoload.php';
  require_once 'credentials.php';

// Create the Transport
$transport = (new Swift_SmtpTransport('mail.parkandwashparking.com', 25))
  ->setUsername(EMAIL)
  ->setPassword(PASS)
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message($_POST['subject']))
  ->setFrom([EMAIL])
  ->setTo([EMAIL])
  ->setBody('Ime: ' . $_POST['name'] . PHP_EOL . 'Email: ' . $_POST['email'] . PHP_EOL . 'Poruka: ' . PHP_EOL . PHP_EOL . $_POST['message']);

// Send the message
$result = $mailer->send($message);

if($result) {
  header("Location: https://www.parkandwashparking.com/index.html"); 
  exit();
}
?>
