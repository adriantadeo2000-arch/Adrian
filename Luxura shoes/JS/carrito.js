let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let cantidad = 1;
let tallaSeleccionada = "8";



const menos = document.getElementById("menos");
const mas = document.getElementById("mas");
const cantidadValor = document.getElementById("cantidadValor");

if (mas) {
    mas.addEventListener("click", function() {
        cantidad++;
        cantidadValor.textContent = cantidad;
    });
}

if (menos) {
    menos.addEventListener("click", function() {
        if (cantidad > 1) {
            cantidad--;
            cantidadValor.textContent = cantidad;
        }
    });
}


const tallas = document.querySelectorAll(".talla");

if (tallas.length > 0) {
    tallas.forEach(function(talla) {
        talla.addEventListener("click", function() {
            tallas.forEach(function(t) {
                t.classList.remove("activo");
            });
            talla.classList.add("activo");
            tallaSeleccionada = talla.textContent;
        });
    });
}

const botonCarrito = document.getElementById("botonCarrito");
const ventanaCarrito = document.getElementById("ventanaCarrito");

if (botonCarrito && ventanaCarrito) {

    botonCarrito.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        ventanaCarrito.classList.toggle("mostrar-carrito");
        mostrarCarrito();
    });

    ventanaCarrito.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function() {
        ventanaCarrito.classList.remove("mostrar-carrito");
    });

}

const botonAgregar = document.querySelector(".boton-agregar");

if (botonAgregar) {

    botonAgregar.addEventListener("click", function() {

        let nombre = document.querySelector(".info-producto h1").textContent;

        let precio = parseFloat(
            document
            .querySelector(".producto-precio")
            .textContent
            .replace("$", "")
        );

        let imagen = document.querySelector(".imagenzapato img").src;

        let producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            talla: tallaSeleccionada,
            cantidad: cantidad
        };

        carrito.push(producto);

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

        mostrarCarrito();

        mostrarNotificacion("Producto agregado al carrito");

    });

}


const botonPagar = document.getElementById("botonPagar");

if (botonPagar) {

    botonPagar.addEventListener("click", function() {

        if (carrito.length === 0) {
            return;
        }

        const sesionActual = localStorage.getItem("sesion");

        if (!sesionActual) {

            // Guardamos en qué página estábamos para regresar aquí
            // después de iniciar sesión.
            localStorage.setItem(
                "redireccionDespuesLogin",
                window.location.href
            );

            window.location.href = window.rutaLogin || "login.html";

        } else {

            window.location.href = window.rutaCheckout || "checkout.html";

        }

    });

}


function mostrarCarrito() {

    let productosCarrito =
        document.getElementById("productosCarrito");

    if (!productosCarrito) {
        return;
    }

    let total = 0;

    productosCarrito.innerHTML = "";


    if (carrito.length == 0) {

        productosCarrito.innerHTML =
            "<p class='carrito-vacio'>Tu carrito está vacío</p>";

    }


    carrito.forEach(function(producto, indice) {

        let subtotal =
            producto.precio * producto.cantidad;

        total = total + subtotal;


        productosCarrito.innerHTML += `

            <div class="producto-carrito">

                <img src="${producto.imagen}">

                <div class="datos-carrito">

                    <h3>${producto.nombre}</h3>

                    <p>Talla: ${producto.talla}</p>

                    <p>$${producto.precio.toFixed(2)}</p>

                    <div class="cantidad-carrito">

                        <button onclick="restarProducto(${indice})">
                            -
                        </button>

                        <span>${producto.cantidad}</span>

                        <button onclick="sumarProducto(${indice})">
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="eliminar-producto"
                    onclick="eliminarProducto(${indice})">

                    x

                </button>

            </div>

        `;

    });


    const totalCarrito = document.getElementById("totalCarrito");

    if (totalCarrito) {
        totalCarrito.textContent = "$" + total.toFixed(2);
    }

}



function sumarProducto(indice) {
    carrito[indice].cantidad++;
    guardarCarrito();
}



function restarProducto(indice) {
    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    }
    guardarCarrito();
}



function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
}



function guardarCarrito() {
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
    mostrarCarrito();
}



function mostrarNotificacion(mensaje) {

    let notificacion =
        document.createElement("div");

    notificacion.className =
        "notificacion-carrito";

    notificacion.textContent =
        mensaje;

    document.body.appendChild(notificacion);


    setTimeout(function() {
        notificacion.remove();
    }, 2500);

}


mostrarCarrito();