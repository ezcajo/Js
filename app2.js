//FUNCIONES
let a = 30;
primeraFuncion();
function primeraFuncion(){
	//let a =20;
	console.log(a);

};
//funcion sin retorno siempre devuelve como valor undefined
function segundaFuncion(){
	//return 'Marcelo Peralta'
};

let b =segundaFuncion();
console.log(b);

//FUNCIONES CON PARAMETROS DE LITERALES
function imprimir(nombre, apellido='Peralta'){
	console.log(nombre +' '+ apellido);
}

imprimir('Lautaro', 'Quinteros');

//FUNCIONES CON PARAMETROS DE OBJETOS ANONIMOS
function imprimir2(persona){
	console.log(persona.nombre +' '+ persona.apellido)
}

imprimir2({
	nombre: 'Jonathan',
	apellido: 'Peralta'
});

var personas = {
	nombre: 'Silvia',
	apellido: 'Quinteros'
}

imprimir2(personas);


//FUNCIONES CON PARAMETROS DE FUNCIONES
var personas2 = {
	nombre: 'Lalo',
	apellido: 'Esposito'
}
function imprimir3(fun, obj){
	fun(obj);
	
}


function decimeNombre(personas){
console.log(personas.nombre +' '+ personas.apellido);
}



imprimir3(decimeNombre, personas2);

//FUNCIONES CON RETORNO 

	// FUNCIONES CON RETORNO DE OBJETOS

	function crearObjetoPersonas(nombre, apellido){
		return {
			nombre: nombre,
			apellido: apellido
		}
	}

		let persona4 = crearObjetoPersonas('Mariano', 'Sosa');
		console.log(persona4)
		console.log(persona4.nombre);
		console.log(persona4['apellido']);
	
	// FUNCIONES CON RETORNO DE FUNCIONRES
		
		function externa(){
			return function (){
				console.log('soy la funcion interna')
			}
		}

	let llamadaEx=externa();
	llamadaEx();