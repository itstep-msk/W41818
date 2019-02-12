<? header('Content-Type: text/html; charset=cp-1251'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Parsing</title>
	<meta charset="cp-1251">
</head>
<body>
<?
	//var_dump(file_get_contents("data.txt"));
	//echo file_get_contents("data.txt");
	$site = file_get_contents("http://cs-monitor.ru/");
	//echo $site;
	preg_match_all('/<table .* class="monitoring">(.*)<\/table>/Uis', $site, $result);
	echo $result[0][0];
?>
</body>
</html>