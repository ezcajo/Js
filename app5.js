//FUNCIONES ANONIMAS
	//EJEMPLO 1

( function(){
var a = 10;
console.log('primera muestra '+a);
function cambiarA(letra){
	a= 'Marcelo';
}
cambiarA(a);
console.log('segunda muestra '+a);

})();

	//EJEMPLO 2

function ejecutarFuncion(fn){
	if (fn()=== 1) {
	return true;
	}else{
		return false;
	}
}

console.log(
	ejecutarFuncion(function(){
	console.log('funcion anonima activada');
	return 0;})
	);

