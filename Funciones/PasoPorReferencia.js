/* Declarar un OBJETO
La referencia se almacena en una variable y
su cuerpo se declara entre llaves */
const miObjeto = {
    // Sintaxis propiedades -> nombreVariable : Valor
    // Los dos puntos reemplazan al operador de asignación.
    // Las propiedades se separan mediante comas (,)
    nombre: "Juan",
    apellido: "Zea"
}

console.log(miObjeto)

function modificarObjeto(objeto)
{
    objeto.nombre = "Felipe"
    objeto.apellido = "Sánchez"
}

function modificarReferencia(objeto)
{
    // Se cambia la referencia a la que apunta la 
    // variable local, pero no la referencia de la 
    // variable que se uso como argumento
    objeto = {
        nombre: "Nuevo objeto"
    }
}

function imprimirObjeto(objeto)
{
    console.log(objeto)
}

// Modificar las propiedades del objeto en la función
modificarObjeto(miObjeto)

imprimirObjeto(miObjeto)

// Modificar la referencia
modificarReferencia(miObjeto)

imprimirObjeto(miObjeto)
