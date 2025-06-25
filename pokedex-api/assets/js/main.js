
const pokemonList = document.getElementById('pokemonList')


function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>`
}


pokeApi.getFilteredPokemons().then((pokemons = []) => {// faz a chadmada do fetch no outro arquivo, auxiliando a organizar melhor o código. a partir daí ele já faz também a chamada da arrow function pra converter cada pokemon em LI.
    // junta todos os elementos da lista em uma string, nesse caso sem separador; por default, se coloca uma vírgula
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml
})

    .finally(function () {
        console.log('Requisição concluída') // executa o bloco de código independente do sucesso ou fracasso da requisição.
    })

