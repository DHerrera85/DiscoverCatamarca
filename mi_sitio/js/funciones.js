let Nivel = 0;
let IntentosFallidos = 0;


const Respuesta = document.querySelector("#Respuesta");
const Pista = document.querySelector("#Pista");
const Intento = document.querySelector("#Intentos-Adivinanza");
const DescripcionAdivinanza = document.querySelector("#Descripcion");
const BotonIniciar = document.querySelector("#Btn-Iniciar");
const BotonAceptar = document.querySelector("#Btn-Aceptar");
const BotonReintentar = document.querySelector("#Btn-Reintentar");
const ImgAdivinanza = document.querySelector("#img-adivinanza");


let AdivinanzaNiveles = [{
        descripcion: "¿En que región del país se encuentra la Provincia de Catamarca? ",
        pista1: "Otras provincias que integran la región son Salta, Jujuy, Tucumán y Santiago del Estero",
        pista2: " N_r_e G_a_d A_g_n_i_o",
        solucion: "Región del Norte Grande Argentino",
        img: "img/noroeste_argentino.jpg"
    },
    {
        descripcion: "¿La geografía de Catamarca está conformada en un 70 % por qué tipo de relieve?",
        pista1: "Es excelente para la práctica del montañismo",
        pista2: "M_n_a_a",
        solucion: "Montaña",
        img: "img/montanacatamarcajuego01.jpg"
    },
    {
        descripcion: "¿Cuál es el principal motivador del viaje en Catamarca",
        pista1: "Dentro de las actividades que podés realizar se encuentran los paseos en camionetas 4 x4, trekking, sandboard, cabalgatas",
        pista2: "Tu___mo Av____ra",
        solucion: "Turismo Aventura",
        img: "img/turismoaventura01juego.jpg"
    },
    {
        descripcion: "Es el volcán más alto del mundo",
        pista1: "No es el volcán Pico del Teide",
        pista2: "N_v_d_ O_o_s d_l S_l_d_ ",
        solucion: "Nevado Ojos del Salado",
        img: "img/nevadoojosdelsaladojuego02.jpg"
    },
    {
        descripcion: "¿Cuál es la tercera cumbre más alta del Hemisferio Sur que se encuentra en la Provincia? ",
        pista1: "No es el Aconcagua, esa cumbre se encuentra en Mendoza ",
        pista2: "M_n_e P_s_i_",
        solucion: "Monte Pissis",
        img: "img/montepissis03juego.jpg"
    },

];

//Nuevo Juego
function newGame() {
    ImgAdivinanza.setAttribute('class', 'Ocultar');
    Respuesta.setAttribute('class', 'form-control-lg Mostrar');
    Nivel = 0;
    IntentosFallidos = 0;
    level(Nivel);

    BotonIniciar.setAttribute('class', 'btn btn btn-success Ocultar');
    BotonAceptar.setAttribute('class', 'btn btn btn-success Mostrar');
}


//InicioJuego
function startGame() {

    if (!isEmpty()) {

        if (Respuesta.value.localeCompare(AdivinanzaNiveles[Nivel].solucion) == 0) {

            if (Nivel == 4) {
                gameWin();

            }
            Nivel++;
            level(Nivel);
            alert("Felicidades Respuesta Correcta Pasas al siguiente nivel");
            console.log(`NIVEL:${Nivel}`);
            clearScreen();
        } else {
            console.log("PERDISTE UN INTENTO");
            IntentosFallidos++;
            helpGame(IntentosFallidos);
            clearScreen();
        }
    } else {
        alert("INGRESA UNA RESPUESTA");
    }
}


//Niveles de Juego
function level(Nivel) {
    DescripcionAdivinanza.textContent = `${AdivinanzaNiveles[Nivel].descripcion}`;
}

//Pistas
function helpGame(Intentos) {

    Intento.textContent = `Intentos: ${IntentosFallidos}/4`;

    switch (IntentosFallidos) {
        case 2:
            Pista.textContent = `PISTA 1:${AdivinanzaNiveles[Nivel].pista1}`;
            break;
        case 3:
            Pista.textContent = `PISTA 2:${AdivinanzaNiveles[Nivel].pista2}`;
            break;
        case 4:
            DescripcionAdivinanza.textContent = `PARTIDAS GANADAS: ${Nivel+1}/${AdivinanzaNiveles.length}`;
            ImgAdivinanza.setAttribute('class', 'Mostrar');
            ImgAdivinanza.setAttribute('src', `${AdivinanzaNiveles[Nivel].img}`);
            Pista.textContent = `LA RESPUESTA CORRECTA ERA:${AdivinanzaNiveles[Nivel].solucion}`;
            BotonAceptar.setAttribute('class', 'btn btn btn-success Ocultar');
            BotonReintentar.setAttribute('class', 'btn btn btn-danger Mostrar');
            Respuesta.setAttribute('class', 'form-control-lg Ocultar');

            break;
    }
}

//Validamos Si la caja esta vacia
function isEmpty() {
    let caja = document.getElementById("Respuesta").value;
    if (caja == "") {
        return true;
    }
    return false;
}

//Limpia la caja de respuesta
function clearScreen() {
    document.getElementById("Respuesta").value = "";
}


//Reintentar
function restartGame() {
    console.log("Juego Reiniciado");
    DescripcionAdivinanza.textContent = "¿LISTOS?"
    ImgAdivinanza.setAttribute('src', 'img/adivinanza.png');

    Intento.textContent = "";
    Pista.textContent = "";
    BotonReintentar.setAttribute('class', 'btn btn btn-danger Ocultar');
    BotonIniciar.setAttribute('class', 'btn btn btn-success Mostrar');

}

function gameWin() {

    DescripcionAdivinanza.textContent = `PARTIDAS GANADAS: ${Nivel+1}/${AdivinanzaNiveles.length}`;
    DescripcionAdivinanza.setAttribute('class', 'Mostrar');

    ImgAdivinanza.setAttribute('class', 'Mostrar ');
    ImgAdivinanza.setAttribute('src', 'img/ganador1.jpg');

    Respuesta.setAttribute('class', 'Ocultar');
    Pista.setAttribute('class', 'Ocultar');
    Intento.setAttribute('class', 'Ocultar');

    BotonIniciar.setAttribute('class', 'Ocultar');
    BotonAceptar.setAttribute('class', 'Ocultar');
    BotonReintentar.setAttribute('class', 'Ocultar');

}