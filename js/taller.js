//for tradicional

$(document).ready(function(){
	
	/* evirtar el uso de eval() */
	//var a = JSON.stringify(txt); //usar esto o bien JSON.parse()
	//var txt = "(function(){alert('Bug');})();";	
	//var b = eval(txt); //no recomendado
	//console.log(a);
	//console.log(b);
	
	/* Object literals */
	
	//recomendado 
	/*var producto = {id:1, nombre:"laptop"};*/
	
	//alert(producto.nombre);
	
	//no recomendado
	/*var producto = new Object();
	producto.id = 1;
	producto.nombre = "Coputadora";
	alert(producto.nombre);*/
	//funciones
	
	
	/*function holamundo(){
		alert('Hola mundo');
	} 
	
	var holamundo_2 = function(){
		alert('Hola mundo');
	};*/
	
	
	//Calbacks
	/*var alerta = function (text, fun){
		console.log(text);
		fun();
	};	
	
	function callback(){
		alert("Simple callback");
	}
	*/
	//alerta('Ejemplo Callback', callback);
	
	/*function hoisting(){
		var a = "funcion dentro de otra";
		
		return function(param){
			alert(param);
		};
	}
	 
	var a = hoisting;
	a()("Saludo");*/
	//a();
	/*var b = document.getElementsByTagName('div'),
		i = 0;
	for(var i=0; i<b.length; i++){}
	
	for(i=b.length; i--;){
		console.log(b[i]);
	}
	
	while(i--){
		//codigo
	}*/
	
	/*var persona = function(){
		var nombre = "Carlos";
		
		var calcular_edad = function(){
			alert(25);
		};
		
		return {
			"get_nombre": function(){
				alert(nombre);
			},			
			"get_edad" : function(){
				calcular_edad();
			}
		};
	};*/ 
});

