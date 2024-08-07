function agregarPreguntasAlConjunto(arrayAgregar){
    for(i=0;i<arrayAgregar.preguntas.length;i++){
        conjuntoSeleccionado.agregarPregunta(arrayAgregar.preguntas[i]);
    }
    conjuntoSeleccionado.crearDiv(primer);
}
function crearBotonEliminarPreguntasDelConjuntoNuevo(){
    const botonEliminarTodasLasPreguntasDelConjunto = document.createElement("button");
    botonEliminarTodasLasPreguntasDelConjunto.addEventListener("click",()=>{
        this.eliminarTodasLasPreguntas()
    })
    contenedorNuevo.appendChild(botonEliminarTodasLasPreguntasDelConjunto)
}
function crearNuevoConjunto(nuevoConjunto){
    const contenedorParaInput = document.createElement("div");
    const inputPlaceNuevoConjunto = document.createElement("input");
    inputPlaceNuevoConjunto.classList.add("input")
    const botonAgregarPreguntaNuevoConjunto = document.createElement("button");
    const contenedorNuevo = document.createElement("div");
    botonAgregarPreguntaNuevoConjunto.innerText = "agregar";
    botonAgregarPreguntaNuevoConjunto.classList.add("button-18")
    botonAgregarPreguntaNuevoConjunto.addEventListener("click",()=>{
        let nuevaPreguntaConjuntoNuevo =  inputPlaceNuevoConjunto.value;
        nuevoConjunto.agregarPregunta(nuevaPreguntaConjuntoNuevo);
        inputPlaceNuevoConjunto.value="";
        nuevoConjunto.crearDiv(contenedorNuevo);
        return nuevoConjunto;
    })
    const nombreDelConjuntoCreado = document.createElement("div");
    const textoNuevo = document.createElement("p");
    textoNuevo.classList.add("titulo-conjunto")
    const botonNuevo = document.createElement("button");
    botonNuevo.innerText = "USAR";
    botonNuevo.classList.add("button-19");
    botonNuevo.addEventListener("click", ()=>{
        //uso la funcion para mostrarlas en el dom
        agregarPreguntasAlConjunto(nuevoConjunto);
    })
    //creo el boton para eliminar todas las preguntas del conjunto
    const botonEliminarTodasLasPreguntasDelConjunto = document.createElement("button");
    botonEliminarTodasLasPreguntasDelConjunto.classList.add("boton-eliminar-todas-preguntas-conjunto")
    botonEliminarTodasLasPreguntasDelConjunto.innerText = "eliminar todas las preguntas"
    botonEliminarTodasLasPreguntasDelConjunto.addEventListener("click",()=>{
        Swal.fire({
            title: 'seguro?',
            text: `seguro que quieres eliminar todas las preguntas de ${nuevoConjunto.nombre}?`,
            icon: 'question',
            confirmButtonText: 'si!'
        }).then(()=>{
            nuevoConjunto.eliminarTodasLasPreguntas()
            nuevoConjunto.crearDiv(nuevoConjunto.lugar)  
        })
    })
    //boton para eliminar el conjunto creado entero 
    const botonEliminarConjuntoActual = document.createElement("button");
    botonEliminarConjuntoActual.innerText = "eliminar el conjunto";
    botonEliminarConjuntoActual.classList.add("eliminar-conjunto")
    botonEliminarConjuntoActual.addEventListener("click",()=>{
        Swal.fire({
            title: 'seguro?',
            text: `seguro que quieres eliminar todas las preguntas de ${nuevoConjunto.nombre}?`,
            icon: 'question',
            confirmButtonText: 'si!'
        }).then(()=>{
        let indexConjunto = todosLosConjuntos.indexOf(nuevoConjunto.nombre);
        todosLosConjuntos.splice(indexConjunto,1);
        nombreDelConjuntoCreado.remove()
        })
    })
    nombreDelConjuntoCreado.appendChild(botonEliminarTodasLasPreguntasDelConjunto);
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
    nuevoConjunto.crearDiv(nuevoConjunto.lugar);
    nombreDelConjuntoCreado.appendChild(botonEliminarTodasLasPreguntasDelConjunto);
    nombreDelConjuntoCreado.appendChild(botonEliminarConjuntoActual)
}

