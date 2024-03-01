/* Pre entrega 2 */
//Precios de las bebidas
const precios = {
    "1": 2500,
    "2": 1800,
    "3": 3000,
    "4": 2800, // Mojito
    "5": 3200, // Caipiroska
    "6": 2000, // Vodka Naranja
    "7": 2200  // Tequila Sunrise
};

//Array para almacenar las bebidas ordenadas
const registroBebidas = [];

//Función para mostrar el menú y obtener la selección del usuario
function mostrarMenu() {
    return prompt(
        "Selecciona una bebida \n 1- Fernet con Coca: $2500 \n 2- Cerveza: $1800 \n 3- Gin Tonic: $3000 \n 4- Mojito: $2800 \n 5- Caipiroska: $3200 \n 6- Vodka Naranja: $2000 \n 7- Tequila Sunrise: $2200 \n 0- Salir"
    );
}

//Función para calcular el vuelto y mostrar el resultado
function procesarPago(bebida, precio, montoPagado) {
    const vuelto = montoPagado - precio;
    alert("Seleccionaste " + bebida + ". Precio: $" + precio + ". \nMonto pagado: $" + montoPagado + ". \nVuelto: $" + vuelto);

    // Agregar la bebida al registro
    registroBebidas.push({ bebida, precio, montoPagado });
    actualizarRegistro();
}

//Función para mostrar el registro de bebidas
function actualizarRegistro() {
    const registroDiv = document.getElementById("registro");
    registroDiv.innerHTML = "<h2>Registro de Bebidas</h2>";
    registroBebidas.forEach(function(bebida, index) {
        registroDiv.innerHTML += `<p>${index + 1}. ${bebida.bebida} - Precio: $${bebida.precio} - Pagado: $${bebida.montoPagado}</p>`;
    });
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
                            seleccion === "5" ? "Caipiroska" :
                            seleccion === "6" ? "Vodka Naranja" :
                            "Tequila Sunrise";

            const precio = precios[seleccion];

            //Solicitar al usuario el monto con el que va a pagar
            let montoPagado = parseFloat(prompt("El total a pagar es $" + precio + ". Ingrese el monto con el que va a pagar:"));

            //Validar que el monto pagado sea válido
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

//Llamar a la función para actualizar el registro inicialmente
actualizarRegistro();





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
