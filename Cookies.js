document.cookie = 'nombre=Marcelo';
document.cookie = 'apllido=Peralta';
var cookies = document.cookie;
console.log(cookies);

function crearCookies(nombre, valor) {
    valor = escape(valor);
    var hoy = new Date(); //Creamos un objeto Date
    hoy.setMonth(hoy.getMonth() + 1); //A la fecha Actual le sumamos un mes
    return document.cookie = nombre + '=; expires' + hoy.toUTCString() + ';';

}

function eliminarCookies(nombre) {
    var hoy = new Date(); //Creamos un objeto Date
    hoy.setMonth(hoy.getMonth() - 1); //A la fecha Actual le restamos  un mes
    return document.cookie = nombre + '=x ;expires=' + hoy.toUTCString() + ';';

}
var valorEscape = crearCookies('numero', '1234 ;12, 25 /58');
console.log(valorEscape);

var valorNoEscapado = unescape(valorEscape);
console.log(valorNoEscapado);

eliminarCookies('nombre');