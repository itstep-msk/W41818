<?
	$file_name = "data.txt";

	if(file_exists($file_name)) {
		$data = file_get_contents($file_name);
		$decode = json_decode($data, true);
		$id = $_GET["id"];
		$x1 = $_GET["x1"];
		$y1 = $_GET["y1"];
		$x2 = $_GET["x2"];
		$y2 = $_GET["y2"];

		$decode["id_$id"] = ["x1"=>$x1, "y1"=>$y1, "x2"=>$x2, "y2"=>$y2];
		
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