/*
    Se crea un objeto tipo Promesa.

    Esta va a tener una función de tipo flecha
    como argumento la cual tiene dos parámetros, 
    dos funciones de tipo callback.

    El primero es en caso de que la ejecución sea exitosa
    y el segundo en caso de que ocurra un error.
*/
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;

    /* 
        Se define el flujo que va a tener en caso
        de una ejecución exitosa, esto se controla
        por medio de las funciones callback que se 
        definen en la función de tipo flecha
    */
    if (expresion)
        resolved('Resolvió correcto');
    else
        rejected('Se produjo un error');
});

// Invocar las funciones de la promesa

/*
    Este recibe 2 argumentos, 2 funciones tipo
    flecha, una obtiene el valor de la ejecución
    correcta y el segundo el valor del error.

    Este método llama a la promesa en las líneas 11 a 24, las funciones
    que le envía como argumento son las que se establecen en los 
    paréntesis después de la palabra Promise (línea 11).

    Como se puede apreciar es desde la Promesa en donde se invocan los
    métodos que se le envían como argumento, y el cuerpo de estos es el
    encargado de gestionar una ejecución correcta o incorrecta de la misma.
*/
miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);

// Uso de catch
/*
    La diferencia de esta sintaxis con la anterior,
    radica es que ahora el método then(), solo tiene como 
    argumento al callback para una ejecución correcta y en
    caso de un error en la ejecución se invoca el métod catch()
    que recibe como argumento al callback rejected.

    Es como si se trabajará en un bloque try-catch,
    then() se encarga de ejecutar el código correcto, mientras
    que catch() maneja el error.
*/
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error))