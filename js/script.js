const botonRandom = document.querySelector(".button-19");
const containerPreguntas = document.querySelector("#espacioPregunta");
const botonUsar = document.querySelector(".boton-usar");
const segundo = document.querySelector(".segundo");
const primer = document.querySelector(".contenedorDePreguntas");
const botonGuardar = document.querySelector(".boton-guardar");
const espacio = document.getElementById('blank-space');
const submit = document.getElementById('submit');
const botonEliminarTodo = document.querySelector(".boton-eliminar-todo");
const botonCrearConjunto = document.querySelector(".boton-crear-conjunto");
const contenedorNuevosConjuntos = document.querySelector(".contenedor-nuevos-conjuntos");
const inputNombreConjunto = document.querySelector("#blank-space-nombre-conjunto");
const botonAgregarNombre = document.querySelector(".boton-agregar-nombre");
const conjuntosJuntos = document.querySelector(".conjuntos-juntos");
const contenedorPreguntasNuevoConjunto = document.querySelector(".contenedor-preguntas-nuevo-conjunto");
const botonAgregarPreguntas = document.querySelector(".boton-agregar-preguntas");
const espacioErrorRepetido = document.querySelector(".espacio-error-repetido");
const botonCargar = document.querySelector(".boton-cargar");
const pNuevoError = document.createElement("p");
const errorCargar = document.createElement("p");
const contenedorCargarGuardar = document.querySelector(".cargar-guardar");
const crearYNombrarConjunto = document.querySelector(".crear-y-nombrar-conjunto");
const contenedorNombres = document.querySelector(".contenedor-nombres");
const preguntero = document.querySelector(".preguntero");
const errorPreguntaRepetida = document.createElement("p");
errorPreguntaRepetida.innerHTML="escribe una pregunta valida";
const mensajePreguntasGuardadas = document.createElement("p");
mensajePreguntasGuardadas.innerText="preguntas guardadas:)";
const botonGuardarConjuntos = document.querySelector(".boton-guardar-conjuntos");
const botonEliminarConjuntosGuardados = document.querySelector(".boton-eliminar-conjuntos-guardados");
let todosLosConjuntos = [];
class conjuntoPreguntas {
    constructor(nombre,preguntas,lugar){
        this.nombre = nombre;
        //si algun array devuelve null, rompe el codigo, valido que no suceda
        this.preguntas = Array.isArray(preguntas) ? preguntas : [];
        this.lugar = lugar;
    }
    elegirRandom(){
        const GETRANDOM = Math.floor(Math.random() * this.preguntas.length);
        return this.preguntas[GETRANDOM];
    }
    eliminarPregunta(indexElemento,DondeEliminar){
        this.preguntas.splice(indexElemento,1);
        this.crearDiv(DondeEliminar);
    }
    crearDiv(lugarAparicion){
        let contador = 0;
        lugarAparicion.innerHTML = "";
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
            const self = this;
            botonEliminarCadaPregunta.onclick= function(){
                let lugarEliminar = self.lugar;
                let preguntAEliminar = self.preguntas.indexOf(element);
                self.eliminarPregunta(preguntAEliminar,lugarEliminar);
                }
            });
    }
    MostrarPregunta(){
        containerPreguntas.innerText = this.elegirRandom();
    }
    agregarPregunta(nuevaPregunta){
        if (this.preguntasRepetidas(nuevaPregunta)){

        } else if(nuevaPregunta == "" || nuevaPregunta== " "){
            
            segundo.appendChild(errorPreguntaRepetida)
            setTimeout(()=> errorPreguntaRepetida.remove(),3000);
        }
        else {
            console.log(this)
            this.preguntas.push(nuevaPregunta);
            
        }
    }
    añadirMensajeError(preguntaRepetida,lugarNuevoError){
        pNuevoError.innerText ='"'+ preguntaRepetida+'"' + " ya esta usada";
        lugarNuevoError.parentNode.insertBefore(pNuevoError,lugarNuevoError);
        setTimeout(()=> pNuevoError.remove(),4000);
    }
    preguntasRepetidas(preguntaACorroborar){   
        for (let value of this.preguntas){
            if (value === preguntaACorroborar){
                this.añadirMensajeError(preguntaACorroborar,this.lugar);
                return true;
            } 
        }
        return false;
    }
    eliminarTodasLasPreguntas(){
        this.preguntas = [];
    }
    agregarALocarStorage(){
        localStorage.setItem("preguntasGuardadas",JSON.stringify(this.preguntas));
    }
}
let conjuntoSeleccionado = new conjuntoPreguntas("",[],primer);
function cargarPreguntasGuardadas(){
    conjuntoSeleccionado.preguntas = JSON.parse(localStorage.getItem("preguntasGuardadas"));
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    
}
// cargo preguntas de la ultima sesion usando un boton(descubri un bug muy grande q sin hacer esto rompe todos mis objetos, no se porque)
botonCargar.addEventListener("click",()=>{
    if(localStorage.preguntasGuardadas.length>2){
        cargarPreguntasGuardadas()
    } else {
        errorCargar.innerText="no hay preguntas guardadas";
        contenedorCargarGuardar.appendChild(errorCargar);
        setTimeout(()=> errorCargar.remove(),3000);
    }
})

