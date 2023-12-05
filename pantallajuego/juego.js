const enemigo = document.querySelector(".enemigo");
const labelTime = document.querySelector("label");
const h5 = document.querySelector("h5");

h5.textContent = "Bienvenid@" + " " + localStorage.getItem("nameu");

let tiempoRestante = 10;
function actualizarContador() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        labelTime.textContent = tiempoRestante;
    } else {
        clearInterval(intervaloContador);
        labelTime.textContent = "¡Tiempo agotado!";

        setTimeout(()=>{
            const volverajugar = confirm("¿Quieres jugar de nuevo? ")
            if(volverajugar){
                window.location.reload();
            }else window.location.href = "/";
        }, 200)
    }
}

actualizarContador();

const intervaloContador = setInterval(actualizarContador, 1000);

if (enemigo.childNodes.length === 0 || enemigo.childNodes.length === 1) {
    for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");
        img.src = "../enemigo.jpeg";
        img.alt = "enemigo";
        img.width = 120;
        img.height = 200;
        img.ondragstart = (e) => e.preventDefault();
        img.setAttribute("muneco", i + 1);
        img.style.marginLeft = "40px";
        img.style.marginRight = "40px";
        img.classList.add("animateEnemy");
        enemigo.appendChild(img);
    }
}
// Obtén la referencia al elemento SVG
var svg = document.querySelector('svg');
window.addEventListener("mousemove", e => {
    const ejexclienteapuntero = e.clientX;
    const centroPantallaX = window.innerWidth / 2;
    const diferenciaX = ejexclienteapuntero - centroPantallaX;
    svg.style.transform = `translate(${diferenciaX}px)`
})
const imagenes = document.querySelectorAll("img");
window.addEventListener("click", e => {
    imagenes.forEach((imagen) => {
        const abajoElemento = imagen.getBoundingClientRect().bottom;
        const anchuraImagen = imagen.getBoundingClientRect().width;
        const posicionImagenX = imagen.getBoundingClientRect().left;

        const svg = document.querySelector('svg');
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("fill", "red");
        circle.setAttribute("cx", 200);
        circle.setAttribute("cy", 190);
        circle.setAttribute("r", 15);
        circle.classList.add("balaAnimada");
        svg.appendChild(circle);

        circle.addEventListener("animationend", () => {
            const posicionFinalY = circle.getBoundingClientRect().top;
            const posicionFinalX = circle.getBoundingClientRect().left;

            if (
                posicionFinalY < abajoElemento &&
                (posicionFinalX < (posicionImagenX + anchuraImagen) && (posicionFinalX + circle.r.baseVal.value * 2) > posicionImagenX)
            ) {
                imagen.remove();
                // if(!imagen.firstElementChild){
                    //     console.log("No hay ningun hijo")
                    // }
            }
        });
    });
    setTimeout(() => {
        svg.lastElementChild.remove();
    }, 400);
    
})

