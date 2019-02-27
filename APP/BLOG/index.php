<? session_start(); // Запускаем сессию
header('Content-Type: text/html; charset=utf-8'); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Блог</title>
</head>
<body>

<?
	$user = $_SESSION["user"];

	if($user) {
		echo "Привет, $user";
	} else {
		echo "Войдите на сайт";
	}
?>

</body>
</html>