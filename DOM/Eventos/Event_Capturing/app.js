const button = document.querySelector(".button1");
const contenedor = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");

/* 
    Para establecer un event capturing se debe pasar como tercer
    argumento true, en el método addEventListener() del elemento 
    padre.
*/
contenedor.addEventListener("click", (event) => {
    alert("Di click en el contenedor Rojo")

    /*
        Si se detuviera aquí el flujo, debido al flujo Event
        Capturing, sólo se ejecutaría el evento de este padre
        y no el del resto de sus hijos.
    */
    // event.stopPropagation();
}, true)

button.addEventListener("click", (event) => {
    alert("Di click en el botón")
}, true)

/* 
    Si se pulsa el contenedor azul, el flujo de eventos inicia desde él
    y no desde el elemento botón, por lo que el evento de este no
    se ejecutará.
*/
contenedor2.addEventListener("click", (event) => {
    alert("Di click en el contenedor Azul")
}, true)

// DETENER EL FLUJO DE EVENTOS
const contenedor3 = document.querySelector("#contenedor3");
const button2 = document.querySelector("#button2");

button2.addEventListener("click", (event) => {
    alert("Di click en el botón 2")

    /*
        El método de event, detiene el flujo en este botón
        por lo que si se pulsa el bóton, no se pasará el flujo de
        eventos al evento del padre.
    */
    event.stopPropagation();
})

contenedor3.addEventListener("click", (event) => {
    alert("Di click en el contenedor verde")
})


