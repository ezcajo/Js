function Persona(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	
};

let persona = new Persona('Marcelo', 'Peralta', 50);

//PROTOTYPE EXPANDE LOS ATRIBUTOS Y FUNCIONALIDAD DE UN OBJETO QUE ESTA CREADO
	//PROTOTYPE DE ATRIBUTOS
	Persona.prototype.sexo = 'M';


/*PROTOTYPE DE METODOS (el uso de este tipo de prototype nos permite optimizar la memoria ya que el metodo solamente 
								esta cargada una vez en memoria y puede ser utilizado por varios objetos personas)*/
	Persona.prototype.imprimirDatos = function(){
		console.log(this.nombre +' '+ this.apellido+' '+ this.edad);
	}


persona.imprimirDatos();
console.log('Sexo: '+persona.sexo);


