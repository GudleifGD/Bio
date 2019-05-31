<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);



$error = '';

if(!$name)
{
$error .= 'Пожалуйста введите ваше имя<br />';
}




$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка с сайта domain.name";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";

$message ="Имя: " .$name."\n\nE-mail: ".$email."\n\n";
/* 
$message1 ="\n\nИмя: ".$name."\n\nE-mail: " .$tel."\n\nСообщение: ".$message."\n\n";	 */


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <glebdanilenko@gmail.com>\n\n";	
$mail = mail("glebdanilenko@gmail.com", $subject, iconv ('utf-8', 'windows-1251', $message), iconv ('utf-8', 'windows-1251', $header));

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