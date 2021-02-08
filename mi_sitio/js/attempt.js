var contador = 0;
const total = 4;
document.getElementById("boton").onclick = function() {
    contador++
    var resta = (total - contador);

    if (respuesta == "Montaña") {
        alert("La respuesta es acertada");
    } else {
        if (contador == 2) {
            alert("Hay más altas o más bajas");
            return false;
        } else if (contador == 3) {
            alert("Necesitaras botas para escalarlas");
            return false;
        } else if (contador == 4) {
            alert("El resultado es MONTAÑA");
            return false;
        }
        document.getElementById("mostrar").innerHTML = contador;
        document.getElementById("restar").innerHTML = resta;
        event.preventDefault();
    }
}