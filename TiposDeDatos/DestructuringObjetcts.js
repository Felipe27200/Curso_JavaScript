const gato = {
    nombre: "valiente",
    duerme: true,
    edad:10,
    enemigos: ["agua", "perros"]
}

// Destructuring básica
let nombre = gato.nombre;

// Destructuring
/*
    A la izquierda están las variables que se crearan
    y a la derecha el objeto del cual se tomaran los
    valores de sus propiedades. 

    De esta forma se crean las 3 variables dentro
    de las llaves, cada una tendrá el valor respectivo
    de las 3 primeras propiedades en el objeto, el nombre
    de las variables debe coincidir con las propiedades del
    objeto.

    Este código realiza la declaración de estas variables.

    Los dos puntos después de nombre indican que se le asignará
    un alias, que es el valor que está ubicado después de estos
    2 puntos.
*/
const {nombre: nombreGato, duerme, edad} = gato;

// Se usa el alias para obtener el valor, osea el alias es el identificador de la variable
console.log(`${nombreGato} ${duerme} ${edad}`)

/* 
    La última establece un valor por defecto a la variable color, 
    en caso de que no se encuentre la propiedad con nombre color.

*/
const {nombre: nombreSuperGato, duerme: duermeGato, edad: edadGato, color = "sin color"} = gato;

console.log(color)


// ---> PRUEBA CON OBJETOS ANIDADOS <----
const persona = {
    nombre: "Felipe",
    apellido: "Zea",
    otros:{
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        mascota: {
            gato: {
                nombre: "Horión"
            },
            perro: {
                nombr: "Horus"
            }
        }        
    }
}

// Forma Básica

// Así obtenemos la propiedad del objeto
// en este caso un array (objeto)
const amigosPersona1 = persona.otros.amigos;

console.log(amigosPersona1)

// Destructuring

/* 
    Persona, ya accede a los valores de ese objeto
    esto a la derecha del operdor de asignación.

    Para acceder al objeto anidado objeto usamos
    el nombre seguido de : y entre llaves el nombre
    de la propiedad. 
*/
const {
    /*
        amigos será la variable que se creara
        tomando el valor del array amigos en el 
        objeto exterior otros, anidado en el objeto
        persona.

        amigosPersona es el alias que se establece
        para amigos.
    */
    otros: {amigos: amigosPersona}
} = persona


console.log(amigosPersona)

// Segunda forma del destructuring para objetos anidados
const {amigos} = persona.otros

console.log(amigos)

// DESTRUCTURING ARRAY

/*
    Así obtenemos el valor del primer elemento
    como se puede apreciar, las variables pueden
    llevar cualquier nombre y los elementos se
    les asignaran de forma ascendente.
*/
 const [amigoUno] = amigos;

console.log(amigoUno)