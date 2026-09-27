document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.querySelector(".catalogo");

    if (!contenedor) {
        return;
    }

    const selects = document.querySelectorAll(".filtros select");
    const selectOrden = selects[0];
    const selectCategoria = selects[1];
    const paginacion = contenedor.querySelector(".paginacionxd");


    // Detecta la categoría leyendo la ruta de la imagen del producto
    // (busca "Casuales", "Tenis" o "Formales" en el src, sin importar mayúsculas).
    function obtenerCategoria(tarjeta) {

        const img = tarjeta.querySelector(".producto-imagen img");

        if (!img) {
            return "";
        }

        const match = img.src.match(/casuales|tenis|formales/i);

        if (!match) {
            return "";
        }

        const encontrado = match[0].toLowerCase();

        if (encontrado === "casuales") return "Casuales";
        if (encontrado === "tenis") return "Tenis";
        if (encontrado === "formales") return "Formales";

        return "";

    }


    // Detecta el precio leyendo el texto de <p class="precio">
    function obtenerPrecio(tarjeta) {

        const precioEl = tarjeta.querySelector(".precio");

        if (!precioEl) {
            return 0;
        }

        const numero = precioEl.textContent
            .replace("$", "")
            .replace(",", "")
            .trim();

        return parseFloat(numero) || 0;

    }


    // Reemplaza las opciones del select de categoría por las 3 reales:
    // Casuales, Tenis, Formales (sin tocar el HTML del archivo).
    if (selectCategoria) {

        selectCategoria.innerHTML = `
            <option value="">Categoría</option>
            <option value="Casuales">Casuales</option>
            <option value="Tenis">Tenis</option>
            <option value="Formales">Formales</option>
        `;

    }


    function aplicarFiltros() {

        const categoria = selectCategoria ? selectCategoria.value : "";
        const orden = selectOrden ? selectOrden.value : "";

        let tarjetas = Array.from(
            contenedor.querySelectorAll(".producto-tarjeta")
        );

        // Filtrar por categoría
        tarjetas.forEach(function (tarjeta) {

            const cat = obtenerCategoria(tarjeta);

            if (!categoria || cat === categoria) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }

        });

        // Ordenar por precio
        if (orden === "Menor precio" || orden === "Mayor precio") {

            tarjetas.sort(function (a, b) {

                const precioA = obtenerPrecio(a);
                const precioB = obtenerPrecio(b);

                return orden === "Menor precio"
                    ? precioA - precioB
                    : precioB - precioA;

            });

            tarjetas.forEach(function (tarjeta) {

                if (paginacion) {
                    contenedor.insertBefore(tarjeta, paginacion);
                } else {
                    contenedor.appendChild(tarjeta);
                }

            });

        }

    }


    if (selectOrden) {
        selectOrden.addEventListener("change", aplicarFiltros);
    }

    if (selectCategoria) {
        selectCategoria.addEventListener("change", aplicarFiltros);
    }

});