const usuarios = [
    { usuario: "cliente1", contraseña: "123456" },
    { usuario: "admin", contraseña: "admin123" }
];

const loginForm = document.getElementById("loginForm")
const loginMessage = document.getElementById("loginMessage")
const intentosTexto = document.getElementById("intentos")
const loginButton = document.getElementById("loginButton")

let intentos = 0

const maxIntentos = 3

let bloqueado = false


loginForm.addEventListener("submit", function (event) {

    event.preventDefault()


    if (bloqueado) {

        return

    }


    const usuario =
        document.getElementById("loginUsuario").value.trim()

    const contraseña =
        document.getElementById("loginPassword").value

    let encontrado = false

    for (let i = 0; i < usuarios.length; i++) {

        if (
            usuarios[i].usuario === usuario &&
            usuarios[i].contraseña === contraseña
        ) {

            encontrado = true

            break

        }

    }

    if (encontrado === true) {

        loginMessage.textContent =
            "Inicio de sesión correcto."

        loginMessage.style.color = "#6b8063"

        intentosTexto.textContent = ""

        localStorage.setItem(
            "sesion",
            usuario
        )


        loginButton.textContent =
            "Ingresando..."

        // Si llegamos al login porque quisimos pagar sin sesión,
        // "redireccionDespuesLogin" tiene guardada esa página para volver ahí.
        const destino =
            localStorage.getItem("redireccionDespuesLogin")

        localStorage.removeItem("redireccionDespuesLogin")

        setTimeout(function () {

            window.location.href = destino || "../index.html"

        }, 800)


    } else {

        intentos++;

        const restantes =
            maxIntentos - intentos


        if (restantes > 0) {

            loginMessage.textContent =
                "Usuario o contraseña incorrectos."

            loginMessage.style.color = "#a33a3a"

            intentosTexto.textContent =
                "Intentos restantes: " + restantes

        }

        if (intentos >= maxIntentos) {

            bloqueado = true

            loginButton.disabled = true


            let segundos = 30


            loginMessage.textContent =
                "Acceso bloqueado temporalmente."

            loginMessage.style.color = "#a33a3a"


            const contador =
                setInterval(function () {

                    segundos--


                    intentosTexto.textContent =
                        "Espera " +
                        segundos +
                        " segundos."


                    if (segundos <= 0) {

                        clearInterval(contador)

                        bloqueado = false

                        intentos = 0

                        loginButton.disabled = false

                        loginMessage.textContent = ""

                        intentosTexto.textContent = ""

                    }

                }, 1000)

        }

    }

})