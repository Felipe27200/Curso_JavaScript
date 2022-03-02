const button = document.querySelector(".button1");
const contenedor = document.querySelector(".contenedor1");

/* 
    Tanto el contenedor como el butón tiene el mismo evento asociado,
    como se hace la Event Bubbling, primero se ejecuta el evento del
    elemento hijo y después el del padre.
*/
contenedor.addEventListener("click", (event) => {
    alert("Di click en el contenedor")
})

button.addEventListener("click", (event) => {
    alert("Di click en el botón")
})

// SOLO EL PADRE TIENE EL EVENTO
const contenedor2 = document.querySelector("#contenedor2");

contenedor2.addEventListener("click", (event) => {
    alert("Di click en el contenedor 2")
})

