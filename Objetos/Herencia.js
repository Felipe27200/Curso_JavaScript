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
}

// Instancia de la subclase
let empleado = new Empleado('Carolina', 'Gutierrez', 'Recursos Humanos');

console.log("Departamento: " + empleado.departamento + " | " + 
    "Nombre: " + empleado.nombre + " " + empleado.apellido);