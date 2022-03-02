/*
    No es necesario que la promesa reciba un callback
    para el rejected.
*/
let promesa = new Promise((resolver) => {
    console.log("Inicio promesa")

    /*
        El setTimeout() establece que va a llamar a través de una
        función flecha al callback resolved, en este caso llamado
        resolover, después de 3 segundos.
    */
    setTimeout (() => resolver('saludos con promesa y timeout'), 3000)

    console.log("Fin promesa")
});

/*
    Solo envía un argumento, ya que no se definio el rejected
    como parámetro en la promesa
*/
promesa.then(valor => console.log(valor));