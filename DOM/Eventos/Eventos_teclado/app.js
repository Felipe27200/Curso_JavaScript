const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".contenedor");
// Eventos de las teclas
input.addEventListener("keydown", function (event) {
    console.log("Una tecla fue presionada.")
})

input.addEventListener("keypress", function (event) {
    console.log("Una tecla se presiono y se soltó.")

})

/*
    Se ejecuta sólo si la tecla se suelta dentro del input.

    Si se suelta cuando el cursor ya no está en él no se 
    ejecutará el evento.
*/
input.addEventListener("keyup", function (event) {
    /*
        Se puede obtener la última tecla presionada gracias a event
    */

    let tecla = event.key;

    let nuevoContenido = `La última tecla presionada fue: ${tecla}`;
    
    contenedor.innerHTML = nuevoContenido;


    console.log("Una tecla fue soltada.")
})
