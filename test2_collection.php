<?php

	switch($_SERVER['REQUEST_METHOD']) {
		case "POST":
			if ($input = file_get_contents("php://input")){
				//test for json
				if ($json_post = json_decode($input,true)){
					var_dump( $json_post ); // associative array
					echo "Write collection to database";
				}
			}
		break;
		
		case "GET":
			
			$members = array(
				array(
					'id' => 1,
					'name' => '',
					'status' => 'will attend',
					'tickets' => 10,
					'email' => 'foo@bar.bar',
					'type' => 'gold'
				),
				array(
					'id' => 2,
					'name' => 'Pietje',
					'status' => 'will attend',
					'tickets' => 10,
					'email' => 'foo@bar.bar',
					'type' => 'gold'
				),
				array(
					'id' => 3,
					'name' => 'Pietje',
					'status' => 'will attend',
					'tickets' => 10,
					'email' => 'foo@bar.bar',
					'type' => 'gold'
				)
			);
			
			header('Content-type: application/json');
			echo json_encode($members);
			die();
		
		break;
	}
	
	//header(':', true, 400);
	//header('X-PHP-Response-Code: 404', true, 400);
	return false;

?>