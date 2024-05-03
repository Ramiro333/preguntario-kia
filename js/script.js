let pregunta1 = "cuales son los roles interpersonales";
let pregunta2 = "nombrar dos ejemplos de roles decisionales";
let pregunta3 = "cuales son los tipos de habilides";
let pregunta4 = "cuales son los niveles gerenciales organizacionales";
let pregunta5 = "nombrar a quienes se los denomina gerentes de nivel institucional";
let pregunta6 = "nombrar las variantes q estudia el entorno o ambiente global";
let pregunta7 = "nombrar las formas de internacionalizar a una organización";
let pregunta8 = "habilidad q predomina en el nivel operativo :";
let pregunta9 = "competencias del administrador";
let pregunta10 = "proceso del administrador defini cada uno";
let pregunta11 = "Nombra q hacen los dif generentes de los niveles organizacionales";
let pregunta12 = "como se evalua el desempeño de un administrador";
let pregunta13 = "características de una organizacion";
let pregunta14 = "diferencias de objetivos organizacionales y objetivos individuales";
let pregunta15 = "cuales son los paremetros del sistema nombralos y definilos";
let pregunta16 = "que es homeostasis";
let pregunta17 = "tipos de retrolimentacion";
let pregunta18 = "cuantas propiedades del sistema hay definilas";
let pregunta19 = "como se clasifican los sistemas segun su constitucion y segun su naturaleza";
let pregunta20 = "clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica";
let pregunta21 = "como se clasifica la org por los sectores de actividad nombrarlos y definirlos";
let pregunta22 = "el ambiente general o contexto mediato impacta en la org de manera directa?(V/F)";
let pregunta23 = "cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno";
let pregunta24 = "aspectos formales e informales q son";
let pregunta25 = "cuales son los aspectos de la cultura";
let pregunta26 = "variables q se analizan dentro del riesgo politico";
let pregunta27 = "cuales son las medidas politicas";
let pregunta28 = "q significa outsourcing";

const CONTAINERPREGUNTA = document.querySelector("#espacioPregunta");
const boton = document.querySelector(".comienzo")

function getEleccionRandom(){
    const GETRANDOM = Math.floor(Math.random() *28);
    const PREGUNTAS = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20, pregunta21, pregunta22, pregunta23, pregunta24, pregunta25, pregunta26, pregunta27, pregunta28];
    const PREGUNTASELECCIONADA = PREGUNTAS[GETRANDOM];
    CONTAINERPREGUNTA.textContent = PREGUNTASELECCIONADA;
    return PREGUNTASELECCIONADA;
    
}
boton.onclick = function(){
    getEleccionRandom();
}






