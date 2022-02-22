// Un parámetro posee un valor por default
function pruebaParametros(numero1, numero2 = 1)
{
    // Se verifica si se recibe un tercer argumento
    if (arguments[2] != undefined)
        // Se usa arguments para acceder al parámetro
        // fuera de la lista de parámetros
        return numero1 + numero2 + arguments[2];
    else
        // Se suman solo los parámetros definidos en la lista
        return numero1 + numero2;
}

// Se realiza una llamada sin ningun argumento
console.log(pruebaParametros()); // Retorna NaN

console.log(pruebaParametros(1)) // Se le envía un argumento

console.log(pruebaParametros(5, 2))

// Se envía un argumentos extra
console.log(pruebaParametros(3, 7, 8))