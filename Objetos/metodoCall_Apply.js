persona1 = {
    nombre: "Juan",
    apellido: "Zea",
    nombreCompleto: function (){
        return this.nombre + " " + this.apellido;
    },
    infoAdicionalPersona: function(titulo, telefono)
    {
        /* 
            Como titulo y telefono son variables locales de la función
            estos no deben ser precedidos por this
        */
        return titulo + ": " + this.nombre + " " + this.apellido + " | " + telefono;
    }
}

persona2 = {
    nombre: "Carlos",
    apellido: "Martínez"
}

console.log(persona1.nombreCompleto());

/*
    Al tener propiedades similares, persona2 puede hacer uso
    del método nombreCompleto() de persona1, para imprimir el 
    valor de estas.

    Para usarlo debe hacer una llamada al método desde el objeto
    que posee el método, para esto solo debe usar el nombre del
    método sin paréntesis seguido del método call() y como argumento
    el objeto que hará uso del método.
*/
console.log(persona1.nombreCompleto.call(persona2));

console.log(persona1.infoAdicionalPersona("Tecnológo", "333 444 5555"));
console.log(persona1.infoAdicionalPersona.call(persona2, "Ingeniero", "333 5555 666"));

// USO DE APPLY()   
// recibe los argumentos del método como un array
console.log(persona1.infoAdicionalPersona.apply(persona2, ['Doctor', '555 5555 5555']));
