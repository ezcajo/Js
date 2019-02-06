//ARREGLOS
//PARTE 1
var arreglo = [5, 4, 3, 2, 1]; //DECLARARTORIO DE ARREGLOS

console.log(arreglo); // muestra el arreglo
console.log(arreglo[2]); // muestra el valor de la posicion 2
//otra manera de crear Arreglos
var arreglos = new Array(10, 20, 30, 40, 50, 60, 100, 101);
console.log(arreglos);

//FUNCIONES DE ARREGLOS
//SORT
//ORDENA LOS ARREGLOS CON DATOS DE STRING
console.log('DATOS MAL ORDENADOS');
arreglos.sort();
console.log(arreglos);
console.log('--------------------');
console.log('DATOS CORRECTAMENTE ORDENADOS ASCENDENTE');
arreglos.sort(function(x, y) {
    return x - y;
});
console.log(arreglos);
console.log('--------------------');
console.log('DATOS CORRECTAMENTE ORDENADOS DESCENDENTE');
arreglos.sort(function(x, y) {
    return y - x;
});
console.log(arreglos);


//indexOf
//Busca datos dentro de un arreglo devolviendonos el indice si lo encuentra o menos 1 si no lo encuentra
var buscar1 = arreglos.indexOf(30);
console.log(buscar1);
var buscar2 = arreglos.indexOf(33);
console.log(buscar2);

//REVERSE INVIERTE EL ORDEN DEL ARREGLO (REVERSO)
arreglo.reverse();
console.log(arreglo);

//MAP Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//SINTAXIS
/*var nuevo_array = arr.map(function callback(currentValue, index, array) {
		     	Elemento devuelto de nuevo_array
				}[, thisArg])*/
//web https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
var arreglo2 = arreglo.map(function(array) {
    array *= array; // esto funciona como un for en esta parte multiplica el valor de la posicion por si misma(el cuadrado del valor)
    return array; //envia el valor calculado en el nuevo arreglo;
});

console.log(arreglo2);

var raices = arreglo2.map(Math.sqrt);
console.log(raices);

//JOIN 
/*une todos los elementos de una matriz (o un objeto similar a una matriz)
 en una cadena y devuelve esta cadena.*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join
//SINTAXIS
//arr.join([separator])


var arreglo3 = arreglo.join();
console.log(arreglo3);
console.log(typeof arreglo3);

var arreglo3 = arreglo.join('|');
console.log(arreglo3);

//SPLIT CONVIERTE UN STRING EL UN ARREGLO 
//USAREMOS EL ARREGLO DEL EJEMPLO ANTERIOR
var arreglo4 = arreglo3.split('|');
console.log(arreglo4);

//PUSH AGREGA DATOS AL ARREGLO EN LA ULTIMA POSICION
arreglo4.push("11");
console.log(arreglo4);

//UNSHIFT AGREGA DATOS AL COMIENZO DEL ARREGLO.
arreglo4.unshift("22");
console.log(arreglo4);

//TOSTRING
//El método toString() devuelve una cadena de caracteres representando el array especificado y sus elementos.
// Este metodo es mas eficiente con referencia la metodo split
console.log(arreglo.toString());

// POP
//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop
console.log(arreglo.pop());
console.log(arreglo);

//UNSHIFT
//El método unshift() elimina el primer  elemento de un array y lo devuelve. Este método cambia la longitud del array.
console.log(arreglo.unshift());
//SPLICE 
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
//SINTAXIS
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
arreglo.splice(2, 2); //PRIMER VALOR REPRESENTA EL INDICE Y EL SEGUNDO VALOR LA CANTIDAD DE ELEMENTOS A ELIMINAR
console.log(arreglo);

arreglo.splice(2, 1, 'Marcelo'); //PRIMER VALOR REPRESENTA EL INDICE Y EL SEGUNDO VALOR LA CANTIDAD DE ELEMENTOS A ELIMINAR Y EL TERCER ELEMNTO REPRESENTA EL NUEVO VALOR AGREGADO EN LA POSICION DEL ELEMENTO ELIMINADO
console.log(arreglo);
arreglo.splice(2, 0, 'silvia', 'lautaro', 'jony'); //EL SEGUNDO VALOR AHORA NO ELIMINA NINGUN ELEMENTO PERA AGREGAMOS VARIOS ELEMENTOS DESPUES DEL INDICE
console.log(arreglo);

//SLICE
//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice

//SINTAXIS
//arr.slice([inicio [, fin]])

arreglo = [5, 4, 3, 2, 1];
var arreglo5 = arreglo.slice(1, 3); // EL PRIMER NUMERO ES EL INDICE INICIAL Y EL SEGUNO ES EL INDICE FINAL SIN INCLUIR EL VALOR DE ESTE INDICE
console.log(arreglo5);

//EJEMPLOS 
var alumnos = [{
        nombre: 'Marcelo',
        edad: 50
    }, {
        nombre: 'Lautaro',
        edad: 12
    }, {
        nombre: 'Silvia',
        edad: 48
    }, {
        nombre: 'Jonathan',
        edad: 19
    }

];

console.log(alumnos);

var ordenarNombre = alumnos.sort(function(alumno1, alumno2) {
    return alumno1.nombre > alumno2.nombre;
});
console.log(ordenarNombre);
var ordenarEdad = alumnos.sort(function(alumno1, alumno2) {
    return alumno1.edad < alumno2.edad;
});
console.log(ordenarEdad);