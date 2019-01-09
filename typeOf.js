// FUNCION TYPEOF 
	//IDENTIFICA EL TIPO DE VALOR QUE ESTAMOS ENVIANDO POR EJEMPLO COMO PARA METRO
		//EJEMPLO1
			function identificaTipo(param){
					console.log(typeof param);


}
identificaTipo(function(){});
identificaTipo(1);
identificaTipo('Marcelo');
identificaTipo({});
identificaTipo([]);


function comparaTipo(param){
					console.log(param instanceof Persona);


}

function Persona(){
	this.nombre = 'Luis;'
}

var personas = new Persona();
comparaTipo(personas);