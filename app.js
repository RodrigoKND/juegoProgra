const button = document.querySelector("button");
document.addEventListener("DOMContentLoaded", function () {
    if (button) {
        button.addEventListener("click", () => {
            const mensaje = prompt("Escribe tu nombre de usuario");

            if (mensaje !== null) {
                localStorage.setItem("nameu", mensaje);
                window.location.href = "./pantallajuego/juego.html"
            }
        })
    }

})
