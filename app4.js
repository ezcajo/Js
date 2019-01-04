//OBJETO SIMPLE
var marcelo ={

};

console.log(marcelo);
console.log({nombre:'Lautaro'});//Objeto Anonimo

//FUNCIONES
function Persona(){
this.nombre ='Silvia';
this.apellido = 'Quinteros';
this.edad = 47;
this.imprimirNombreCompleto = function(){
return this.nombre +' '+ this.apellido+ '('+ this.edad +')';//metodo
}
};
var persona1= Persona();//asi estariamos llamando a la funcion
var persona2 = new Persona();//asi estariamos utilizando a la funcion como una clase para construir un objeto
console.log(persona2);
console.log(persona2.imprimirNombreCompleto());


//FUNCIONES CON PARAMETROS
function Alumnos(nombre, apellido, edad){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.imprimirNombreCompleto = function(){
return this.nombre +' '+ this.apellido+ '('+ this.edad +')';//metodo
}
};

var alumno = new Alumnos('Jonathan', 'Peralta', 19);
console.log(alumno.imprimirNombreCompleto());