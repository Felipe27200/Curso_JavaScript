let abrirUrl = "https://youtube.com";

/*
    El método open() abre el recurso que le indica la
    url y en este caso como es una ventana la retorna.
*/
let ventana = window.open(abrirUrl)

console.log("La ventana está cerrada: " + ventana.closed)
/*
    Como ya se ha almacenado la ventana, con el
    método close, se le puede indicar que se cierre.

    En este caso se le indica que se cierre después de 3 seg.
*/

/*
    Esta función contiene una promesa
    que ejecutará el close después de 3 segundos 
    y con la ayuda de await se esperará a que termine
    el proceso, para luego poder imprimir el valor de
    closed, después de que la promesa haya finalizado.
*/
async function cerrarVentana(){
    let promesa = new Promise (resolved => {
        setTimeout(() => resolved(ventana.close()), 3000);
    });

    await promesa;

    console.log("La ventana está cerrada: "+ ventana.closed)
}

cerrarVentana();
