
function cargarPreguntasGuardadas(){
    conjuntoSeleccionado.preguntas = JSON.parse(localStorage.getItem("preguntasGuardadas"));
    conjuntoSeleccionado.crearDiv(conjuntoSeleccionado.lugar);
    Toastify({
        text: "preguntas cargadas con exito :)",
        duration: 4000,
        close:true,
    }).showToast()
}
botonCargar.addEventListener("click",()=>{
    localStorage.preguntasGuardadas.length>2 ? cargarPreguntasGuardadas() : Toastify({
        text: "no hay preguntas guardas",
        duration: 2500,
        close:true,
    }).showToast();
})
botonGuardar.addEventListener("click",()=>{
    conjuntoSeleccionado.agregarALocarStorage();
    Toastify({
        text: "preguntas guardadas :)",
        duration: 5000,
        close:true,
    }).showToast()
})
if(localStorage.preguntasGuardadas.length>2){
    const preguntasEnLocalStorage = document.createElement("p");
    preguntasEnLocalStorage.innerText = JSON.parse(localStorage.preguntasGuardadas).length+" preguntas guardadas";
    contenedorCargarGuardar.append(preguntasEnLocalStorage)
} 
botonGuardarConjuntos.addEventListener("click", ()=>{
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