<? session_start(); // Запускаем сессию
header('Content-Type: text/html; charset=utf-8'); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Блог</title>
	<link rel="stylesheet" href="css/uikit.min.css">
</head>
<body>

<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li><a href="index.php">Главная</a></li>
            <li><a href="index.php?page=registration">Регистрация</a></li>
            <li><a href="index.php?page=login">Войти</a></li>
        </ul>
    </div>
</nav>

<?
	$user = $_SESSION["user"];
	$page = $_GET["page"];
	$file = file_exists($page.".php");

	function checkUser() {
		global $user;

		if($user) {
			echo "Привет, $user";
		} else {
			echo "Войдите на сайт";
		}
	}

	function checkFile() {
		global $file;
		global $page;

		if($page && $file) {
			include($page.".php");
		}
	}

	function getPosts() {
		$query = mysql_query("SELECT * FROM posts");

		while($post = mysql_fetch_array($query, MYSQL_ASSOC)) {
			// Записали ID
			$id = $post["user_id"];
			// Запросили строку из БД на основе ID
			$queryId = mysql_query("SELECT login FROM users WHERE id = '$id'");
			// Преобразовали запрос в результат(sql => array)
			$userId = mysql_fetch_array($queryId, MYSQL_ASSOC);

			$keywords = ["%header%", "%date%", "%user%"];
			$postData = [$post["header"], $post["date"], $userId["login"]];

			$template = file_get_contents("template-post.html");
			$template = str_replace($keywords, $postData, $template);
			echo $template;
		}
	}

	function init() {
		include("db.php");

		checkUser();
		checkFile();
		getPosts();
	}

	init();
	
?>

<script src="js/uikit.min.js"></script>
</body>
</html>