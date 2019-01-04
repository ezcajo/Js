var CampoNombre='nombre';

var alumno ={
	//atributos
	nombre: 'Marcelo',
	apellido: 'Peralta',
	edad: 50,
	// otro objeto
	direccion:{
		calle: 'Francia',
		numero: 248,
		localidad: 'San Andres',
		edificio: {
			piso: 3,
			departamento: 'A',
			telefono: 01147552995
		}
	}
}
/*var persona = alumno;
persona.apellido ='quinteros'
console.log(alumno.nombre);

console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.direccion.calle);
alumno.direccion.codigoPostal = 1651;
console.log(alumno.direccion.codigoPostal);
console.log(alumno);
console.log(alumno.direccion.edificio.telefono);
console.log(alumno);*/
console.log(alumno[CampoNombre]);