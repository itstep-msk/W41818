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