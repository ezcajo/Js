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
    if (alumno.hasOwnProperty(datos)) {

        console.log('Estan son propiedades del objeto ' + '\n' + datos + ' : ' + alumno[datos]);
    } else {

        console.log('Estan no son propiedades del objeto ' + '\n' + datos + ' : ' + alumno[datos]);
    }
}
//For each
/* Seutiliza para recoorer un arreglo
el parametro valor imprimi el valor del elemento recorrido
el parametro index imprimi el valor del indice del elemento recorrido
*/

var canasto = ['banana', 'Tomate', 'Pera'];

canasto.forEach(function(valor, index) {
        console.log(index + ' : ' + valor);
    })
    // MAP
    //recorre un array de Objetos
    //devloviendo un arreglo con los datos solicitados
let carrito = [{
    id: 1,
    nombre: 'Banana'
}, {
    id: 2,
    nombre: 'Durazno'
}, {
    id: 3,
    nombre: 'Manzana'
}, {
    id: 4,
    nombre: 'Pera'
}];

let impresion = carrito.map(function(carrito) {
    return carrito.nombre;

});

console.log(impresion);