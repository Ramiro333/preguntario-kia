const botonRandom = document.querySelector(".button-19");
const containerPreguntas = document.querySelector("#espacioPregunta");
const botonUsar = document.querySelector(".boton-usar");
const segundo = document.querySelector(".segundo");
const primer = document.querySelector(".contenedorDePreguntas");
const botonGuardar = document.querySelector(".boton-guardar");
const espacio = document.getElementById('blank-space');
const submit = document.getElementById('submit');
const botonEliminarTodo = document.querySelector(".boton-eliminar-todo")
const botonCrearConjunto = document.querySelector(".boton-crear-conjunto");
const contenedorNuevosConjuntos = document.querySelector(".contenedor-nuevos-conjuntos");
const inputNombreConjunto = document.querySelector("#blank-space-nombre-conjunto");
const botonAgregarNombre = document.querySelector(".boton-agregar-nombre");
const conjuntosJuntos = document.querySelector(".conjuntos-juntos")
const contenedorPreguntasNuevoConjunto = document.querySelector(".contenedor-preguntas-nuevo-conjunto");
const contenedorNuevasPreguntas = document.querySelector(".contenedor-nuevas-preguntas");
const blankSpacePreguntaConjunto = document.querySelector("#blank-space-pregunta-conjunto");
const botonAgregarPreguntas = document.querySelector(".boton-agregar-preguntas");
const espacioErrorRepetido = document.querySelector(".espacio-error-repetido")
const pNuevoError = document.createElement("p");
class conjuntoPreguntas {
    constructor(nombre,preguntas,lugar){
        this.nombre = nombre;
        this.preguntas = preguntas;
        this.lugar = lugar;
    }
    elegirRandom(){
        const GETRANDOM = Math.floor(Math.random() * this.preguntas.length);
        return this.preguntas[GETRANDOM];
    }
    eliminarPregunta(indexElemento,DondeEliminar){
        this.preguntas.splice(indexElemento,1);
        conjuntoSeleccionado.crearDiv(DondeEliminar);
    }
    crearDiv(lugarAparicion){
        
        let contador = 0
        lugarAparicion.innerHTML = ""
        this.preguntas.forEach(element => {
            contador ++;
            const div = document.createElement("div");
            div.classList.add("divPreguntas");
            lugarAparicion.appendChild(div);
            const P = document.createElement("p");
            P.innerText = contador + "-";
            P.innerText +=element;
            P.classList.add("nuevos");
            div.appendChild(P);
            const botonEliminarCadaPregunta = document.createElement("button");
            div.appendChild(botonEliminarCadaPregunta);
            botonEliminarCadaPregunta.innerText="X";
            botonEliminarCadaPregunta.classList.add("boton-eliminar");
            // div.classList.add(contador);
            const self = this;
            botonEliminarCadaPregunta.onclick= function(){
                let lugareliminar = self.lugar;
                let preguntAEliminar = self.preguntas.indexOf(element);
                self.eliminarPregunta(preguntAEliminar,lugareliminar);
                }
            });
    }
    MostrarPregunta(){
        containerPreguntas.innerText = this.elegirRandom();
    }
    agregarPregunta(nuevaPregunta){
        if (this.preguntasRepetidas(nuevaPregunta) || nuevaPregunta == "" || nuevaPregunta== " "){
            this.añadirMensajeError(nuevaPregunta);
            
        }  else {
            this.preguntas.push(nuevaPregunta);
        }
    }
    añadirMensajeError(preguntaRepetida){
        pNuevoError.innerText = preguntaRepetida + " ya esta usada";
        espacioErrorRepetido.appendChild(pNuevoError);
    }
    preguntasRepetidas(preguntaACorroborar){
        for (let value of this.preguntas){
            if (value == preguntaACorroborar){
                return true;
            } 
        }
        return false;
    }
    agregarALocarStorage(){
        localStorage.setItem("preguntasGuardadas",JSON.stringify(conjuntoSeleccionado.preguntas));
    }
    eliminarTodasLasPreguntas(){
        this.preguntas = [];
    }

}
// cargo preguntas de la ultima sesion//
let conjuntoSeleccionado = new conjuntoPreguntas("",[],primer);
function cargarPreguntasGuardadas(){
    conjuntoSeleccionado.preguntas = JSON.parse(localStorage.getItem("preguntasGuardadas"));
    conjuntoSeleccionado.crearDiv(primer);
}
cargarPreguntasGuardadas();
const preguntasAdmin = new conjuntoPreguntas ("preguntasAdmin",["Cuales son los roles interpersonales","Nombrar dos ejemplos de roles decisionales","Cuales son los tipos de habilides","Cuales son los niveles gerenciales organizacionales","Nombrar a quienes se los denomina gerentes de nivel institucional","Nombrar las variantes q estudia el entorno o ambiente global","Nombrar las formas de internacionalizar a una organización","Habilidad q predomina en el nivel operativo :","Competencias del administrador","Proceso del administrador defini cada uno","Nombra q hacen los diferentes generentes de los niveles organizacionales","Como se evalua el desempeño de un administrador","Características de una organizacion","Diferencias de objetivos organizacionales y objetivos individuales","Quales son los paremetros del sistema nombralos y definilos","Que es homeostasis","Tipos de retrolimentacion","Cuantas propiedades del sistema hay definilas","Como se clasifican los sistemas segun su constitucion y segun su naturaleza","Clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica","Como se clasifica la org por los sectores de actividad nombrarlos y definirlos","El ambiente general o contexto mediato impacta en la org de manera directa?(V/F)","Cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno","Aspectos formales e informales q son","Cuales son los aspectos de la cultura","Variables q se analizan dentro del riesgo politico","Cuales son las medidas politicas","Que significa outsourcing",],primer);

