// ASYNC CON AWAIT
async function funcionConPromesaYawait()
{
    /*
        Promesa declarada dentro de la función con
        async
    */
    let miPromesa = new Promise (resolved =>
        {
            // Esta invocación retorna el argumento entre paréntesis
            resolved ('Promesa con await');
        });

        /*
            Invoca la promesa declarada dentro de la
            función e imprime su resultado.
        */
        console.log(await miPromesa)
}

funcionConPromesaYawait();