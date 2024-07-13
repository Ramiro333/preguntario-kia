let contador = 0
function cambiarText(){
    //creo el intervalo y lo pongo en una variable para resetearlo
    intervalo = setInterval(() => {
    contador++;
    conjuntoSeleccionado.MostrarPregunta();
    if (contador < 8) {
        containerPreguntas.style.color = "white";
    } else {
        containerPreguntas.style.color = "red";
    }
    if(contador===8){
        clearInterval(intervalo);
        contador=0
    }
}, 100)
}
botonRandom.addEventListener("click",()=>{
        //primero valido que haya suficientes preguntas
        if (conjuntoSeleccionado.preguntas.length < 2 ){
            Swal.fire({
                title: 'No tienes preguntas',
                text: 'debes elegir al menos 2 preguntas o utilizar un conjunto',
                icon: 'warning',
                confirmButtonText: 'lo entiendo'
            }).then(()=>{
                containerPreguntas.innerText = "";
            })
        } else {
            cambiarText()
        }
})
submit.onclick = function() {
    //uso un submit para agregar preguntas al array y luego lo vacio para poner la proxima pregunta
    let newPregunta = espacio.value;
    conjuntoSeleccionado.agregarPregunta(newPregunta);
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    espacio.value = "";
}
botonEliminarTodo.addEventListener("click",()=>{
    Swal.fire({
        title: 'seguro?',
        text: 'seguro que quieres eliminar toddas las preguntas?',
        icon: 'question',
        confirmButtonText: 'si!'
    }).then(()=>{
        primer.innerHTML="";
        conjuntoSeleccionado.eliminarTodasLasPreguntas();
        conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    })
})
