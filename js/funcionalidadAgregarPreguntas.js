botonRandom.onclick = function(){
    //primero valido que haya suficientes preguntas
    if (conjuntoSeleccionado.preguntas.length < 2 ){
        nuevoError("debes elegir al menos 2 preguntas o utilizar un conjunto",preguntero,6000);
        containerPreguntas.innerText = "";
    }
        else {
            conjuntoSeleccionado.MostrarPregunta();
    }
}
submit.onclick = function() {
    //uso un submit para agregar preguntas al array y luego lo vacio para poner la proxima pregunta
    let newPregunta = espacio.value;
    conjuntoSeleccionado.agregarPregunta(newPregunta);
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    espacio.value = "";
}
botonEliminarTodo.addEventListener("click",()=>{
    primer.innerHTML="";
    conjuntoSeleccionado.eliminarTodasLasPreguntas();
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
})