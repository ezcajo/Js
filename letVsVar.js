//Variables con declaracion var
//EJEMPLO 1
var nombre = 'Jonathan';
let apellido = 'Peralta';

console.log(nombre + ' ' + apellido);

//EJEMPLO 2
let edad = 50;
if (true) {
    let edad = 48;
    console.log(edad);
}
console.log(edad);


//EJEMPLO 3
var funciones = [];
for (let i = 0; i < 10; i++) {
    funciones.push(function() {
        console.log(i)
    }, )
}
funciones.forEach(function(func) {
        func();
    })

    // EJEMPLO 4
console.log(nombre2 + ' ' + apellido2);
var nombre2 = 'Lautaro';
let apellido2 = 'Peralta'; //dara un error por que la variable tiene que estar inicializada antes de utilizarla