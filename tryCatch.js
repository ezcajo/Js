try {

algo();

} catch(e) {
	
	console.log(e);
}

function saludar(nombre = 'Visitante'){

	setTimeout(function(){
	console.log(`Hola ${nombre} Bienvenido al curso`)}, 5000);
}

saludar('Marcelo');
console.log('Iniciando el Programa');