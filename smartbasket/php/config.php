<?php
/*     require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');
 */
		 *** SMTP *** 

		 require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 const HOST = 'smtp.gmail.com'; // Адреса SMTP сервера для Gmail
		 const LOGIN = 'kohan3750@gmail.com'; // Ваша адреса електронної пошти
		 const PASS = '0635705377Kv'; // Ваш пароль
		 const PORT = 587; // Порт для Gmail

		*** /SMTP *** 
/* 		
    const SENDER = 'sender@yandex.ru';
    const CATCHER = 'catcher@ya.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
     */