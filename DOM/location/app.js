/*
    Se obtiene la ubicación del archivo, o
    la ubicación de la página.
*/
const href = window.location.href;

document.write("Ubicación de la ventana: " + href)

/*
    Obtener el dominio del sitio.
*/
const host = window.location.hostname;

document.write("<br>Nombre del host: " + host);

/*
    Obtener el path de la página.

    No muestra el nombre del host.
*/
document.write("<br>Path: " + window.location.pathname);

/*
    Mostrar el protocolo de la página o el sitio.
*/
document.write("<br>Protocolo => " + window.location.protocol)

// Abrir un nuevo documento
/*
    Pero lo abre en la pestaña o ventana actual.
*/

// window.location.assign("https://youtube.com")
