let persona = {
    nombre: "Juan",
    apellido: "Zea",
    
    // Este es el método get del objeto, debe estar precedido
    // por la palabra get y el nombre de la función
    get nombrePersona() 
    {
        return this.nombre + " " + this.apellido;
    }
}

// Aquí se le agrega una propieda al objeto
persona.telfono = "222-555-6666"

// De esta forma se obtiene el objeto en formato string
personaString = JSON.stringify(persona);

console.log("Datos persona: " + personaString);

// De esta manera se debe invocar el método get, como si fuera una propiedad
console.log("Nombre completo: " + persona.nombrePersona)