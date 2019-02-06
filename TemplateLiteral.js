//EJEMPLO ANTIGUO
const producto1 = 'Pizza',
    precio1 = 235,
    producto2 = 'Empanadas',
    precio2 = 22;

let html;
html =
    '<ul>' +
    '<li> orden: ' + producto1 + '</li>' +
    '<li> precio: ' + precio1 + '</li>' +
    '<li> orden: ' + producto2 + '</li>' +
    '<li> precio: ' + precio2 + '</li>' +
    '<li> Total: ' + (precio1 + precio2) + '</li>' +
    '</ul>';

document.getElementById('app').innerHTML = html;

//EJEMPLO LITERALS
html = `
<ul>
	<li>Order: ${producto1}</li>
	<li>Precio: ${precio1}</li>
	<li>Order: ${producto2}</li>
	<li>Precio: ${precio2}</li>
	<li>Total: ${Total(precio1, precio2)}</li>
</ul>`;

function Total(valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById('app2').innerHTML = html;