const PREGUNTAS = [];
const CONTAINERPREGUNTA = document.querySelector("#espacioPregunta");
const BOTON = document.querySelector(".button-19")

// conjunto de preguntas
const botonUsar = document.querySelector(".boton-usar");
function crearConjuntoPreguntas() {
    let pregunta1 = "Cuales son los roles interpersonales";
    let pregunta2 = "Nombrar dos ejemplos de roles decisionales";
    let pregunta3 = "Cuales son los tipos de habilides";
    let pregunta4 = "Cuales son los niveles gerenciales organizacionales";
    let pregunta5 = "Nombrar a quienes se los denomina gerentes de nivel institucional";
    let pregunta6 = "Nombrar las variantes q estudia el entorno o ambiente global";
    let pregunta7 = "Nombrar las formas de internacionalizar a una organización";
    let pregunta8 = "Habilidad q predomina en el nivel operativo :";
    let pregunta9 = "Competencias del administrador";
    let pregunta10 = "Proceso del administrador defini cada uno";
    let pregunta11 = "Nombra q hacen los diferentes generentes de los niveles organizacionales";
    let pregunta12 = "Como se evalua el desempeño de un administrador";
    let pregunta13 = "Características de una organizacion";
    let pregunta14 = "Diferencias de objetivos organizacionales y objetivos individuales";
    let pregunta15 = "Quales son los paremetros del sistema nombralos y definilos";
    let pregunta16 = "Que es homeostasis";
    let pregunta17 = "Tipos de retrolimentacion";
    let pregunta18 = "Cuantas propiedades del sistema hay definilas";
    let pregunta19 = "Como se clasifican los sistemas segun su constitucion y segun su naturaleza";
    let pregunta20 = "Clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica";
    let pregunta21 = "Como se clasifica la org por los sectores de actividad nombrarlos y definirlos";
    let pregunta22 = "El ambiente general o contexto mediato impacta en la org de manera directa?(V/F)";
    let pregunta23 = "Cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno";
    let pregunta24 = "Aspectos formales e informales q son";
    let pregunta25 = "Cuales son los aspectos de la cultura";
    let pregunta26 = "Variables q se analizan dentro del riesgo politico";
    let pregunta27 = "Cuales son las medidas politicas";
    let pregunta28 = "Que significa outsourcing";
    PREGUNTAS.push(pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20, pregunta21, pregunta22, pregunta23, pregunta24, pregunta25, pregunta26, pregunta27, pregunta28);
    return PREGUNTAS
}

botonUsar.onclick = function(){
    crearConjuntoPreguntas()
}
// elegir pregunta y mostrarla 
function getEleccionRandom(){
    const GETRANDOM = Math.floor(Math.random() * PREGUNTAS.length);
    return PREGUNTAS[GETRANDOM];
}
BOTON.onclick = function(){
    let PREGUNTASELECCIONADA = getEleccionRandom();
    if (PREGUNTAS.length < 2 ){
        alert("agregar al menos 2 preguntas o utiliza un conjunto para empezar");
    }
    CONTAINERPREGUNTA.textContent = PREGUNTASELECCIONADA;
}
// agregar preguntas 
const espacio = document.getElementById('blank-space');
const SUBMIT = document.getElementById('submit');
SUBMIT.onclick = function() {
    let nuevaPregunta = espacio.value;
    PREGUNTAS.push(nuevaPregunta);
    espacio.value = "";
}




