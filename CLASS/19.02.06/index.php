<? header('Content-Type: text/html; charset=utf-8'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP работа с файлами</title>
	<meta charset="utf-8">
</head>
<body>
	<h1>Работа с файлами</h1>
	<!-- 
		1) $file = fopen("Ссылка/на/файл","Парамент"); //a+
		2) fwrite("Куда","Что"); // fwrite($file, "Hello world");
		3) fclose($file);

		Параменты
		http://php.net/manual/ru/function.fopen.php
	 -->
	 <?
	 	$file = fopen("data.txt", "a+");
	 	fwrite($file, "Hola, apples123");
	 	fclose($file);
	 ?>
</body>
</html>