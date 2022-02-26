// MODIFICAR UN ATRIBUTO

/*
    Primero se debe obtene el elemento que se va
    a modificar.
*/
const rangoEdad = document.querySelector(".rangoEdad");

/*
    Segundo se usa el método setAttribute(), que recibe
    2 argumentos: 1. El atributo que se va modificar, 
    2. El valor que se le asignará a ese atributo.

    Se le puede asignar cualquier atributo y/o valor,
    pero el documento HTML sólo lo aplicará si es válido
    para el elemento.
*/
rangoEdad.setAttribute("type", "number")

const input1 = document.getElementById("input1");
/*
    El setAttribute() definirá un valor para el 
    atributo type, este se le asignará como tal,
    pero el documento html por defecto lo dejará 
    como un tipo text
*/
input1.setAttribute("type", "rancio");

/*
    El input con el id input2, no posee un atributo
    type definido, pero el setAttribute se lo creará
*/
const input2 = document.getElementById("input2");
input2.setAttribute("type", "color");

// OBTENER UN ATRIBUTO

/*
    Con getAttribute, se puede obtener el valor de un 
    atributo específico de un elemento, el argumento
    del método es el identificador de ese atributo. 
 */
valorAtributo = input2.getAttribute("type");

document.write("<br><br> El valor del atributo del elemento con el selector \"input2\" es: " +
    valorAtributo)

// REMOVER EL ATRIBUTO DE UN ELEMENTO

let input3 = document.getElementById("input3");

/*
    A este elemento se le definio el atributo type con
    el valor range, pero el método removeAttribute()
    elimina esté atributo y HTML aplica el atributo por
    defecto para las etiquetas input.
*/
input3.removeAttribute("type");
