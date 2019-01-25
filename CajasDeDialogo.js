//CUADROS DE DIALOGO
/*
	https://sweetalert.js.org/guides/
*/



var cuadro1 = function() {
    swal("Hola Silvia Quinteros!");
}

var cuadro2 = function() {
    swal({
        title: "Excelente Trabajo",
        text: "Haga un clic en el boton",
        icon: "success",
        button: "Haga Clic",
    })
};

var boton1 = document.getElementById('boton1');
var boton2 = document.getElementById('boton2');
boton1.addEventListener('click', cuadro1);
boton2.addEventListener('click', cuadro2);