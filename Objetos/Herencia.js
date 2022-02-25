// SUPERCLASE 
class Persona
{
    constructor (nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
    }

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

    datosPersona (){
        return this.nombre + " " + this.apellido;
    }

    // Se sobrescribe el método de Object
    toString(){
        /*
            Aquí se aplica polimorfismo, porque cuando
            se invoca desde la clase padre llama al método
            datosPersona() de esta clase, pero si se hace 
            desde un objeto de la subclase Empleado, invoca
            al método datosPersona() de esa clase.
        */
        return this.datosPersona();
    }
}

// SUBCLASE
class Empleado extends Persona
{
    constructor(nombre, apellido, departamento)
    {
        // Llamada al constructor de la Superclase
        super(nombre, apellido);

        // Inicializar las VI de la subclase
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento = departamento;
    }

    // Sobreescritura de métodos
    datosPersona()
    {
        return super.datosPersona() + " " + "Departamento: " + this.departamento;
    }
}

let persona = new Persona("Felipe", "Zea");

// Instancia de la subclase
let empleado = new Empleado('Carolina', 'Gutierrez', 'Recursos Humanos');

console.log("Departamento: " + empleado.departamento + " | " + 
    "Nombre: " + empleado.nombre + " " + empleado.apellido);

// Herencia de métodos
console.log("Nombre Persona: " + persona.datosPersona());

// Uso de un método sobreescrito
console.log("Nombre Empleado: " + empleado.datosPersona());

// Uso de toString() y muestra del polimorfismo
console.log(empleado.toString());
console.log(persona.toString());
