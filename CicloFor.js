// Ciclo For Comun
for (var i = 2; i < 10; i += 2) {
    console.log('item' + ' ' + [i]);
}

/*For In
	se utiliza para recorrer internamente un objeto
*/

var Persona = function() {
    this.nombre = 'Marcelo';
    this.apellido = 'Peralta';
    this.edad = 45;
};

var alumno = new Persona();
Persona.prototype.direccion = 'Francia 248';

for (datos in alumno) {
	//esta funcion nos devuelve un boolean indicando si la propiedad pertenece al objeto permitiendo que el objeto se conozca asi mismo
	if(alumno.hasOwnProperty(datos)){

		console.log('Estan son propiedades del objeto '+ '\n'+datos + ' : ' + alumno[datos]);
	} else {
		
		console.log('Estan no son propiedades del objeto ' + '\n'+datos + ' : ' + alumno[datos]);
	}
	}
//For each
/* Seutiliza para recoorer un arreglo
*/

var canasto = ['banana', 'Tomate', 'Pera'];

canasto.forEach(function(valor){
	console.log(valor);
})