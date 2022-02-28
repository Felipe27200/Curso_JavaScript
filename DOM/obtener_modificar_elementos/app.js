

const titulo = document.querySelector(".titulo");

/* 
    Esta propiedad recibe los valores dentro de las
    etiquetas de los elementos, pero si acaso, en esas
    etiquetas hubiera otras etiquetas, no las traería,
    pero si el valor que contiene.

    Es decir, no devuelve el contenido HTML que contiene.

    Sin importar los estilos del elemento trae la información
    entre sus etiquetas.
*/
let resultado = titulo.textContent;

imprimirValorElementos("p", "textContent")

resultado = titulo.innerHTML;

imprimirValorElementos("p", "innerHTML")

/*
    En el alert si se muestra todo el contenido entre las
    etiquetas, incluyendo, la etiquetas HTML que contenga.

    Esto sólo con el innerHTML
*/
alert(resultado)

resultado = titulo.outerHTML;

imprimirValorElementos("p", "outerHTML")

/*
    En el alert, se mostrará todo el contenido entre las
    etiquetas, incluyendo estas y los atributos que tenga.
*/
alert(resultado)
/*
    innerText, retorna lo mismo, pero como está el estilo hidden
    no muestra todo el contenido, es porque este muestra la información
    dependiendo también de los estilos.

    Este también ha caído en desuso, ya que estaba enfocado en funcionalidades
    de internet explorer.
*/
resultado = titulo.innerText;

imprimirValorElementos("p", "innerText")

/*
    outerText retorna lo mismo, similar a textConten,
     pero este ya ha caído en desuso.
*/

resultado = titulo.outerText;
imprimirValorElementos("p", "outerText")

function imprimirValorElementos(etiqueta, propiedad)
{
    document.write(`<br>Valor en las etiquetas ${etiqueta},
     traído por ${propiedad}: ${resultado}`)    
}