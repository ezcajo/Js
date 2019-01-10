//ARREGLOS PARTE 2

var array = [
	true,
	false, 
	true,
	{
		nombre : "Marcelo",
		edad : 50
	},
	function (){
		console.log('soy una funcion anonima');
		return true;
	},
	function (persona){
		console.log(persona.nombre+' '+ persona.edad);
		return '';
	},
	[1, 2, 3, 4, 5, 6]


];

console.log(array);
console.log(array.length);
console.log(array[3].nombre);
console.log(array[4]());
console.log(array[5](array[3]));
console.log(array[6][0]);