function crearNuevoObjeto(nombreDelConjunto,preguntasDelArray,lugarDelArray) {
    let pasarConjunto = new conjuntoPreguntas(nombreDelConjunto,preguntasDelArray,lugarDelArray);
    todosLosConjuntos.push(pasarConjunto);
    crearNuevoConjunto(pasarConjunto);

}
// creo preguntas admin para que siempre se cargue
botonUsarUsarPreguntasAdmin = document.querySelector(".boton-usar-preguntas-admin");
botonUsarUsarPreguntasAdmin.addEventListener("click",agregarConjuntoPreguntasAmin)
function agregarConjuntoPreguntasAmin(){
    if(validarNombreRepetido("preguntasAdmin")){
        crearNuevoObjeto("preguntasAdmin",["Cuales son los roles interpersonales","Nombrar dos ejemplos de roles decisionales","Cuales son los tipos de habilides","Cuales son los niveles gerenciales organizacionales","Nombrar a quienes se los denomina gerentes de nivel institucional","Nombrar las variantes q estudia el entorno o ambiente global","Nombrar las formas de internacionalizar a una organización","Habilidad q predomina en el nivel operativo :","Competencias del administrador","Proceso del administrador defini cada uno","Nombra q hacen los diferentes generentes de los niveles organizacionales","Como se evalua el desempeño de un administrador","Características de una organizacion","Diferencias de objetivos organizacionales y objetivos individuales","Quales son los paremetros del sistema nombralos y definilos","Que es homeostasis","Tipos de retrolimentacion","Cuantas propiedades del sistema hay definilas","Como se clasifican los sistemas segun su constitucion y segun su naturaleza","Clasifica la org segun su finalidad, tamaño, regimen juridico, actividad economica","Como se clasifica la org por los sectores de actividad nombrarlos y definirlos","El ambiente general o contexto mediato impacta en la org de manera directa?(V/F)","Cuales son las variables q componen el entorno mediato o contexto general, ambiente de tarea y el ambiente interno","Aspectos formales e informales q son","Cuales son los aspectos de la cultura","Variables q se analizan dentro del riesgo politico","Cuales son las medidas politicas","Que significa outsourcing"],primer)
    } else {
        //contengo que no se agreguen infinitos mensajes
        if (contenedorBotonUsarPreguntasAdmin.children.length > 1) {
            contenedorBotonUsarPreguntasAdmin.children[1].remove();
        }
        Toastify({
            text: "preguntas admin ya esta siendo usado",
            duration: 4000,
            close:true,
        }).showToast()
    }
}
function validarNombreRepetido(nombreAValidar){
    //recorro los nombres de todos los conjuntos para validar qe no se repitan
    for(i=0;i<todosLosConjuntos.length;i++){
        if(nombreAValidar == todosLosConjuntos[i].nombre){
            return false
        }
    }
    return true 
    
}
botonCrearConjunto.addEventListener("click", ()=>{
    if(nombreDelConjunto===""||nombreDelConjunto===" "){
        //valido el nombre
        Toastify({
            text: "debes ponerle un nombre valido a tu conjunto",
            duration: 3000,
            close:true,
        }).showToast()

    } else if(validarNombreRepetido(nombreDelConjunto)) {
        crearNuevoObjeto(nombreDelConjunto,[],)
    } else{
        Toastify({
            text:`ya existe un conjunto llamado ${nombreDelConjunto}`,
            duration: 3000,
            close:true,
        }).showToast()

    }
})
const nombreCreado = document.createElement("p");
let nombreDelConjunto = ""

botonAgregarNombre.addEventListener("click", ()=>{
    nombreDelConjunto = inputNombreConjunto.value;
    if(nombreDelConjunto==""||nombreDelConjunto==" "){
        //valido el nombre
        Toastify({
            text:"nombre no valido",
            duration: 3000,
            close:true,
        }).showToast()

    }else {
        contenedorNombres.lastChild.remove();
        mensajeDelNombreDelConjunto = "nombre elegido: "+ inputNombreConjunto.value;

        nuevoError(mensajeDelNombreDelConjunto,contenedorNombres,)
    }
    inputNombreConjunto.value = ""
})
