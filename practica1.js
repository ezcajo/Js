/*
1.12 Práctica
No hay absolutamente ningún sustituto para la práctica en el aprendizaje de la programación. 
Ninguna cantidad de escritura articulada de mi parte harà por si sola de usted un buen programador.
Con esto en mente, intentemos practicar algunos de los conceptos que hemos aprendido aquí en este capítulo. Daré los "requisitos", y lo intentarás primero. Luego consulte la lista de códigos que hay a continuación para ver cómo me llegué a ella.

Escriba un programa para calcular el precio total de la compra de su teléfono. 
Usted continuará comprando teléfonos (sugerencia: loop!) 
Hasta que se quede sin dinero en su cuenta bancaria. 
También comprará accesorios para cada teléfono, siempre y cuando su cantidad de compra 
esté por debajo de su umbral de gasto mental.
Después de haber calculado el importe de su compra, agregue el impuesto y, a continuación, 
imprima el importe de compra calculado, correctamente formateado.
Por último, compruebe la cantidad en contra del saldo de su cuenta bancaria 
para ver si se lo puede permitir o no.
Debe establecer algunas constantes para la "tasa de impuesto", 
"precio de teléfono", "precio de accesorio" y "umbral de gasto", así como una variable 
para su "saldo de cuenta bancaria". "
Debe definir funciones para calcular el impuesto y para formatear 
el precio con un "$" y redondear a dos decimales.
Desafío de bonificación: Trate de incorporar la entrada a este programa, 
tal vez con el prompt(..) cubierto en la "Entrada" anterior. 
Por ejemplo, puede solicitar al usuario el saldo de su cuenta bancaria. ¡Diviértase y sea creativo!
*/
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
    // buy a new phone!
    amount = amount + PHONE_PRICE;

    // can we afford the accessory?
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
    "Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
    console.log(
        "You can't afford this purchase. :("
    );
}
// You can't afford this purchase. :(