<?
/*
	Глобальные массивы
	$_POST
	$_GET
	$_FILE

	...
	$_SERVER
	$_REQUEST
*/
	/*echo "<pre>";
	var_dump($_POST);
	echo "</pre>";*/
	echo "car: ".$_GET["car_brand"];

	$file = fopen("car.txt", "a+");
	fwrite($file, $_GET["car_brand"]."\n");
	fclose($file);
?>