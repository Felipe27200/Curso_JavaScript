async function funcionConPromesaAwaitYTimeaout()
{
    console.log("Inicio función");

    let miPromesa = new Promise (resolved => {
        setTimeout(() => resolved('promesa con await y timeout'), 3000);
    });

    // console.log(miPromesa.then(valor => console.log(valor)))
    console.log(await miPromesa)

    /*
        Este se ejecutará después de la llamada a la promesa,
        ya que con await, se le indica que se debe esperar al
        resultado de la promesa, para continuar con las siguientes
        instrucciones.
    */
    console.log("Fin función")
}

funcionConPromesaAwaitYTimeaout();