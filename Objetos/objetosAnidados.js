/*
    Así se pueden anidar objetos dentro de otros
*/
const persona = {
    nombre: "Felipe",
    apellido: "Zea",
    mascota: {
        gato: {
            nombre: "Horión"
        },
        perro: {
            nombr: "Horus"
        }
    }
}

/*
    Para acceder se comienza desde el más exterior,
    hasta el más interior
*/
console.log(persona.mascota.gato.nombre)

/* 
    Con el signo de cierre de interrogación se le indica que 
    busque la propiedad con ese nombre, pero que si no la 
    encuentra no salte un error, sino, que retorne undefined
*/
console.log(persona.mascotas?.gato.nombre)