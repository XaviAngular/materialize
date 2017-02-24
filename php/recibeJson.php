<?php
$test=4;
//Para comprobar si se recibe un post desde un ajax
if ($_SERVER['REQUEST_METHOD']==='POST'){
	//Para almacenar los datos JSON recibidos en una variable
	$request= file_get_contents('php://input');
	//Para convertir un Json en un array de php
	$datos = json_decode($request,true);

	

echo json_encode([
		"resultado" => "ok",
		"error"		=> 0,
		"testeo"	=> $datos
	]);
}
else {
echo json_encode([
		"resultado" => "KO",
		"error"		=> 1,
		"testeo"	=> $test
	]);
}
?>