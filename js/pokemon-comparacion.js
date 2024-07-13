function elegirNumeroRandom(){
    const GETRANDOM = Math.floor(Math.random() * 20);
    return GETRANDOM;
}
let todosLosPokemons= [];
const contenedorImagenesPokemon = document.querySelector(".imagenes-pokemones");
const pComparacion = document.querySelector(".texto-api");
pComparacion.style.textAlign = "center ";
pComparacion.style.padding ="10px"
pComparacion.textContent ="aguarde unos segundos, la pagina esta recopilando los datos necesarios"
function getFetch(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        let primerPokemon = data.results[elegirNumeroRandom()];
        let segundoPokemon = data.results[elegirNumeroRandom()];
        todosLosPokemons = data.results
        //de esta forma realiza ambas solicitudes para los dos pokemons y espera a que se completen para seguir
        return Promise.all([
            fetch(primerPokemon.url).then(response => response.json()),
            fetch(segundoPokemon.url).then(response => response.json())
        ])
        .then(([primerPokemonData, segundoPokemonData]) => {
            //asigno todas las variables a los datos del objeto q obtuve en el fetch
            let primerPokemonAltura = primerPokemonData.height;
            let segundoPokemonAltura = segundoPokemonData.height;
            let imgPrimerPokemon = primerPokemonData.sprites.front_default;
            let imgSegundoPokemon = segundoPokemonData.sprites.front_default;
            //uso ls variables para plicarlas en el dom
            contenedorImagenesPokemon.innerHTML += `<img class= imagen-primer-pokemon src="${imgPrimerPokemon}" alt="">`
            contenedorImagenesPokemon.innerHTML += `<img class= imagen-primer-pokemon src="${imgSegundoPokemon}" alt="">`
            //comparo las alturas y muestro el resultado en el dom
            if (segundoPokemonAltura > primerPokemonAltura) {
                pComparacion.innerHTML = `<p>La altura de ${segundoPokemonData.name} es de: ${segundoPokemonAltura} y es mayor a la altura de ${primerPokemonData.name}</p>`
            } else if(segundoPokemonAltura==primerPokemonAltura){
                pComparacion.innerHTML = `<p> ${segundoPokemonData.name} y ${primerPokemonData.name} miden lo mismo</p>`
            } else {
                pComparacion.innerHTML = `<p>La altura de ${primerPokemonData.name} es de: ${primerPokemonAltura} y es mayor a la altura de ${segundoPokemonData.name}</p>`
            }
        })
    })
}
//utilizo timeout para simular una carga de datos
setTimeout(()=>{
    getFetch()
},2000);
