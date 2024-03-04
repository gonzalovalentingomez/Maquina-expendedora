/* Pre entrega 2 */
// Definir precios de las bebidas
const precios = {
    "1": 2500,
    "2": 1800,
    "3": 3000,
    "4": 2800, // Mojito
    "5": 3200, // Caipiroska
    "6": 2000, // Vodka Naranja
    "7": 2200  // Tequila Sunrise
};

// Descuento a aplicar si se ordenan 3 o más bebidas
const descuento = 0.1; // 10%

// Array para almacenar las bebidas ordenadas
const registroBebidas = [];

// Función para mostrar el menú y obtener la selección del usuario
function mostrarMenu() {
    return prompt(
        "Selecciona una bebida \n 1- Fernet con Coca: $2500 \n 2- Cerveza: $1800 \n 3- Gin Tonic: $3000 \n 4- Mojito: $2800 \n 5- Caipiroska: $3200 \n 6- Vodka Naranja: $2000 \n 7- Tequila Sunrise: $2200 \n 0- Terminar Pedido"
    );
}

// Función para calcular el vuelto y mostrar el resultado
function procesarPago(bebidas) {
    let total = bebidas.reduce((acc, bebida) => acc + precios[bebida], 0);
    let descuentoAplicado = 0;

    if (bebidas.length >= 3) {
        descuentoAplicado = total * descuento;
        total -= descuentoAplicado;
    }

    let montoPagado = parseFloat(prompt("Total a pagar: $" + total.toFixed(2) + ". Ingrese el monto con el que va a pagar:"));
    if (isNaN(montoPagado)) {
        alert("Monto no válido. Pago cancelado.");
        return;
    }

    let vuelto = montoPagado - total;
    if (vuelto < 0) {
        alert("Monto insuficiente. Pago cancelado.");
        return;
    }

    alert("Bebidas seleccionadas: " + bebidas.join(", ") + ". \nTotal: $" + total.toFixed(2) + ". \nDescuento: $" + descuentoAplicado.toFixed(2) + ". \nMonto pagado: $" + montoPagado.toFixed(2) + ". \nVuelto: $" + vuelto.toFixed(2));

    // Agregar las bebidas al registro
    registroBebidas.push({ bebidas, total, descuentoAplicado, montoPagado, vuelto });
    actualizarRegistro();
}

// Función para mostrar el registro de bebidas
function actualizarRegistro() {
    const registroDiv = document.getElementById("registro");
    registroDiv.innerHTML = "<h2>Registro de Bebidas</h2>";
    registroBebidas.forEach(function(orden, index) {
        registroDiv.innerHTML += `<p>${index + 1}. Bebidas: ${orden.bebidas.join(", ")} - Total: $${orden.total.toFixed(2)} - Descuento: $${orden.descuentoAplicado.toFixed(2)} - Pagado: $${orden.montoPagado.toFixed(2)} - Vuelto: $${orden.vuelto.toFixed(2)}</p>`;
    });
}

// Función principal
function ordenarBebida() {
    const bebidasSeleccionadas = [];

    while (true) {
        const seleccion = mostrarMenu();

        if (seleccion === "0") {
            if (bebidasSeleccionadas.length === 0) {
                alert("No has seleccionado ninguna bebida.");
                continue;
            }
            procesarPago(bebidasSeleccionadas);
            break;
        } else if (precios[seleccion]) {
            bebidasSeleccionadas.push(seleccion);
        } else {
            alert("No seleccionaste una bebida válida");
        }
    }
}





/* Pre entrega 1 */
/* //P recios de las bebidas
const precios = {
    "1": 2500,
    "2": 1800,
    "3": 3000,
    "4": 2800,
    "5": 3200,
};

//Función para mostrar el menú y obtener la selección del usuario
function mostrarMenu() {
    return prompt(
        "Selecciona una bebida \n 1- Fernet con Coca: $2500 \n 2- Cerveza: $1800 \n 3- Gin Tonic: $3000 \n 4- Mojito: $2800 \n 5- Caipiroska: $3200 \n 0- Salir"
    );
}

//Función para calcular el vuelto y mostrar el resultado
function procesarPago(bebida, precio, montoPagado) {
    const vuelto = montoPagado - precio;
    alert("Seleccionaste " + bebida + ". Precio: $" + precio + ". \nMonto pagado: $" + montoPagado + ". \nVuelto: $" + vuelto);
}

//Función principal
function ordenarBebida() {
    let continuar = true;

    while (continuar) {
        const seleccion = mostrarMenu();

        if (seleccion === "0") {
            alert("Gracias por tu visita. ¡Hasta luego!");
            continuar = false;
        } else if (precios[seleccion]) {
            const bebida = seleccion === "1" ? "Fernet con Coca" :
                            seleccion === "2" ? "Cerveza" :
                            seleccion === "3" ? "Gin Tonic" :
                            seleccion === "4" ? "Mojito" :
                            "Caipiroska";

            const precio = precios[seleccion];

            //Monto con el que va a pagar
            let montoPagado = parseFloat(prompt("El total a pagar es $" + precio + ". Ingrese el monto con el que va a pagar:"));

            //Valida que el monto pagado sea válido
            if (montoPagado < precio) {
                alert("Monto no válido. Pago cancelado.");
            } else {
                procesarPago(bebida, precio, montoPagado);
            }
        } else {
            alert("No seleccionaste una bebida válida");
        }
    }
}

//Llamando a la función principal
ordenarBebida();
 */
