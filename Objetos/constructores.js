// Los constructores son funciones que permite 
// crear objetos.

// Los parámetros pueden ser las propiedades
function Persona (nombre, apellido, email){
    // this. establece el parámetro como propiedad
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

// Generar las instancias
let padre = new Persona("Luis", "Cortés", "Luco@gmail.com")
let madre = new Persona("Ana", "Castro", "anCastro@gmail.com")

console.log(padre)
console.log(madre)