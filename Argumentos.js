//ARGUMENTOS

	function miFuncion(){
		console.log(arguments);//mustra en un array los valores de los argumentos pasados
		console.log(typeof arguments[3]); //indica que tipo de datos tiene ese indice
		return arguments[0]+arguments[1];// la palabra arguments hace referencia a los datos pasados a la funcion

	}

	function sumar(){
	var array = arguments
	var acumulador=0;
	for (var i = 0; i < arguments.length; i++) {
		acumulador+=arguments[i];
	}
	return acumulador;
		
	}
	
	console.log(miFuncion(1, 3, 5, 'Marcelo', true, {}, function(){}));//argumentos pasados a la funcion 
	console.log(sumar(1,3,5, 10));