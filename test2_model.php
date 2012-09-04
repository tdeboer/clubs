<?php
	
	switch($_SERVER['REQUEST_METHOD']) {
		case "POST":
			if ($input = file_get_contents("php://input")){
				//test for json
				if ($json_post = json_decode($input,true)){
					var_dump( $json_post ); // associative array
					echo "Write data to database";
				}
			}
		break;
	}
	
	//header(':', true, 400);
	//header('X-PHP-Response-Code: 404', true, 400);
	return false;

?>