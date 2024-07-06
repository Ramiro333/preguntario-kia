function cargarPreguntasGuardadas(){
    conjuntoSeleccionado.preguntas = JSON.parse(localStorage.getItem("preguntasGuardadas"));
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
}
botonCargar.addEventListener("click",()=>{
    localStorage.preguntasGuardadas.length>2 ? cargarPreguntasGuardadas() : nuevoError("no hay preguntas guardadas",contenedorCargarGuardar, 3000);
})
botonGuardar.addEventListener("click",()=>{
    conjuntoSeleccionado.agregarALocarStorage();
    // nuevoError("preguntas guardadas :)",contenedorCargarGuardar,3000);
    Toastify({
        text: "preguntas guardadas :)",
        duration: 5000,
        close:true,
    }).showToast()
})
botonGuardarConjuntos.addEventListener("click", ()=>{
    // nuevoError("conjuntos guardados",contenedorGuardarConjuntos,1000);
    Toastify({
        text: "conjuntos guardados",
        duration: 2500,
        close:true,
    }).showToast()
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
    // nuevoError("conjuntos borrados",contenedorGuardarConjuntos,1000);
    Swal.fire({
        title: 'cuidado!',
        text: '¿seguro que quieres eliminar los conjuntos guardados?',
        icon: 'warning',
        confirmButtonText: 'seguro!'
    }).then(()=>{
        todosLosConjuntos=[];
        localStorage.setItem("conjuntosGuardados",JSON.stringify(todosLosConjuntos));
        Toastify({
            text: "conjuntos borrados",
            duration: 2500,
            close:true,
        }).showToast()
        if(conjuntosJuntos.children.length>0){
            while(conjuntosJuntos.children.length>0){
                conjuntosJuntos.children[0].remove();
            }
        }
    })
})