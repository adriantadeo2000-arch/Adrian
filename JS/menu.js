document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    const navLinks = navbar.querySelector(".nav-links");


    // ----- Botón -----
    let boton = document.getElementById("menuToggle");

    if (!boton) {
        boton = document.createElement("button");
        boton.id = "menuToggle";
        boton.className = "menu-toggle";
        boton.type = "button";
        boton.innerHTML = "<span></span><span></span><span></span>";
        navbar.insertBefore(boton, navbar.firstChild);
    }


    // ----- Panel -----
    // Los enlaces se copian tal cual de la barra de cada página,
    // así las rutas siempre son las correctas sin importar la carpeta.
    const panel = document.createElement("div");
    panel.id = "menuPanel";
    panel.className = "menu-panel";

    const grupo = document.createElement("div");
    grupo.className = "menu-grupo";

    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(function (enlace) {
            grupo.appendChild(enlace.cloneNode(true));
        });
    }

    panel.appendChild(grupo);
    navbar.appendChild(panel);


    boton.setAttribute("aria-label", "Abrir menú");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-controls", panel.id);


    function abrirMenu(abrir) {
        panel.classList.toggle("abierto", abrir);
        boton.classList.toggle("abierto", abrir);
        boton.setAttribute("aria-expanded", abrir ? "true" : "false");
        boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
    }


    boton.addEventListener("click", function () {
        abrirMenu(!panel.classList.contains("abierto"));
    });


    // Cerrar al tocar fuera del menú
    document.addEventListener("click", function (e) {
        if (!panel.contains(e.target) && !boton.contains(e.target)) {
            abrirMenu(false);
        }
    });


    // carrito.js y lupa.js frenan la propagación del clic en sus botones,
    // por eso se escuchan directamente para cerrar el menú.
    ["botonCarrito", "btn-buscar", "cuentaLink"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", function () {
                abrirMenu(false);
            });
        }
    });


    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && panel.classList.contains("abierto")) {
            abrirMenu(false);
            boton.focus();
        }
    });

});