<?php
$test=4;
if ($test===1){
echo json_encode([
		"resultado" => "ok",
		"error"		=> 0,
		"testeo"	=> $test
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