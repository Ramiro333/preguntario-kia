const BOTON = document.querySelector(".button-19")
const CONTAINERPREGUNTA = document.querySelector("#espacioPregunta")
const botonUsar = document.querySelector(".boton-usar");
const segundo = document.querySelector(".segundo")
const contenedorDePreguntas = document.querySelector(".contenedorDePreguntas")
class conjuntoPreguntas {
    constructor(nombre,preguntas){
        this.nombre = nombre;
        this.preguntas = preguntas;
    }
    elegirRandom(){
        const GETRANDOM = Math.floor(Math.random() * this.preguntas.length);
        return this.preguntas[GETRANDOM];
    }
    eliminarPregunta(indexElemento){
        conjuntoSeleccionado.preguntas.splice(indexElemento,1);
        console.log(conjuntoSeleccionado.preguntas)
        conjuntoSeleccionado.crearDiv();
    }
    crearDiv(){
        let contador = 0
        contenedorDePreguntas.innerHTML = ""
        conjuntoSeleccionado.preguntas.forEach(element => {
            contador ++;
            const DIV = document.createElement("div");
            DIV.classList.add("divPreguntas");
            contenedorDePreguntas.appendChild(DIV);
            const P = document.createElement("p");
            P.innerText = contador + "-";
            P.innerText +=element;
            P.classList.add("nuevos");
            DIV.appendChild(P);
            const BOTONELIMINAR = document.createElement("button");
            DIV.appendChild(BOTONELIMINAR);
            BOTONELIMINAR.innerText="X";
            BOTONELIMINAR.classList.add("boton-eliminar");
            DIV.classList.add(contador)
            BOTONELIMINAR.onclick= function(){
                let preguntAEliminar = conjuntoSeleccionado.preguntas.indexOf(element);
                conjuntoSeleccionado.eliminarPregunta(preguntAEliminar);
                }
            });
                // const DIV = document.createElement("div");
                // DIV.classList.add("divPreguntas");
                // contenedorDePreguntas.appendChild(DIV);
                // const P = document.createElement("p");
                // P.innerText =this.preguntas.indexOf(contenidoPregunta)+1 + "-" + contenidoPregunta;
                // P.classList.add("nuevos");
                // DIV.appendChild(P);
                // const BOTONELIMINAR = document.createElement("button");
                // DIV.appendChild(BOTONELIMINAR);
                // BOTONELIMINAR.innerText="X";
                // BOTONELIMINAR.classList.add("boton-eliminar");
                // BOTONELIMINAR.onclick= function(){
                //     // console.log(conjuntoSeleccionado.preguntas.indexOf(contenidoPregunta))
                //     eliminarPregunta(contenidoPregunta)
    }
    MostrarPregunta(){
        CONTAINERPREGUNTA.innerText = this.elegirRandom();
    }
    agregarPregunta(nuevaPregunta){
        if (nuevaPregunta === "" || nuevaPregunta === " "){
        } else {
            this.preguntas.push(nuevaPregunta)
        }
    }
}
let conjuntoSeleccionado = new conjuntoPreguntas("",[]);
const PREGUNTASADMIN= new conjuntoPreguntas ("preguntasAdmin",["Cuales son los roles interpersonales","Nombrar dos ejemplos de roles decisionales","Cuales son los tipos de habilides","Cuales son los niveles gerenciales organizacionales","Nombrar a quienes se los denomina gerentes de nivel institucional","Nombrar las variantes q estudia el entorno o ambiente global","Nombrar las formas de internacionalizar a una organización","Habilidad q predomina en el nivel operativo :","Competencias del administrador","Proceso del administrador defini cada uno","Nombra q hacen los diferentes generentes de los niveles organizacionales","Como se evalua el desempeño de un administrador","Características de una organizacion","Diferencias de objetivos organizacionales y objetivos individuales","Quales son los paremetros del sistema nombralos y definilos","Que es homeostasis","Tipos de retrolimentacion","Cuantas propiedades del sistema hay definilas","Como se clasifican los sistemas segun su constitucion y segun su naturaleza","Clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica","Como se clasifica la org por los sectores de actividad nombrarlos y definirlos","El ambiente general o contexto mediato impacta en la org de manera directa?(V/F)","Cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno","Aspectos formales e informales q son","Cuales son los aspectos de la cultura","Variables q se analizan dentro del riesgo politico","Cuales son las medidas politicas","Que significa outsourcing",]);
botonUsar.onclick = function(){
    for(i=0;i<PREGUNTASADMIN.preguntas.length;i++){
        conjuntoSeleccionado.agregarPregunta(PREGUNTASADMIN.preguntas[i]);
    }
    conjuntoSeleccionado.crearDiv();
}
BOTON.onclick = function(){
    if (conjuntoSeleccionado.preguntas.length < 2 ){
        alert("agregar al menos 2 preguntas o utiliza un conjunto para empezar");
    }
        else {conjuntoSeleccionado.MostrarPregunta();
    }
    
}
const espacio = document.getElementById('blank-space');
const SUBMIT = document.getElementById('submit');
SUBMIT.onclick = function() {
    let newPregunta = espacio.value;
    conjuntoSeleccionado.agregarPregunta(newPregunta)
    conjuntoSeleccionado.crearDiv();
    espacio.value = "";
}
// BOTONELIMINAR.onclick= function(){
//     console.log(conjuntoSeleccionado.preguntas.indexOf(P.innerText))
//     // eliminarPregunta(this.)
// }





