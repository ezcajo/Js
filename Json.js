//JSON
	//http://json.parser.online.fr/
	//https://www.json.org/json-es.html
var persona = {
    nombre: 'Marcelo',
    apellido: 'Peralta',
    edad: 45,
    imprimir: function() {
        console.log(this.nombre + '\n' +
            this.nombre + '\n' +
            this.nombre + '\n');
    }
};

//parseamos el objeto persona en objeto JSON
var convertirJson = JSON.stringify(persona);
console.log(convertirJson);

//CONVERTIR EL OBJETO JASON EN UN OBJETO LITERAL
var convertirEnUnObjeto = JSON.parse(convertirJson);
console.log(convertirEnUnObjeto);