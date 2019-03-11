<?
	$file_name = "data.txt";

	if(file_exists($file_name)) {
		$data = file_get_contents($file_name);
		$decode = json_decode($data, true);
		$id = $_GET["id"];
		$x = $_GET["x"];
		$y = $_GET["y"];

		$decode["id_$id"] = ["x"=>$x, "y"=>$y];
		
		$file = fopen($file_name, "w+");
		fwrite($file, json_encode($decode));
		fclose($file);

		echo file_get_contents($file_name);
	} else {
		$file = fopen($file_name, "w+");
		fwrite($file, "[]");
		fclose($file);
	}
?>