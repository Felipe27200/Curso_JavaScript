let promesa = new Promise ((resolved) => {
    setTimeout(() => console.log("Saludos con promesa y timeout"), 3000); 
});

// PALABRA CLAVE ASYNC
/*
    Esto indica que la función debe retornar una promesa.
*/
async function miFuncionConPromesa () 
{
    /*
        Este es el valor que retornará al callback en el
        then().
    */
    return 'saludos con promesa y async';
}

/*
    La palabra async, indica que miFuncionConPromesa() debe 
    retornar una promesa, por eso, es que en su invocación
    se llama a then(), para así enviarle los valores de los
    callback resolved and rejected (opcional).

    Como miFuncionConPromesa no se declaro como una Promesa
    hay que invocarla con paréntesis.
*/
miFuncionConPromesa().then(valor => console.log(valor));