//Precios de las bebidas
const precios = {
    "1": 2500,
    "2": 1800,
    "3": 3000,
    "4": 3500,
};

//Función para mostrar el menú
function mostrarMenu() {
    return prompt(
        "Selecciona una bebida \n 1- Fernet con Coca: $2500 \n 2- Cerveza: $1800 \n 3- Gin Tonic: $3000 \n 4- Mojito: $3500"
    );
}

//Función para calcular el vuelto y mostrar el resultado
function procesarPago(bebida, precio, montoPagado) {
    const vuelto = montoPagado - precio;
    alert("Seleccionaste " + bebida + ". Precio: $" + precio + ". \nMonto pagado: $" + montoPagado + ". \nVuelto: $" + vuelto);
}

//Función principal
function ordenarBebida() {
    const seleccion = mostrarMenu();

    if (precios[seleccion]) {
        const bebida = seleccion === "1" ? "Fernet con Coca" : seleccion === "2" ? "Cerveza" : seleccion === "3" ? "Gin Tonic" : "Mojito";
        const precio = precios[seleccion];

        //Solicitar monto con el que va a pagar
        let montoPagado = parseFloat(prompt("El total a pagar es $" + precio + ". Ingrese el monto con el que va a pagar:"));

        //Validar que lo pagado sea válido
        if (montoPagado < precio) {
            alert("Monto no válido. Pago cancelado.");
        } else {
            procesarPago(bebida, precio, montoPagado);
        }
    } else {
        alert("No seleccionaste una bebida válida");
    }
}

//Función principal
ordenarBebida();
