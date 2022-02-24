// Declarar una clase 
class Persona
{
    constructor (nombre, apellido)
    {
        /*
            La VI se crea gracias al uso de this, por ende,
            no hay necesidad de declararla.

            El _ es para diferenciar la VI de las funciones
            get y set
        */
        this._nombre = nombre;
        this._apellido = apellido;
    }

    /*
        Un método get declarado de esta forma, no podrá
        recibir parámetros
    */
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

// Crear una instancia de la clase
let persona1 = new Persona('Juan', 'Zea');

console.log(persona1.nombre);

// Llamada al método set del objeto persona1
persona1.nombre = "Juan Felipe";

console.log(persona1.nombre);
