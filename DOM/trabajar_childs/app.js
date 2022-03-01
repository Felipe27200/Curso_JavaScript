const contenedor1 = document.querySelector(".contenedor1");

/*
    Se obtendrá el primer nodo hijo del elemento con el selector
    contenedor1.
*/
const primerchildContenedor1 = contenedor1.firstChild;

console.log("Primer hijo de contenedor1: ");
console.log(primerchildContenedor1);

const contenedor2 = document.querySelector(".contenedor2");

const primerChildContenedor2 = contenedor2.firstChild;

// Obtener el último elemento de contenedor2
const ultimoChildContenedor2 = contenedor2.lastChild;

console.log("Primer hijo de contenedor2: ");
console.log(primerChildContenedor2);

console.log("Último hijo de contenedor2: ");
console.log(ultimoChildContenedor2);

/*
    Propiedad para obtener el primer elemento hijo, que sea
    a su vez un elemento HTML.

    De esta forma se obtiene el elemento </h2> del elemento padre.
*/
const primerElementoHijo = contenedor1.firstElementChild;

console.log("Primer elemento hijo de contenedor1: ");
console.log(primerElementoHijo);

/*
    Obtener todos los nodos hijos de un nodo padre.

    Retorna una lista con todos los nodos hijos.

    Se puede acceder a los elementos en la lista, 
    mediante índices, pero no es un array.
*/
const hijosContenedor1 = contenedor1.childNodes;

console.log("Todos los nodos hijos de contenedor1: ")
console.log(hijosContenedor1)

/*
    Recorrer los elementos de la lista con un foreach
*/
console.log("Recorrer los hijos de contenedor1: ");

hijosContenedor1.forEach(hijo => console.log(hijo));

/*
    Obtener todos los elementos HTML hijos. 

    Retorna una HTMLCollection, el cual es una colección
    de los nodos HTML. Estos pueden ser accedidos mediante
    índices, pero no pueden ser recorridos por un foreach.
*/
let hijosElementosHTMLContenedor1 = contenedor1.children;

console.log(hijosElementosHTMLContenedor1)

// Este, se debe iterar con un for...of para obtener el valor de sus elementos
console.log("Valores de los elemetos en HTMLCollection");

for (elemento of hijosElementosHTMLContenedor1)
{
    console.log(elemento)
}
