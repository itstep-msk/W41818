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
<?
	$user = $_SESSION["user"];
	$access_level = $_SESSION["access_level"];
	$page = $_GET["page"];
	$file = file_exists($page.".php");
	include("db.php");
?>
<div class="uk-container">
	<nav class="uk-navbar-container" uk-navbar>
	    <div class="uk-navbar-left">
	        <ul class="uk-navbar-nav">
	            <li><a href="index.php">Главная</a></li>
	            <?
		            if($user) {
		            	echo '<li><a href="exit.php">Выйти</a></li>';
		            } else {
		            	echo '<li><a href="#registration" uk-toggle>Регистрация</a></li>';
		            	echo '<li><a href="#login" uk-toggle>Войти</a></li>';
		            }
	            ?>
	        </ul>
	    </div>
	    <div class="uk-navbar-right">
	    	<div class="uk-navbar-nav">
	    		<?
	    		// Панель администратора
	    		function getAdminAccountLink() {
	    			global $access_level;

	    			if($access_level >= 100) {
	    				return '<li><a href="#">Капитанская рубка</a></li>';
	    			}

	    		}

	    		// Личный кабинет
	    		function getPersonalAccountLink() {
	    			global $user;
	    			
	    			if($user) {
	    				return '<li><a href="#">Личный кабинет</a></li>';
	    			}
	    		}

	    		echo getAdminAccountLink();
	    		echo getPersonalAccountLink();
	    		?>
	    	</div>
	    </div>
	</nav>

<?
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

			$keywords = ["%header%", "%date%", "%user%", "%content%"];
			$postData = [$post["header"], $post["date"], $userId["login"], $post["content"]];

			$template = file_get_contents("template-post.html");
			$template = str_replace($keywords, $postData, $template);
			echo $template;
		}
	}

	function init() {
		checkUser();
		checkFile();
		getPosts();
	}

	init();
	
?>
</div>
<!-- Модульное окно авторизации -->
<div id="login" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <? include("login.php"); ?>
    </div>
</div>
<!-- Модульное окно регистрации -->
<div id="registration" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <? include("registration.php"); ?>
    </div>
</div>
<script src="js/uikit.min.js"></script>
</body>
</html>