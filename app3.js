//FUNCIONES DE PRIMERA CLASE
	// LAS FUNCIONES COMO SON OBJETOS SE PUEDEN AGREGARLES ATRIBUTOS como asi tambien otros objetos
	function a(){
		console.log('hola soy la funcion a');

	}

	a();
	//AGREGANDO ATRIBUTOS AL OBJETO
	a.nombre = 'Marcelo';
	a.apellido = 'Peralta'

	// AGREGANDO OBJETOS
	a.domicilio ={
		barrio: 'San Andres',
		codigoPostal: 1651,
		edificio: {
			manzana: 22,
			piso: 8,
			departamento: 'A'
		}
	}
	
	// LLAMANDO LOS ATRIBUTOS A LA CONSOLA
	console.log(a.nombre);
	console.log(a.apellido);
	console.log(a.domicilio.edificio.manzana);
//

	//CREAMOS UN OBJETO USAMOS EL THIS EN DISTINTOS AMBITOS
let nombre = 'Marina Lopez';
		//Objeto 1
		let persona = {
		nombre: 'Silvia',
		apellido: 'Quinteros',
		// metodos 1
		imprimir: function (){
			console.log(this.nombre +' '+this.apellido);//al colocar this, la funcion console.log busca el atributo dentro del objeto
			// sino lo hacemos busca la variable en el contexto global
		},
		//Objeto 1.2
		direccion:{
			calle: 'francia',
			numero: 248,
			//metodos 2 objeto 1.2
			obtenerDireccion: function(){
				console.log(this.calle +' '+ this.numero);
				var ambito =this; // variable que ampunta al contexto actual objeto 1.2
				
				//metodo 2.1
				var nuevaDireccion = function(){
					console.log(ambito.calle);//la variable ambito apunta al contexto del objeto 1.2
				}
				nuevaDireccion();// lamada de la funcion
			}
		}	
	}
	persona['nombre'] = 'Carlos';
	persona.imprimir();
	persona.direccion.obtenerDireccion();