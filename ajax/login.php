<?php
	 
	require_once '../includes/db.php';  

	$data = file_get_contents("php://input");
	$user = json_decode($data);
  	$username = $user->name ;
  	$password = $user->password;

  	
  	$query = "SELECT * FROM user WHERE username = '{$username}' AND password = '{$password}' LIMIT 1";
	$result_set = $mysqli->query($query);

	
	/*if($username == 'andypatel10@gmail.com' && $password == 'andy')*/
		if(mysqli_num_rows($result_set) == 1)
		{
			session_start();
			$_SESSION['username']='$username';
			$_SESSION['uid']= uniqid('ang_');
			print $_SESSION['uid'];
		}
?>