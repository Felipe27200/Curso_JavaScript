// Los constructores son funciones que permite 
// crear objetos.

// Los parámetros pueden ser las propiedades
function Persona (nombre, apellido, email){
    // this. establece el parámetro como propiedad
    this.nombre = nombre
    this.apellido = apellido
    this.email = email

    // Definir un método para el objeto
    this.nombreCompleto = function (){
        return this.nombre + " " + this.apellido;
    }
}

// Generar las instancias
let padre = new Persona("Luis", "Cortés", "Luco@gmail.com")
let madre = new Persona("Ana", "Castro", "anCastro@gmail.com")

console.log(padre)
console.log(madre)

// Llamada al método del objeto
console.log("Nombre Padre: " + padre.nombreCompleto())
console.log("Nombre Madre: " + madre.nombreCompleto())

// Agregando instancias a un objeto
padre.telefono = "333 55 4444"

// padre será el único que tenga la propiedad telefono, madre no por no 
// hacer referencia a la misma instancia
console.log(JSON.stringify(padre))
console.log(JSON.stringify(madre))

// Añadir la propiedad a todos los objetos

Persona.prototype.direccion = "calle 80 #60-95"

console.log(padre.direccion)
console.log(madre.direccion)
