// EXPRESIONES REGULARES

//Expresiones regulares (o regex) 
	//son reglas que definen las secuencias de caracteres obtenidas en una busqueda.
	//SINTAXIS
		/*RegExp(patrón [, flags])
				/patrón/flags*/
			//FLAGS
			/*patrón
El texto de la expresión regular.
flags
Si se especifica, los flags pueden ser una combinación de los siguientes valores:

g
búsqueda global (global match); encuentra todos los resultados en vez de parar después de la primer búsqueda exitosa
i
ignorar mayúsculas o minúsculas
m
Tratar caracteres de inicio y fin (^ y $) como multiples líneas de texto(por ejemplo: encontrar el inicio o fin de cada línea delimitada por \n o \r, no sólo al inicio o fin de toda la entrada de texto)*/
	/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp*/


	var expresionRegular1 = RegExp('Dios');// expresion regulada
	var expresionRegular2 = /^a/;// expresion regulada
	var expresionRegular3 = /a$/;// expresion regulada
	var expresionRegular4 = /....../;// expresion regulada
	var expresionRegular5 = /[0-9]/;// expresion regulada
	var expresionRegular6 = /\s/;// expresion regulada
	var expresionRegular7 = /A/i;// expresion regulada
	var expresionRegular8 = /[a, e, i, o, u]/g;// expresion regulada


	var texto = 'al que madruga Dios lo ayuda, 123456789';
	var arreglo = texto.match(expresionRegular1);// si la expresion regular encuentra la letra a nos lo devolvera en array o sino nos enviarar NULL
	var arreglo2 =texto.match(expresionRegular2);//indicamos que la busqueda tiene que tener como primer  caracter la 'a'
	var arreglo3 =texto.match(expresionRegular3);//indicamos que la busqueda tiene que tener como ultimo  caracter la 'a'
	var arreglo4 =texto.match(expresionRegular4);//indicamos que la busqueda tiene que tener e caracteres , extrae 'al que'
	var arreglo5 =texto.match(expresionRegular5);//indicamos que la busqueda tiene que tener uno de esos caracteres del rango
	var arreglo6 =texto.match(expresionRegular6);//indicamos que la busqueda tiene que indicar el primer espacio vacio
	var arreglo7 =texto.match(expresionRegular7);//indicamos que la busqueda tiene que encontrar la letra A sin importar su case sensitive
	var arreglo8 =texto.match(expresionRegular8);//indicamos que la busqueda tiene que indicar el primer espacio vacio



	console.log(arreglo);
	console.log(arreglo2);
	console.log(arreglo3);
	console.log(arreglo4);
	console.log(arreglo5);
	console.log(arreglo6);
	console.log(arreglo7);
	console.log(arreglo8);