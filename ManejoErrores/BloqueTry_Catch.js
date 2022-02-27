"use strict";

try
{
    /*
        Se lanza un error, ya que la variable no
        ha sido definida, esto por el modo estricto.
    */
    x = 10;
}
catch(error)
{
    // Se maneja el error
    console.log("Error: " + error);

    // Atributos del error
    console.log(error.name)
    console.log(error.message)
}
// Este bloque se ejecuta ocurra o no una excepción
finally
{
    console.log("Termina la revisión de errores.")
}

// Como el error ya ha sido manejado el programa continúa.
console.log('Continuamos...')

try {
    // Lanzar mi propia excepción
    throw "Mea culpa";    
} 
catch (error) {
    console.log("Error: " + error)
}