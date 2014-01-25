<?php
   	if(isset($_POST['email']) && isset($_POST['pass'])){   		
   		if($_POST['email'] == "carlos@gmail.com" && $_POST['pass'] == "123456"){
   			$salida = array("Mensaje" => "Logeado correctamente");
   		} else{
   			$salida = array("Mensaje" => "Datos incorrectos, intente de nuevo");
   		}
		
		echo json_encode($salida);
   	}
?>