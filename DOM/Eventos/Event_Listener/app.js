const button1 = document.querySelector(".button1")

/*
    Recibe 2 parámetros: 1. El evento a escuchar.
    2. Función a aplicar cuando ocurra el evento.

    addEventListener, no recibe funciones flechas
    almacenadas en variables como argumento.

    Si la función saludar() recibiera parámetros
    y se hiciera la invocación desde el método addEventListener(),
    no funcionaría, por alguna razón no ejecuta la función, ni 
    le envía los parámetros.
*/
button1.addEventListener("click", saludar);

function saludar (){
    alert("Hola #1")
}

// FUNCIÓN CON PARÁMETROS COMO ARGUMENTO DE addEventListener()
const button2 = document.querySelector(".button2");

button2.addEventListener("click", function (){
    multiplicar(3, 10);
})

function multiplicar(multiplicando, multiplicador){
    document.getElementById("resultado").innerHTML = "Resultado del evento: " + (multiplicando * multiplicador);
}

// Remover el evento

const button3 = document.querySelector(".button3")

button3.addEventListener("click", saludarBoton3);

/*
    Este método ejecuta una sola vez el alert(), ya que 
    después de ese el evento se remueve y no aparece más.
*/
function saludarBoton3 (){
    alert("Hola #3")

    /*
        Se debe indicar el evento a quitar junto con la 
        función relacionada al evento.
    */
    button3.removeEventListener("click", saludarBoton3)
}

// Event único parámetro que puede recibir un evento.
const button4 = document.querySelector(".button4");

button4.addEventListener("click", (event) => {
    console.log(event)

    /* Ver el elemento que ejecuto el evento */
    console.log(event.target)
})
