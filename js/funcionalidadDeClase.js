//funcion que usaria cuando no tenia acceso a librerias, a quedado sin uso salvo una sola linea
// que la usa (agregarConjuntos.js/ linea 151)
function nuevoError(textoDelEeror,lugarDelError,timeout){
    nuevoP = document.createElement("p");
    nuevoP.innerText=textoDelEeror;
    nuevoP.style.textAlign  ="center"
    nodoDestino = lugarDelError;
    nodoDestino.appendChild(nuevoP);
    nuevoP.style.fontSize = "30px"
    if(timeout != undefined){
        setTimeout(()=> nuevoP.remove(),timeout);
    }
}
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
            P.classList.add("pregunta-agregada")
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
            this.añadirMensajeError(nuevaPregunta);
        } else if(nuevaPregunta == "" || nuevaPregunta== " "){
            Toastify({
                text: "la pregunta no puede estar vacia",
                duration: 2000,
                close:true,
            }).showToast()
        }
        else {
            this.preguntas.push(nuevaPregunta);
        }
    }
    añadirMensajeError(preguntaRepetida){
        Toastify({
            text: `${preguntaRepetida} ya esta usada`,
            duration: 2000,
            close:true,
        }).showToast()
    }
    preguntasRepetidas(preguntaACorroborar){
        for (let value of this.preguntas){
            if (value === preguntaACorroborar){
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