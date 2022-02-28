function funcionCallBack()
{
    console.log('Saludo asíncrono después de 3 seg.');
}

/*
    Esta función establece que la función (callback) 
    que recibe como primer argumento, se ejecutará 
    después de un tiempo determinado, el cual se pasa
    como segundo argumento.

    1000 -> 1 seg, 2000 -> 2 seg, y así sucesivamente.
*/
setTimeout(funcionCallBack, 3000);


/*
    Esta función se ejecutará antes que la anterios,
    debido a que se establece que se ejecute dentro
    de un segundo y la otra dentro de 3.
*/
setTimeout(
    /*
        Se envía la función como parámetro, directamente desde
        la lista de parámetros
    */
    function (){
    console.log("Saludo asíncrono después de 1 seg.")
}, 1000)

// Proceso asíncrono después de 3 segundos.
setTimeout(() => console.log("Saludo #2 después de 3 seg."), 3000)

// MÉTODO SETINTERVAL

const reloj = () => {
    // Crea un objeto con la hora y fecha actual
    let fecha = new Date();

    // Invoca los métodos get del objeto Date para obtener la hora
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

/*
    Se llamará al método reloj cada segundo
*/
setInterval(reloj, 1000)