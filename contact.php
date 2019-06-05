<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
/* $email = trim($_POST['email']); */
$name = htmlspecialchars($_POST['name']);

$message = htmlspecialchars($_POST['message']);
$tel = htmlspecialchars($_POST["tel"]);
$error = '';

if(!$name)
{
$error .= 'Пожалуйста введите ваше имя<br />';
}




$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка на сайте bioposud.com.ua";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/* 
$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n"; */

$message1 ="\n\nИмя: ".$name."\n\nНомер телефона: " .$tel."\n\nСообщение: ".$message."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <bioposud.com.ua>\n\n";	
$mail = mail("y685920@nwytg.net", $subject, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}


?>