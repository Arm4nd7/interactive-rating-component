let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let respuesta = document.querySelector(".respuesta");
let item = document.querySelectorAll(".item");
let contadorTotal = document.querySelector(".contadorTotal");

//foreach para saber que numero fue clickeado
//swich para estabelcer el valor del texto
item.forEach((input) => {
    input.addEventListener("click", (e) => {
        e.preventDefault();
        switch (input) {
            case uno:
                respuesta.textContent = '1';
                break;
            case dos:
                respuesta.textContent = '2';
                break;
            case tres:
                respuesta.textContent = '3';
                break;
            case cuatro:
                respuesta.textContent = '4';
                break;
            default:
                respuesta.textContent = '5';
                break;
        }
    });
});