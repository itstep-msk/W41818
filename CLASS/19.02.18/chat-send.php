<?
	$nick = $_POST["nick"];
	$message = $_POST["message"];

	$file = fopen("chat-history.txt", "a+");
	fwrite($file, $nick.":".$message."<br>");
	fclose($file);
?>