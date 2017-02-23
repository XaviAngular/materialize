<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
	$data = json_decode(file_get_contents("php://input"));
	$request = file_get_contents('php://input');
	$input = json_decode($request,true);
	$test="";
	foreach($input as $key => $value){
		$test .= $value['value'].",";
	}
	echo json_encode([
        "datos"    => $data[1]->value,
        "valores"		=> $test,
        "error"       => 0,
        "errorMessage"=> 'OK'
    ]);}

else {
	echo json_encode([
        "datos"    => "no hay post",
        "error"       => 1,
        "errorMessage"=> 'No hay post'
    ]);}
?>