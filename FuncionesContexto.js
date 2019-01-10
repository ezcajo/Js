//FUNCIONES
	var arreglo = [];

	function cargarArreglo(array, valor){
		array.push(valor)
		return array;
	}

	var arregloCargado = cargarArreglo(arreglo, 'Marcelo');
	arregloCargado = cargarArreglo(arreglo, 'Silvia');
	arregloCargado = cargarArreglo(arreglo, 'Jonathan');
	arregloCargado = cargarArreglo(arreglo, 'Lautaro');
	console.log(arregloCargado);