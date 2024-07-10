function elegirNumeroRandom(){
    const GETRANDOM = Math.floor(Math.random() * 20);
    return GETRANDOM;
}
fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        let primerPokemon = data.results[elegirNumeroRandom()]
        let segundoPokemon = data.results[elegirNumeroRandom()]
        return Promise.all([
            fetch(primerPokemon.url).then(response => response.json()),
            fetch(segundoPokemon.url).then(response => response.json())
        ])
        .then(([primerPokemonData, segundoPokemonData]) => {
            let primerPokemonAltura = primerPokemonData.height;
            let segundoPokemonAltura = segundoPokemonData.height;
    
            if (segundoPokemonAltura > primerPokemonAltura) {
                console.log(`La altura de ${segundoPokemonData.name} es de: ${segundoPokemonAltura} y es mayor a la altura de ${primerPokemonData.name}`);
            } else if(segundoPokemonAltura==primerPokemonAltura){
                console.log(` ${segundoPokemonData.name} y  ${primerPokemonData.name} miden lo mismo`)
            } else {
                console.log(`La altura de ${primerPokemonData.name} es de: ${primerPokemonAltura} y es mayor a la altura de ${segundoPokemonData.name}`);
            }
        })
    })