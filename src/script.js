let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let divUno = document.querySelector(".uno");
let divDos = document.querySelector(".dos");
let divTres = document.querySelector(".tres");
let divCuatro = document.querySelector(".cuatro");
let divCinco = document.querySelector(".cinco");
let respuesta = document.querySelector(".respuesta");
let item = document.querySelectorAll(".item");
let itemContainer = document.querySelectorAll(".input-container");
let contadorTotal = document.querySelector(".contadorTotal");
let div = document.querySelector("div")

//foreach para saber que numero fue clickeado
//swich para estabelcer el valor del texto
item.forEach((input) => {
    input.addEventListener("click", (e) => {

        e.preventDefault();
        switch (input) {
            case uno:
                respuesta.textContent = '1';
                divUno.setAttribute("style", "background-color: hsl(25, 97%, 53%)")
                divDos.setAttribute("style", "background-color: ")
                divTres.setAttribute("style", "background-color: ")
                divCuatro.setAttribute("style", "background-color: ")
                divCinco.setAttribute("style", "background-color: ")
                break;
            case dos:
                respuesta.textContent = '2';
                divUno.setAttribute("style", "background-color: ")
                divDos.setAttribute("style", "background-color: hsl(25, 97%, 53%)")
                divTres.setAttribute("style", "background-color: ")
                divCuatro.setAttribute("style", "background-color: ")
                divCinco.setAttribute("style", "background-color: ")
                break;
            case tres:
                respuesta.textContent = '3';
                divUno.setAttribute("style", "background-color: ")
                divDos.setAttribute("style", "background-color: ")
                divTres.setAttribute("style", "background-color: hsl(25, 97%, 53%)")
                divCuatro.setAttribute("style", "background-color: ")
                divCinco.setAttribute("style", "background-color: ")
                break;
            case cuatro:
                respuesta.textContent = '4';
                divUno.setAttribute("style", "background-color: ")
                divDos.setAttribute("style", "background-color: ")
                divTres.setAttribute("style", "background-color: ")
                divCuatro.setAttribute("style", "background-color: hsl(25, 97%, 53%)")
                divCinco.setAttribute("style", "background-color: ")
                break;
            default:
                respuesta.textContent = '5';
                divUno.setAttribute("style", "background-color: ")
                divDos.setAttribute("style", "background-color: ")
                divTres.setAttribute("style", "background-color: ")
                divCuatro.setAttribute("style", "background-color: ")
                divCinco.setAttribute("style", "background-color: hsl(25, 97%, 53%)")
                break;
        }

    });
});
