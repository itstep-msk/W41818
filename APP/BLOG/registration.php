<h2 class="uk-modal-title">Регистрация</h2>
<form action="" method="POST" class="form">
	<input class="login checkField uk-input" type="text" name="login" placeholder="Логин"><br>
	<input class="password_1 checkField uk-input uk-margin-top" type="password" name="password_1" placeholder="Пароль"><br>
	<input class="password_2 checkField uk-input uk-margin-top" type="password" name="password_2" placeholder="Еще раз пароль"><br>
	<input class="button uk-button uk-button-default uk-margin-top" type="submit" value="Зарегистрироваться">
</form>

<?
	$login = $_POST["login"];
	$password_1 = $_POST["password_1"];
	$password_2 = $_POST["password_2"];

	include("db.php");

	if(!empty($login) 
		&& !empty($password_1) 
		&& !empty($password_2) 
		&& ($password_1 == $password_2)) {

		if(checkData()) {
			addData();
			echo "Успешная регистрация";
		} else {
			echo "Такой аккаунт уже есть...";
		}
	}

	function addData() {
		global $login;
		global $password_1;

		mysql_query("INSERT INTO users(login, password) VALUES('$login', '$password_1')");
	}

	function checkData() {
		global $login;

		$query = mysql_query("SELECT login FROM users WHERE login = '$login'");

		$result = mysql_fetch_array($query, MYSQL_ASSOC);

		if($result) {
			return false;
		} else {
			return true;
		}
	}

?>

<script>
	var login = document.querySelector(".login");
	var password_1 = document.querySelector(".password_1");
	var password_2 = document.querySelector(".password_2");
	var form = document.querySelector(".form");

	form.addEventListener("submit", function(e) {

		var checkField = document.querySelectorAll(".checkField");
		// Пробегаемся по всем элементам и добавляем класс только тем, которые пустые
		for(var i = 0; i < checkField.length; i++) {
			if(checkField[i].value == "") {
				e.preventDefault(); // Останавливаем текущие событие
				checkField[i].classList.add("emptyField");
			}
		}
		// Пробегаемся по всем элементам и удаляем у всех класс
		setTimeout(function(){
			for(var i = 0; i < checkField.length; i++) {
				checkField[i].classList.remove("emptyField");
			}
		}, 1000)
		
	})
</script>