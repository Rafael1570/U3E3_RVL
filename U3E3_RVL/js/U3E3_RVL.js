// Rafael Vega Librero

let nombreUsuario = localStorage.getItem("nombre");

// Nombre del usuario
if (nombreUsuario === null) {

    nombreUsuario = prompt("Introduce tu nombre:");

    // Repetir si introduce números o deja el nombre vacío
    while (nombreUsuario !== null && (nombreUsuario.trim() === "" || !isNaN(nombreUsuario))) {

        alert("No puedes introducir solamente números");
        nombreUsuario = prompt("Introduce tu nombre:");
    }

    // Comprobar si ha pulsado Cancelar
    if (nombreUsuario === null) {
        alert("El usuario ha pulsado Cancelar");
    } else {
        // Guardar el nombre si es válido
        localStorage.setItem("nombre", nombreUsuario);
    }

} else {
    alert("Bienvenido de nuevo, " + nombreUsuario + "!");
}
// Lenguaje de programación favorito

let lenguajeFavorito = localStorage.getItem("lenguaje");

if (nombreUsuario !== null) {
    if (lenguajeFavorito === null) {

        lenguajeFavorito = prompt("Introduce tu lenguaje de programación favorito:");

        // Repetir si deja el lenguaje vacío
        while (lenguajeFavorito !== null && lenguajeFavorito.trim() === "") {
            alert("No puedes dejar el lenguaje vacío");
            lenguajeFavorito = prompt("Introduce tu lenguaje de programación favorito:");
        }
        if (lenguajeFavorito === null) {
            localStorage.setItem("lenguaje", lenguajeFavorito);
        }


    }else {
        alert("Tu lenguaje de programación favorito es " + lenguajeFavorito + "!");
    }
}
// Número de visitas durante la sesión

let visitas = sessionStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}
sessionStorage.setItem("visitas", visitas);

// Mostrar los datos almacenados

alert("Nombre del usuario: " + localStorage.getItem("nombre") + 
"\nLenguaje de programación favorito: " + localStorage.getItem("lenguaje") +
"\nNúmero de visitas durante la sesión: " + sessionStorage.getItem("visitas"));