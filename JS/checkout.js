window.onload = function() {

    const sesionActual = localStorage.getItem("sesion");

    if (!sesionActual) {
        localStorage.setItem("redireccionDespuesLogin", window.location.href);
        window.location.href = "login.html";
        return;
    }

    document.getElementById("usuarioCheckout").textContent = sesionActual;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        window.location.href = "../index.html";
        return;
    }

    mostrarResumen(carrito);

    const metodoTarjeta = document.getElementById("metodoTarjeta");
    const metodoContraentrega = document.getElementById("metodoContraentrega");
    const datosTarjeta = document.getElementById("datosTarjeta");

    function actualizarMetodo() {
        if (metodoTarjeta.checked) {
            datosTarjeta.classList.remove("oculto");
        } else {
            datosTarjeta.classList.add("oculto");
        }
    }

    metodoTarjeta.addEventListener("change", actualizarMetodo);
    metodoContraentrega.addEventListener("change", actualizarMetodo);

    const formPago = document.getElementById("formPago");
    const mensajePago = document.getElementById("mensajePago");
    const botonConfirmar = document.getElementById("botonConfirmar");

    formPago.addEventListener("submit", function(e) {

        e.preventDefault();

        const nombre = document.getElementById("nombreCompleto").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const codigoPostal = document.getElementById("codigoPostal").value.trim();

        if (nombre === "" || direccion === "" || ciudad === "" || codigoPostal === "") {
            mensajePago.style.color = "red";
            mensajePago.textContent = "Por favor completa todos los campos de envío";
            return;
        }

        if (metodoTarjeta.checked) {

            const numeroTarjeta = document.getElementById("numeroTarjeta").value.trim();
            const vencimiento = document.getElementById("vencimiento").value.trim();
            const cvv = document.getElementById("cvv").value.trim();

            if (numeroTarjeta === "" || vencimiento === "" || cvv === "") {
                mensajePago.style.color = "red";
                mensajePago.textContent = "Completa los datos de la tarjeta";
                return;
            }

            if (numeroTarjeta.length < 12) {
                mensajePago.style.color = "red";
                mensajePago.textContent = "El número de tarjeta no es válido";
                return;
            }

            if (cvv.length < 3) {
                mensajePago.style.color = "red";
                mensajePago.textContent = "El CVV no es válido";
                return;
            }

        }

        botonConfirmar.disabled = true;
        botonConfirmar.textContent = "Procesando pago...";
        mensajePago.style.color = "#777";
        mensajePago.textContent = "Estamos procesando tu pago, espera un momento";

        setTimeout(function() {

            mensajePago.style.color = "green";
            mensajePago.textContent = "¡Pago realizado con éxito! Redirigiendo a la tienda...";

            localStorage.removeItem("carrito");

            setTimeout(function() {
                window.location.href = "../index.html";
            }, 2000);

        }, 1500);

    });

};

function mostrarResumen(carrito) {

    const listaResumen = document.getElementById("listaResumen");
    let total = 0;

    listaResumen.innerHTML = "";

    carrito.forEach(function(producto) {

        const subtotal = producto.precio * producto.cantidad;
        total = total + subtotal;

        listaResumen.innerHTML += `

            <div class="producto-resumen">

                <img src="${producto.imagen}">

                <div class="datos-resumen">
                    <h3>${producto.nombre}</h3>
                    <p>Talla: ${producto.talla}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>

                <p class="precio-resumen">$${subtotal.toFixed(2)}</p>

            </div>

        `;

    });

    document.getElementById("totalResumen").textContent = "$" + total.toFixed(2);

}