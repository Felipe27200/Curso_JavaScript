// 1. Se debe obtener el elemento padre.
const contenedor = document.querySelector(".contenedor");

/*
    Método para crear un elemento (nodo elemento), que a la
    vez un objeto.

    Esto crea un elemento <li></li>, debe estar en 
    mayúsculas, porque de otra forma no lo reconocería.
*/
const item = document.createElement("LI")
const item2 = document.createElement("LI")

// console.log(item)

/*
    Crear un nodo de texto para el elemento recién
    creado.

    Así se crea el nodo de texto, pero aún no se le a 
    asignado a elemento </li> en la variable item.

    Pero lo que se crea es un objeto texto que contiene la 
    cadena, pero no quiere decir que se acceda a ella directamente
    con el nombre del textNode.
*/
const textDelItem = document.createTextNode("Este es un item de la lista.");

/*
    Con el método appendChild(), se le puede añadir un nodo hijo
    a un elemento o a otro nodo.
*/

item.appendChild(textDelItem).ATTRIBUTE_NODE

console.log(item);

/*
    Agregar el nodo elemento recién creado al </div> en el html
    con la clase contenedor.

    Se usa appendChild, ya que el elemento </li>, pasa a ser el hijo
    del elemento </div>
*/

contenedor.appendChild(item);

/*
    Así es la segunda forma de asignarle un texto o valor
    a un nodo elemento.
    
    La diferencia radica, en que este no es un text Node, por
    lo que no es un objeto y carece de las propiedades de este.
*/
item2.innerHTML = "Item 2 de la lista."

contenedor.appendChild(item2);

// CREAR MÚLTIPLES ELEMENTOS Y AGREGARLOS EN UN PADRE

/*
    Este método establece que la variable fragmento, va
    a contener todos los elementos a agregar, para posteriormente
    agregarlos al padre.

    Esto es porque si se asignarán uno a uno todo los elementos, por ejemplo,
    en un bucle, perjudicaría el rendimiento y aumentaría el consumo.
*/
const fragmento = document.createDocumentFragment();

// Bucle para agregar los elementos en la variable fragmento
for (i = 0; i < 20; i++)
{
    /*
        Hay que instanciar el objeto y nodo elemento, para
        generar una nueva referencia cada iteración, de lo
        contrario, se trabajaría con el mismo objeto.
    */
    const agregarItem= document.createElement("LI");

    agregarItem.innerHTML = "Elemento #" + i;

    /*
        Aquí agrega todos los elementos al createDocumentFregment().
    */
    fragmento.appendChild(agregarItem);
}

/*
    Aquí se añaden todos los elementos al elemento padre
*/
contenedor.appendChild(fragmento);

