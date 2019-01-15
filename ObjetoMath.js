//FUNCIONES
	//PROPIEDADES
	var PI = Math.PI;
	var E = Math.E;

	console.log(PI);
	console.log(E);
	
	//REDONDEO
		//round:La función Math.round() retorna el valor de un número redondeado al entero más cercano.
		//SINTAXIS
		/*Math.round(x)*/
	var numero1 = 10.45678;

	console.log(Math.round(numero1));


		//FLOOR:Devuelve el máximo entero menor o igual a un número. NOS DEVUELVE EL VALOR ENTERO SIN REDONDEAR
		//SINTAXIS
			//Math.floor(x) 
		console.log(Math.floor(numero1));

		//RANDOM : La función Math.random() retorna un punto flotante, 
		/*un número pseudo-aleatorio dentro del rango [0, 1). 
		Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), 
		el cual se puede escalar hasta el rango deseado. 
		La implementación selecciona la semilla inicial hasta el algoritmo que genera el número aleatorio; 
		este no puede ser elegido o cambiado por el usuario.*/
		var aleatorio =Math.random();
		console.log(aleatorio);
			//funcion con RANDOM
			function randomEntre(min, max){
				return Math.floor(Math.random()* (max-min+1)+min);

			}
			console.log(randomEntre(1,6));

		//SQRT
		/* La  función Math.sqrt() retorna la raíz cuadrada de un número, que es
			x≥0,Math.sqrt(x)=x=the uniquey≥0such thaty2=x */
		console.log(Math.sqrt(9));


		//POW
		/*La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente.*/
		/* SINTAXIS
					Math.pow(base, exponente)*/

		console.log(Math.pow(2,4));