const preguntasAdmin = new conjuntoPreguntas ("preguntasAdmin",["Cuales son los roles interpersonales","Nombrar dos ejemplos de roles decisionales","Cuales son los tipos de habilides","Cuales son los niveles gerenciales organizacionales","Nombrar a quienes se los denomina gerentes de nivel institucional","Nombrar las variantes q estudia el entorno o ambiente global","Nombrar las formas de internacionalizar a una organización","Habilidad q predomina en el nivel operativo :","Competencias del administrador","Proceso del administrador defini cada uno","Nombra q hacen los diferentes generentes de los niveles organizacionales","Como se evalua el desempeño de un administrador","Características de una organizacion","Diferencias de objetivos organizacionales y objetivos individuales","Quales son los paremetros del sistema nombralos y definilos","Que es homeostasis","Tipos de retrolimentacion","Cuantas propiedades del sistema hay definilas","Como se clasifican los sistemas segun su constitucion y segun su naturaleza","Clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica","Como se clasifica la org por los sectores de actividad nombrarlos y definirlos","El ambiente general o contexto mediato impacta en la org de manera directa?(V/F)","Cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno","Aspectos formales e informales q son","Cuales son los aspectos de la cultura","Variables q se analizan dentro del riesgo politico","Cuales son las medidas politicas","Que significa outsourcing"],primer);
//funcion solo a usar para meter preguntas a las seleccionadas
function agregarPreguntasAlConjunto(arrayAgregar){
    for(i=0;i<arrayAgregar.preguntas.length;i++){
        conjuntoSeleccionado.agregarPregunta(arrayAgregar.preguntas[i]);
    }
    conjuntoSeleccionado.crearDiv(primer);
}
botonUsar.onclick = function(){
    agregarPreguntasAlConjunto(preguntasAdmin);
    
}
const errorPocasPreguntas = document.createElement("p");
botonRandom.onclick = function(){
    //primero valido que haya suficientes preguntas
    if (conjuntoSeleccionado.preguntas.length < 2 ){
        errorPocasPreguntas.innerHTML="debes elegir al menos 2 preguntas o utilizar un conjunto";
        preguntero.appendChild(errorPocasPreguntas);
        setTimeout(()=> errorPocasPreguntas.remove(),6000);
    }
        else {conjuntoSeleccionado.MostrarPregunta();
    }
}
submit.onclick = function() {
    //uso un submit para agregar preguntas al array y luego lo vacio para poner la proxima pregunta
    let newPregunta = espacio.value;
    conjuntoSeleccionado.agregarPregunta(newPregunta);
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    espacio.value = "";
}
//guardo las preguntas en local storage
botonGuardar.addEventListener("click",()=>{
    conjuntoSeleccionado.agregarALocarStorage();
    contenedorCargarGuardar.appendChild(mensajePreguntasGuardadas);
    setTimeout(()=> mensajePreguntasGuardadas.remove(),3000);
})
botonEliminarTodo.addEventListener("click",()=>{
    primer.innerHTML="";
    conjuntoSeleccionado.eliminarTodasLasPreguntas();
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
})
function crearDivDeConjunto(nuevoConjunto){
    const contenedorParaInput = document.createElement("div");
    const inputPlaceNuevoConjunto = document.createElement("input");
    const botonAgregarPreguntaNuevoConjunto = document.createElement("button");
    const contenedorNuevo = document.createElement("div");
    botonAgregarPreguntaNuevoConjunto.innerText = "agregar";
    
    botonAgregarPreguntaNuevoConjunto.addEventListener("click",()=>{
        let nuevaPreguntaConjuntoNuevo =  inputPlaceNuevoConjunto.value;
        nuevoConjunto.agregarPregunta(nuevaPreguntaConjuntoNuevo);
        inputPlaceNuevoConjunto.value="";
        nuevoConjunto.crearDiv(contenedorNuevo);
        return nuevoConjunto;
    })
    const nombreDelConjuntoCreado = document.createElement("div");
    const textoNuevo = document.createElement("p");
    const botonNuevo = document.createElement("button");
    botonNuevo.innerText = "USAR";
    botonNuevo.classList.add("button-19");
    botonNuevo.addEventListener("click", ()=>{
        //uso la funcion para mostrarlas en el dom
        agregarPreguntasAlConjunto(nuevoConjunto);

    })
    textoNuevo.innerHTML=nuevoConjunto.nombre;
    nombreDelConjuntoCreado.appendChild(textoNuevo);
    nombreDelConjuntoCreado.classList.add("contenedor-conjunto");
    contenedorParaInput.appendChild(inputPlaceNuevoConjunto);
    contenedorParaInput.appendChild(botonAgregarPreguntaNuevoConjunto);
    nombreDelConjuntoCreado.appendChild(botonNuevo);
    nombreDelConjuntoCreado.appendChild(contenedorParaInput);
    conjuntosJuntos.appendChild(nombreDelConjuntoCreado);
    nombreDelConjuntoCreado.appendChild(contenedorNuevo);
    nuevoConjunto.lugar=contenedorNuevo;
    console.log(nuevoConjunto.lugar)
    nuevoConjunto.crearDiv(nuevoConjunto.lugar);
    
}
function crearNuevoConjunto(nuevoConjunto){
    crearDivDeConjunto(nuevoConjunto);
}
const mensajeErrorSinNombre = document.createElement("p");

