function muestraOpcion() {

    var opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for (let i = 0; i < opciones.length; i++) {

        if (opciones[i].checked) {
            alert(opciones[i].value);
        }

    }
}

/*window.alert("te saludo")
window.alert("te salud otra vez por si no te has percatado")
*/
/*function enviarSaludo() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var saludo = document.querySelector("#saludo");
    var texto = "hola " + nombre.value + " " + apellido.value + ",gracias por rellenar el formulario";

    saludo.innerHTML = texto;
}

function ingresar() {
    var input = ""
    var input = window.prompt("escribe un contenido", "*");
    document.write = ("input");
}*/