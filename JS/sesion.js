document.addEventListener("DOMContentLoaded", function () {
    const cuentaLink = document.getElementById("cuentaLink");
    const cuentaMenu = document.getElementById("cuentaMenu");
    const nombreUsuario = document.getElementById("nombreUsuario");
    const cerrarSesion = document.getElementById("cerrarSesion");
    const loginDestino = window.rutaLogin || "login.html";
    const usuarioActual = localStorage.getItem("sesion");

    if (usuarioActual) {
        if (nombreUsuario) nombreUsuario.textContent = usuarioActual;
        if (cuentaLink) cuentaLink.href = "#"; 
    } else {
        if (cuentaLink) cuentaLink.href = loginDestino;
    }

    if (cuentaLink && cuentaMenu) {
        cuentaLink.addEventListener("click", function (event) {
            const usuario = localStorage.getItem("sesion");
            if (usuario) {
                event.preventDefault();
                cuentaMenu.classList.toggle("mostrar");
            }
        });
    }

    if (cerrarSesion) {
        cerrarSesion.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("sesion");
            window.location.href = loginDestino;
        });
    }
});