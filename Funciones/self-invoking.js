// Self-Invoking sin parámetros
(function (){
    console.log("Ejecutando la función");
})();

// Self-Invoking con parámetros
(function (nombre, apellido){
    console.log(nombre + " " + apellido)
})("Juan", "Zea");