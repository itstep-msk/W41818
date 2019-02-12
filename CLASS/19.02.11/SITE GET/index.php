<!DOCTYPE html>
<html>
<head>
	<title>Site multipage</title>
	<meta charset="utf-8">
</head>
<body>

<?
	echo "<pre>";
	var_dump($_GET);
	echo "</pre>";

	// GET параметр. Синтаксис param=value
	// Начинается после URL со знака вопроса
	// Если более двух, param1=value1&param2=value2
	// ?apple=Яблоки
	/*
	if($_GET["pages"] == "about") {
		include("about.php");
	}
	if($_GET["pages"] == "gallery") {
		include("gallery.php");
	}
	if($_GET["pages"] == "news") {
		include("news.php");
	}
	*/
	if(glob($_GET["pages"].".php")) {
		include($_GET["pages"].".php"); // "about".".php"
	} else {
		echo "Страница не найдена";
	}
	// glob - функция для проверки файла.
?>
<br>
<a href="?pages=about">about</a>
<a href="?pages=gallery">gallery</a>
<a href="?pages=news">news</a>

</body>
</html>