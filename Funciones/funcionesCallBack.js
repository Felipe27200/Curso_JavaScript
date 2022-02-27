// Función de tipo callback
function imprimir (mensaje)
{
    console.log(mensaje)
}

/*
    El tercer parámetro almacenará la referencia
    a la función que se invocará dentro de esta
    función.
*/
function sumar(numero1, numero2, funcionCallBack)
{
    let resultado = numero1 + numero2;

    /*
        Así es como se llama a la función que se recibió
        como parámetro.
    */
    funcionCallBack(`Resultado: ${resultado}`)
}

/*
    Se le envía los dos parámetros que hacen referencia
    a los números a sumar y el tercero es el nombre de
    la función, ya que al ser un objeto, se envía  la 
    referencia a ella por medio de su indentificador, 
    por eso es innecesario el uso de paréntesis.

    Es similar, a como si se hubiera declarado la función
    imprimir, como tipo por expresión, y sólo se enviará el
    identificador de la variable como parámetro.
*/
sumar(5, 3, imprimir)