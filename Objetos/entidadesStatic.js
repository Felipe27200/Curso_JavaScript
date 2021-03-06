class Persona
{
    // Declarar una VS para la clase
    static contadorObjetosPersonas = 0;

    // Declarar una Vi
    email = "Valor por default para el email"

    // Simular una constante estática
    /*
        Como tal no es posible crear una constante
        estática en JS, para esto se usa alternativamente
        un método get estático.

        Se usaría para simular el máximo de objetos que 
        puede haber de la jerarquía persona.
    */
    static get MAX_OBJ(){
        return 5;
    }

    constructor (nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;

        // Acceder a la VS de la clase, desde el constructor
        /*
            Se debe acceder por medio del nombre de la clase
        */
        if (Persona.contadorObjetosPersonas < Persona.MAX_OBJ)
            Persona.contadorObjetosPersonas++;
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

    toString(){
        return this.datosPersona();
    }

    // DECLARAR MÉTODOS STATIC
    static saludar(){
        console.log('Saludos desde el método Static')
    }

    static recibirObjeto(persona){
        console.log(persona.nombre)
    }
}

class Empleado extends Persona
{
    constructor(nombre, apellido, departamento)
    {
        super(nombre, apellido);

        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento = departamento;
    }

    datosPersona()
    {
        return super.datosPersona() + " " + "Departamento: " + this.departamento;
    }
}

let persona = new Persona("Felipe", "Zea");

let empleado = new Empleado('Carolina', 'Gutierrez', 'Recursos Humanos');

console.log("Departamento: " + empleado.departamento + " | " + 
    "Nombre: " + empleado.nombre + " " + empleado.apellido);

console.log("Nombre Persona: " + persona.datosPersona());

console.log("Nombre Empleado: " + empleado.datosPersona());

console.log(empleado.toString());
console.log(persona.toString());

// Invocar métodos static
/* 
    Se debe usar el identificador de la clase,
    ya que las entidades static se asocian a esta
    y no al objeto.
*/
Persona.saludar()

Persona.recibirObjeto(persona)

// HERENCIA DE UN MÉTODO STATIC
/*
    Se comprueba que la subclase heredó los métodos
    static, para usarlos es necesario usar el nombre
    de la subclase.
*/
Empleado.saludar()
Empleado.recibirObjeto(empleado)

// Todas las instancias de la jerarquía comparten el mismo
// valor para las VS
console.log(Persona.contadorObjetosPersonas)
console.log(Empleado.contadorObjetosPersonas)

console.log(persona.email)