const persona = {
    nombre: "Juan",
    apellido: "Zea",
    ocupación: "aprendiz SENA",
    /* Forma alternativa de declarar funciones para un objeto */
    obtenerDatos(){
        return this.nombre + " " + this.apellido + " Ocupación: " + this.ocupación;
    }
}

console.log(persona.obtenerDatos());