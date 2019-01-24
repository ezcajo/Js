//SET TIME OUT
/*
El método setTimeout() del mixin WindowOrWorkerGlobalScope
 establece un temporizador que ejecuta una función o una porción de código después de que transcurre
  un tiempo establecido, repitiendose una sola vez.

Sintaxis
var idTemporizador = scope.setTimeout(funcion[, retraso, parametro1, parametro2, ...]);
var idTimeout = scope.setTimeout(funcion[, retraso]);
var idTimeout = scope.setTimeout(codigo[, retraso]);*/

setTimeout(function() {
    console.log('hola');
}, 1000);

//SET INTERVAL
/*
		Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
 
SintaxisSection
var procesoID = window.setInterval(función, intervaloDeTiempo[, parámetro1, parámetro2, ... , parámetroN]);
var procesoID = window.setInterval(código, intervaloDeTiempo);
	*/
var segundos = 0;

var prueba = setInterval(function() {
    segundos = segundos + 1
    console.log(segundos + ' segundos');

    if (segundos == 10) {
        clearInterval(prueba);
    }
}, 1000)
console.log('Feliz Cumpleaños!!!')

//OTRO EJEMPLO

var persona = {
    nombre: 'Lautaro',
    apellido: 'Peralta',
    imprimir: function() {
    	var self =this;
    	setTimeout(function(){
        console.log(self.nombre + ' ' + self.apellido);
    		
    	}, 5000);

    }
}
persona.imprimir();