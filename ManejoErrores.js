
//EJEMPLO 1
try{
var valor = 100/0;
if (valor === 100) {

throw 'Valor Bajo';

} else {
 throw 	'Incorrecto';
}
console.log(valor);
}

catch(e){
if (e === 'Valor Bajo') {
	console.log('Error Tipo 1');
} else {
	console.log('Error Tipo 2');
	}
}

finally{
	console.log('Termine el procedimiento');
}

//EJEMPLO 2
try{
	//enviando un objeto dentro de throw
	throw {
		nombrerror: 'tipo 2000',
		mensaje: 'Solucione el error de tipo 2000',
		codigo: 2000
	};
	//enviando un String dentro del thrown
/*throw new Error('Error tipo 1000');
console.log('Esta Parte nunca se ejecuta');*/
}
catch(e){
	console.log(e);
	console.log(e.nombrerror);
	console.log(e.mensaje);
}
finally{
	console.log('Fin de Procedimeinto');
}