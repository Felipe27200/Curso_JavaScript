// Sintaxis funciones tipo flecha
/* 
    Los paréntesis son la lista de parámetros.
    Después de => van las instrucciones de la función
    y su resultado será el valor de retorno.

    Si el cuerpo está en una sola línea, no es necesario
    el uso de llaves
*/ 
const miFuncion = (numero1, numero2) => numero1 + numero2;
// Se invoca como si fuera una f. tipo expresión

console.log(miFuncion(3, 2))

const saludo = () => {
    console.log("mi función flecha")
}

saludo()

// Retornar una cadena
const saludar = () => {
    return "Saludos desde función flecha => <="
}

console.log(saludar()) 

// Como la función está en una sola línea, no es necesario el uso de return
const saludor2 = () => "Saludos desde una función flecha en una línea";

console.log(saludor2())

/*
    Las funciones flecha también pueden retornar un objeto, pero 
    cuando está en una sola línea este debe estar entre paréntesis.
*/
const regresarObjeto = () => ({nombre: "Felipe", apellido: "Zea"});

console.log(regresarObjeto())

/*
    Como se puede apreciar, si el cuerpo de la función flecha
    ocupa más de dos líneas, se sigue respentando la sintaxis
    normal de las funciones y de los objetos.
*/
const regresarObjeto2 = () => {
    objeto = {
        nombre: "Elkin",
        apellido: "Topiso"
    }

    return objeto
}

console.log(regresarObjeto2())


// Recibir parámetros en una función flecha
/*
    Si la función tiene sólo un parámetros, entonces
    ese parametro puede o no puede estar entre 
    paréntesis.
*/
const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros("Hola Mundo")