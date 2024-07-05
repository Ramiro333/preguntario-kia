function cargarPreguntasGuardadas(){
    conjuntoSeleccionado.preguntas = JSON.parse(localStorage.getItem("preguntasGuardadas"));
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
}
botonCargar.addEventListener("click",()=>{
    localStorage.preguntasGuardadas.length>2 ? cargarPreguntasGuardadas() : nuevoError("no hay preguntas guardadas",contenedorCargarGuardar, 3000);
})
botonGuardar.addEventListener("click",()=>{
    conjuntoSeleccionado.agregarALocarStorage();
    nuevoError("preguntas guardadas :)",contenedorCargarGuardar,3000);
})
botonGuardarConjuntos.addEventListener("click", ()=>{
    nuevoError("conjuntos guardados",contenedorGuardarConjuntos,1000);
    localStorage.setItem("conjuntosGuardados",JSON.stringify(todosLosConjuntos));
})
function cargarConjuntosGuardados(){
    let ConjuntosEnLocalStorage = JSON.parse(localStorage.getItem("conjuntosGuardados"));
    if(ConjuntosEnLocalStorage==[]){
    } else {
        for(i=0;i<ConjuntosEnLocalStorage.length;i++){
            crearNuevoObjeto(ConjuntosEnLocalStorage[i].nombre,ConjuntosEnLocalStorage[i].preguntas,ConjuntosEnLocalStorage[i].lugar);
        }
    }
}
cargarConjuntosGuardados()
botonEliminarConjuntosGuardados.addEventListener("click", ()=>{
    nuevoError("conjuntos borrados",contenedorGuardarConjuntos,1000);
    todosLosConjuntos=[];
    localStorage.setItem("conjuntosGuardados",JSON.stringify(todosLosConjuntos));
    if(conjuntosJuntos.children.length>0){
        while(conjuntosJuntos.children.length>0){
            conjuntosJuntos.children[0].remove();
        }
    }
})