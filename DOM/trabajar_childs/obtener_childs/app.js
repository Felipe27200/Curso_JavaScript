const contenedor1 = document.querySelector(".contenedor1");

/*
    Inicializar un nodo recién creado.
*/
const parrafo = document.createElement("P");
parrafo.innerHTML = "Parrafo";

const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Título";

h2_antiguo = document.querySelector(".h2");

/*
    Reemplazar elementos

    Se ha creado un elemento h2 y este reemplazará al
    elemento h2 declarado en el código HTML.

    replaceChild(), reemplaza un hijo por otro, sus argumentos
    son primero el elemento que reemplazara al otro y el segundo
    es ese elemento a reemplazar.
*/
contenedor1.replaceChild(h2_nuevo, h2_antiguo);

/*
    Remover un elemento hijo

    Se remueve el elemento con el selector parrafo.
*/
contenedor1.removeChild(document.querySelector(".parrafo"));

/*
    Comprobar si un elemento tiene hijos.
*/
if (contenedor1.hasChildNodes())
    document.write("El elemento con selector \"contenedor1\" tiene hijos")
else
    document.write("El elemento con selector \"contenedor1\" NO tiene hijos")

/*
    Obtener las propiedades del padre.

    parentElement retorna todo el contenido dentro del
    elemento padre, al igual que parent node.
*/
console.log(h2_nuevo.parentElement)
console.log(h2_nuevo.parentNode)

// PROPIEDADES DE LOS SIBLINGS DE LOS NODOS

/*
    Ver el hermano inmediato de un nodo.
*/
console.log("Sibling inmediato de h2_nuevo: " + h2_nuevo.nextSibling)
console.log("Sibling de h2_nuevo que lo precede: " + h2_nuevo.previousSibling)

/*
    Obtener el elemento HTML
*/
console.log("Obtener el sibling html inmediato a h2: ")
console.log(h2_nuevo.nextElementSibling)

console.log("Obtener el sibling html anterior inmediato a h2: ")
console.log(h2_nuevo.previousElementSibling)
