
//OBJETO FECHA
	/*Un conjunto de valores enteros para año, mes, día, hora, minutos y segundos, milisegundos. 
		Por ejemplo, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.*/
		//https://momentjs.com/
/*===========================================*/
var hoy =new Date();
var fecha1 =new Date (1547514145279);
var fecha2 =new Date (1968, 11, 29, 16, 15);
console.log (hoy);
console.log (fecha1);
console.log (fecha2);


//FUNCIONES
	console.log(hoy.getFullYear());//obtenemos el año del sistema
	console.log(hoy.getDate());//obtenemos el dia del sistema
	console.log(hoy.getHours());//obtenemos el año del sistema
	console.log(hoy.getMonth()+1);//obtenemos el año del sistema
	console.log(hoy.getTime());//obtenemos los milisegundos de una fecha del sistema


	// CALCULA EL TOTAL DE MILISENGO QUE SE EJECUTA EL CICLO FOR
	var inicio =new Date();

	for (var i = 0; i <15000; i++) {
		console.log( 'Algo...');
	}
	var fin =new Date();

	var duracion = fin.getTime() - inicio.getTime();
	console.log(duracion);

	//OPERACIONES CON FECHAS
	 var fechas = new Date(2019, 0, 21);
	 Date.prototype.sumarDias = function(dias){
	 	this.setDate(this.getDate()+ dias);
	 	return this;
	 }
	 console.log (fechas.sumarDias(5));