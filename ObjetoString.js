var a = 'Marcelo';
var b = new String("Bautista");


console.log(a.length);
console.log(b.length);

console.log(typeof a);
console.log(typeof b);


//FUNCIONES
	//TOUPPERCASE: método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
	//SINTAXIS
		//cadena.toUpperCase()

		a = a.toUpperCase();
		console.log(a);

//TOLOWERCASE: método devuelve el valor convertido en minúsculas de la cadena que realiza la llamada.
	//SINTAXIS
		//cadena.toLowerCase()
		
		a = a.toLowerCase();
		console.log(a);

//INDEXOF
	//devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor
	// especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
		var palabra = 'Al que madruga Dios los ayuda';
		console.log(palabra);
		console.log(palabra.indexOf('los'));
		console.log(palabra[24]);

//LASTINDEXOF
	//devuelve el índice, dentro del objeto String que realiza la llamada, de la 'ultima' ocurrencia del valor
	// especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
		var palabra = 'Al que madruga Dios los ayuda';
		console.log(palabra);
		console.log(palabra.lastIndexOf('a'));
		console.log(palabra[24]);

//SUBSTRING
	// método devuelve un subconjunto de un objeto String.
	// SINTAXIS
		//cadena.substring(indiceA[, indiceB'])
		var palabra = 'Al que madruga Dios los ayuda';
		console.log(palabra);
		console.log(palabra.substring(3));//extrae la cadenas que se encuentra despues del indice 3
		console.log(palabra.substring(palabra.indexOf('que'), palabra.indexOf('los')));



//SPLIT
	// divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas..
	// SINTAXIS
		//cadena.split([separador][,limite])
		var palabra = 'Al que madruga Dios los ayuda';
		console.log(palabra);
		console.log(palabra.split(' ').length);// nos indica cuantas palabras hay en el arreglo, la separacion lo realiza donde hay un espacio
		