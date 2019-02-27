<? session_start(); // Запускаем сессию
header('Content-Type: text/html; charset=utf-8'); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Авторизация</title>
	<meta charset="utf-8">
</head>
<body>
<style>
	.field {
		border: 1px solid grey;
		transition: all, .25s;
		outline: none;
		padding: 2px;
	}
</style>

<h1>Авторизация</h1>
<form action="" method="POST">
	<input class="field" type="text" name="login" placeholder="Логин"><br>
	<input class="field" type="password" name="password" placeholder="Пароль"><br>
	<input class="button" type="submit" value="Войти">
</form>

<?
	include("db.php");

	$login = $_POST["login"];
	$password = $_POST["password"];

	if(!empty($login) && !empty($password)) {
		$query = mysql_query("SELECT login FROM users WHERE login = '$login' AND password = '$password'");
		$result = mysql_fetch_array($query, MYSQL_ASSOC);

		if($result) {
			$_SESSION["user"] = $login;
			echo "Авторизация успешна. Вы вошли как $login";
		} else {
			echo "Такого аккаунта нет...";
		}
	}
?>
</body>
</html>