function agregarPreguntasAlConjunto(arrayAgregar){
    for(i=0;i<arrayAgregar.preguntas.length;i++){
        conjuntoSeleccionado.agregarPregunta(arrayAgregar.preguntas[i])
    }
    
    conjuntoSeleccionado.crearDiv(primer);
    
}
botonUsar.onclick = function(){
    agregarPreguntasAlConjunto(preguntasAdmin);
}
botonRandom.onclick = function(){
    if (conjuntoSeleccionado.preguntas.length < 2 ){
        alert("agregar al menos 2 preguntas o utiliza un conjunto para empezar");
    }
        else {conjuntoSeleccionado.MostrarPregunta();
    }
}
submit.onclick = function() {
    let newPregunta = espacio.value;
    conjuntoSeleccionado.agregarPregunta(newPregunta)
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    espacio.value = "";
}
botonGuardar.addEventListener("click",()=>{
    conjuntoSeleccionado.agregarALocarStorage()
})
botonEliminarTodo.addEventListener("click",()=>{
    primer.innerHTML="";
    conjuntoSeleccionado.eliminarTodasLasPreguntas();
})
function crearDivDeConjunto(nuevoConjunto){
    const contenedorNuevo = document.createElement("div");
    const textoNuevo = document.createElement("p");
    const botonNuevo = document.createElement("button");
    botonNuevo.innerText = "USAR";
    botonNuevo.classList.add("button-19");
    botonNuevo.addEventListener("click", ()=>{
        agregarPreguntasAlConjunto(nuevoConjunto);
    })
    textoNuevo.innerHTML=nuevoConjunto.nombre;
    contenedorNuevo.appendChild(textoNuevo);
    contenedorNuevo.classList.add("contenedor-conjunto");
    contenedorNuevo.appendChild(botonNuevo);
    conjuntosJuntos.appendChild(contenedorNuevo);
    nuevoConjunto.lugar = contenedorNuevo;
    // nuevoConjunto.crearDiv(nuevoConjunto.lugar)

}

function crearNuevoConjunto(){
    let nombreDelConjunto = inputNombreConjunto.value;
    let preguntasDelConjunto = arrayNuevasPreguntas;
    let contadorDeLugar = document.createElement

    let nuevoConjunto = new conjuntoPreguntas(nombreDelConjunto,preguntasDelConjunto,contadorDeLugar);
    crearDivDeConjunto(nuevoConjunto);
}
let arrayNuevasPreguntas=[];
botonCrearConjunto.addEventListener("click", ()=>{
    crearNuevoConjunto()
    arrayNuevasPreguntas=[];
})
function añadirPreguntasNuevas(valuePreguntaNueva){
    arrayNuevasPreguntas.push(valuePreguntaNueva);
    
}
botonAgregarPreguntas.addEventListener("click", ()=>{
    let valuePreguntaNueva = blankSpacePreguntaConjunto.value;
    añadirPreguntasNuevas(valuePreguntaNueva)
    blankSpacePreguntaConjunto.value = "";
})
