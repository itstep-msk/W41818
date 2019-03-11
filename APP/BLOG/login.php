<h2 class="uk-modal-title">Авторизация</h2>
<form action="" method="POST">
	<input class="field uk-input" type="text" name="login" placeholder="Логин"><br>
	<input class="field uk-input uk-margin-top" type="password" name="password" placeholder="Пароль"><br>
	<input class="button uk-button uk-button-default uk-margin-top" type="submit" value="Войти">
</form>

<?
	$login = $_POST["login"];
	$password = $_POST["password"];

	if(!empty($login) && !empty($password)) {
		$query = mysql_query("SELECT * FROM users WHERE login = '$login' AND password = '$password'");
		$result = mysql_fetch_array($query, MYSQL_ASSOC);

		if($result) {
			$_SESSION["user"] = $result["login"];
			$_SESSION["access_level"] = $result["access_level"];
			echo "Авторизация успешна. Вы вошли как $login";
		} else {
			echo "Такого аккаунта нет...";
		}
	}
?>