<?
	echo "<pre>";
	var_dump($_FILES);
	echo "</pre>";

	move_uploaded_file(
		$_FILES["north_korea"]["tmp_name"], 
		"C:/OSPanel/domains/localhost/19.02.06/file/".$_FILES["north_korea"]["name"]
	);
?>