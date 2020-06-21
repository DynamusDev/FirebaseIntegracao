<?php

$email = $_POST['email'];
$senha = $_POST['senha'];

if($email == 'admin' && $senha == 'admin'){
  echo 1;
}else{
  echo 2
}

// require('DBConfig.php')

// $result = connect();
// $response = array();

// $email = $_GET['email'];
// $senha = $_GET['senha'];

// $sql = $result -> query("SELECT * FROM users WHERE email='$email' and senha='$senha'")

// if($query){
//   $response["status"] = 1;
// }else{
//   $response["status"] = 0;
// }

// echo json_encode($response)

?>