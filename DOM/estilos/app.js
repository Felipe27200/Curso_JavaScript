// Se obtiene el elmento
const titulo = document.querySelector(".titulo");

/*
    Mediante la propiedad style, se puede acceder 
    a los elementos de estilo de los nodos.

    De esta forma se define el color.
*/
titulo.style.color = "#32B";

titulo.style.backgroundColor = "#F34"

titulo.style.padding = "30px";

/*
    Todo esto para el atributo class en los 
    elementos html.

    Se le añade la clase grande al elemento
    html referenciado en titulo.
*/
titulo.classList.add("grande")

/*
    El método remove, remueve una clase
    específica de class="" del objeto
*/
titulo.classList.remove("grande")

/*
    Obtener las clases que posee el elemento

    Las clases se enumeran a partir del número cero,
    es como si cada uno tuviera un índice.

    Este método retorna el nombre de la clase en forma
    de cadena.
*/
let valor = titulo.classList.item(1);

document.write("Clase obtenida del elemento: " + valor + "<br><br>")

/*
    Comprobar si el elemento posee la clase.

    contains() recibe como argumento el nombre de la clase
    y comprueba si el elemento la tiene en el atributo class="",
    si la tiene retorna true.
*/
nombreClase = "grande";

if (titulo.classList.contains(nombreClase))
    document.write(`El elemento posee la clase: ${nombreClase}`)
else
    document.write(`El elemento no posee la clase: ${nombreClase}`)

document.write("<br><br>")

/*
    Método toggle(), este método agrega la clase en caso de que
    el elemento no la tenga, y la saca en caso de que el elemento
    la posea.

    Retorna true si el elemento no tiene la clase y false en
    caso de que si la posea.

    Si se le agrega true como segundo argumento, aunque tenga la 
    clase no la va a sacar y en caso de que se le agregue false,
    la va a sacar siempre, y nunca la va a agregar.

    Si se aplican los segundos argumentos, va a retornar siempre
    esos valores respectivos.
*/
valor = titulo.classList.toggle("grande");
// valor = titulo.classList.toggle("grande", true);
// valor = titulo.classList.toggle("grande", false);

document.write(`Valor de retorno de toggle: ${valor}<br><br>`)

// REEMPLAZAR UNA CLASE POR OTRA

/*
    Recibe 2 argumentos, el primero es la clase que 
    se va a reemplazar y el segundo es la clase que
    la va a reemplazar, valga la redundancia.

    Si la clase que se va a reemplazar existe, retorna
    true y hace el cambio, de lo contrario, retorna
    false y no realiza el reemplazo.
*/
valor = titulo.classList.replace("grande", "chico")
