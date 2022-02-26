/*
    De esta forma se accede directamente a las 
    propiedades del elemento HTML, esto gracias
    a que JS lo toma como un objeto con atributos
    y métodos.s.

    - className: permite conocer el nombre de las clases
    que tiene el elemento.

    - value: permite obtener el valor del elemento
*/
let input1 = document.querySelector(".input-normal")

let lista = []

agregarElementosArray("Nombre de la clase", input1.className)
agregarElementosArray("Valor", input1.value)

generarLista(1)

let input2 = document.getElementById("input2");

agregarElementosArray("Valor del atributo type antes de modificarlo", input2.type)

/*
    Modificar el valor del atributo del elemento, 
    directamente desde las propiedades del mismo.
*/
input2.type = "range";

agregarElementosArray("Valor del atributo type después de modificarlo", input2.type)

generarLista(2)

/*
    Con la propiedad accept definimos que valores son los
    que puede aceptar el input.
*/
let input3 = document.getElementById("input3")

agregarElementosArray("Valor de type antes de accept", input3.accept)

input3.accept = "image/png";

agregarElementosArray("Valor de type después de modificar accept", input3.accept)


input3.accept = "image/gif";

agregarElementosArray("Valor de type después de modificar accept", input3.accept)

generarLista(3);

/*
    DEFINIR LA LONGITUD MÍNIMA 
    QUE PUEDE TENER UN INPUT
*/
let input4 = document.getElementById("input4")

agregarElementosArray("Longitud mínima del input antes de modificarlo", input4.minLength);

/* La propiedad minlength, permite definir los caracteres mínimos
que puede recibir un input */
// input.setAttribute("minlength", "4"); || Forma alternativa
input4.minLength = "4";

agregarElementosArray("Longitud mínima del input después de modificarlo", input4.minLength);

generarLista(4);

// <<< Métodos para generar la lista >>>
function generarLista(numeroInput) {
    document.write(
        `
        <h4>Input ${numeroInput}</h4>
        
        <ul>
            ${concatenarItemsLista()}
        </ul>
        `
    )

    vaciarArray();
}

function concatenarItemsLista(){
    let itemsLista = ``;

    lista.forEach(item => {
        itemsLista += valorItemLista(item[0], item[1])
    })

    return itemsLista;
}

function valorItemLista(texto, valor){
    return `<li><b>${texto}:</b> ${valor}</li>`;
}

function agregarElementosArray(texto, valor)
{
    lista.push([texto, valor])
}

function vaciarArray(){
    lista.length = 0;
}