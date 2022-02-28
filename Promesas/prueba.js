let b;

// setTimeout(() => b = 3, 1000);

// console.log(b)

let promesa = new Promise ((resolved) => {
    setTimeout(() => b = 3, 3000)

    resolved("valor de b: " + b);
});

/*
    El callback que se le envía a then() como argumento, debe
    plantear como gestionar el resultado de la promesa.

    Esto porque si se intentará ejecutar la inicialización de b
    en el callback, esta no ocurriría, por ende, es en el cuerpo de
    la promeasa donde se inicializa b para poder imprimir su valor en 
    pantalla.
*/
promesa.then(valor => {
    console.log(valor)
});
