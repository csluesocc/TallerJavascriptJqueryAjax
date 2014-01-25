/**
 * @author carlos carcamo
 */
//prevenit comportamiento por defecto
function ie8SafePreventEvent(event){
	(event.preventDefault)? event.preventDefault():event.returnValue = false;
}

$(document).ready(function(){
	//interceptar el evento submit del formulario
	$("#logForm").on('submit', function(e){
		ie8SafePreventEvent(e);
		//obtener los valores de los textbox
		var email = $('#email').val();
		var pass = $('#pass').val();
		
		//validar que no esten vacios
		if(email != "" && pass != ""){
			//crear el objeto para enviar al server
			var datos = {
				"email" : email,
				"pass" : pass
			};
			//peticion post al servidor
			//Nota: para mas información ver la documentacion oficial
			//enlace: http://api.jquery.com/?s=ajax
			$.post('../controller/server.php', datos, function(data){
				if(data != null && data != undefined){					
					var resultado = JSON.parse(data);
					alert(resultado.Mensaje);
				}else{
					alert("Problemas con el server");
				}
			});	
			
		}else{
			alert("Campos vacios");
		}
			
	});
	
});
