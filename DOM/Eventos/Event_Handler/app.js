/*
    Se obtiene el el elemento button
*/
const button2 = document.querySelector(".button2");

/*
    La propiedad onclick, permite establecer las acciones que 
    debe realizar el objeto, en este caso, se le asigna una
    función flecha.

    No se recomienda su uso, porque se podría bloquear el archivo
    js por parte del usuario o podría ser que el elemento HTML no
    recibierá codigo js.
*/
button2.onclick = () => {
    alert("Hola #2")
}
