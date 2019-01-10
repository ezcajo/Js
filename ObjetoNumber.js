var a = 10.4567;
var b = new Number(20);

console.log(a===b);

	//FUNCIONES
		
		//TOFIXED
			//El método toFixed() formatea un número usando notación de punto fijo.
			//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toFixed
			
			//SINTAXIS
			//numObj.toFixed([digitos])
			var c = a.toFixed(20);
			console.log(typeof c);

			var d =  b.toFixed(21);
			console.log(d);

		//VALUEOF
			//El método valueOf() retorna el valor primitivo inserto en un objeto Number
			var e = new Number(458.2354);
			console.log(e.valueOf());