function crearNuevoObjeto(nombreDelConjunto,preguntasDelArray,lugarDelArray) {
    let pasarConjunto = new conjuntoPreguntas(nombreDelConjunto,preguntasDelArray,lugarDelArray);
    todosLosConjuntos.push(pasarConjunto);
    console.log(todosLosConjuntos);
    crearNuevoConjunto(pasarConjunto);
}
botonCrearConjunto.addEventListener("click", ()=>{
    if(nombreDelConjunto===""||nombreDelConjunto===" "){
        //valido el nombre
        mensajeErrorSinNombre.innerText = "debes ponerle un nombre valido a tu conjunto";
        crearYNombrarConjunto.appendChild(mensajeErrorSinNombre);
        setTimeout(()=> mensajeErrorSinNombre.remove(),3000);
    } else {
        crearNuevoObjeto("",[],)

    }
})
const nombreCreado = document.createElement("p");
botonAgregarNombre.addEventListener("click", ()=>{
    nombreDelConjunto = inputNombreConjunto.value;
    if(nombreDelConjunto==""||nombreDelConjunto==" "){
        //valido el nombre
        nombreCreado.innerText ="nombre no valido";
        contenedorNombres.appendChild(nombreCreado);
        setTimeout(()=> nombreCreado.remove(),3000);
    } else {
        nombreDelConjunto = inputNombreConjunto.value;
        nombreCreado.innerText = "nombre elegido: "+ nombreDelConjunto;
        contenedorNombres.appendChild(nombreCreado);
    }    
})

botonGuardarConjuntos.addEventListener("click", ()=>{
    localStorage.setItem("conjuntosGuardados",JSON.stringify(todosLosConjuntos));
})
function cargarConjuntosGuardados(){
    let loscon = JSON.parse(localStorage.getItem("conjuntosGuardados"))
    console.log(loscon)
    
    for(i=0;i<loscon.length;i++){
        crearNuevoObjeto(loscon[i].nombre,loscon[i].preguntas,loscon[i].lugar);
    }
}
cargarConjuntosGuardados()
botonEliminarConjuntosGuardados.addEventListener("click", ()=>{
    todosLosConjuntos=[]
    localStorage.setItem("conjuntosGuardados",JSON.stringify(todosLosConjuntos));
})