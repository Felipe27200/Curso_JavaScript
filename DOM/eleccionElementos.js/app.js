// Obtiene todo el elemento por medio de su id
let elementoId = document.getElementById('elementoId');

// write() permite escribir en el documento
document.write("Imprime el objeto que es: " + elementoId);

// Obtener todos los elementos de un mismo tipo
/*
    Retorna los objetos como una lista, en este
    caso obtendríamos todos los elementos </p>
    del documento.
*/
let parrafo = document.getElementsByTagName("p");

/*
    Se puede acceder a los valores de la lista,
    mediante un índice, esto no quiere decir,
    que sea un array
*/
document.write("<br><br>Párrafo 1: " + parrafo[0])
document.write("<br>Párrafo 2: " + parrafo[1])


// OBTENER EL PRIMER ELEMENTO CON EL SELECTOR
/* 
    Como es una clase y en css estas están precedidas por punto
    aquí también debe estarlo
*/
let querySelector = document.querySelector(".parrafo");

document.write("<br><br>Primer elemento con la clase parrafo: " + querySelector)

// El id de los elementos en css se precedía con #
let selectorId = document.querySelector("#rancio");

document.write("<br>Primer elemento con el id rancio: " + selectorId)

let querySelectorAll = document.querySelectorAll(".parrafo");

document.write("<br><br>Todos los elementos con el selector .parrafo: " + querySelectorAll.length);
document.write("<br>Primer elemento con la clase parrafo: " + querySelectorAll[0])
