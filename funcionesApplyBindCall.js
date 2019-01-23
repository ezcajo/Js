var auto = {
    marca: 'Ford',
    anio: '2011',
    modelo: 'focus',
    imprimir: function() {
        var datos = 'marca :' + this.marca + '\n' +
            'año: ' + this.anio + '\n' +
            'modelo: ' + this.modelo;
        return datos;
    }
}


//logAuto();

//FUNCION BIND
/* El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this 
el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados 
cuando la función es llamada. El valor de this es ignorado cuando la función es llamada con el operador new.*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind


//EJEMPLO 1
var logAuto = function(arg1, arg2) {
    console.log('Caracteristicas de Auto' + '\n' + this.imprimir());
    console.log('=================================================');
    console.log(arg1 + ' ' + arg2);
}
console.log(auto.imprimir());

var autoCaracteristicas = logAuto.bind(auto);
autoCaracteristicas();

//EJEMPLO 2
//El método call() llama a una función con un valor this asignado y argumentos provistos de forma individual.
autoCaracteristicas = logAuto.call(auto, '123', 'abc');

//EJEMPLO 3
	//Funciones prestadas
	var auto2 = {
    marca: 'Renault',
    anio: '2019',
    modelo: 'Kangoo',
    
}


var kangoo = auto.imprimir.call(auto2);// con esto estoy utilizando la funcion imprimir del auto pasandole el contexto del auto 2
console.log(kangoo);




//EJEMPLO 4

this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81