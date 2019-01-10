//POLIMORFISMO
	

		function tipoDeDatos(datos){
			if(typeof datos == 'number'){
				return 'Numero';
			}
			if(typeof datos == 'string'){
				return 'Cadena';
			}
			if(typeof datos == 'boolean'){
				return 'Booleano';
			}
			if(typeof datos == 'object'){
				return 'Objecto';
			}
			if(typeof datos == 'undefined'){
				return 'No definido';
			}
		}
	var datos = tipoDeDatos({});
	console.log(datos);