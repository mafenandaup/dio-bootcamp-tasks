
const pokemonList = document.getElementById('pokemonList')


function convertPokemonToLi(pokemon) {
    return `<li class="pokemon"><span class="number">#001</span>
                <span class="name">"${pokemon.name}"</span>
                <div class="detail">

                    <ol class="types">
                        <li class="type">poison</li>
                        <li class="type">grass</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name} sprite">
                </div>
            </li>`
}


pokeApi.getFilteredPokemons().then((pokemons = []) => {// faz a chadmada do fetch no outro arquivo, auxiliando a organizar melhor o código. a partir daí ele já faz também a chamada da arrow function pra converter cada pokemon em LI.


    const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

    const newHtml = newList.join('') // junta todos os elementos da lista em uma string, nesse caso sem separador; por default, se coloca uma vírgula
    pokemonList.innerHTML += newHtml
    console.log(newList)
})

    .finally(function () {
        console.log('Requisição concluída') // executa o bloco de código independente do sucesso ou fracasso da requisição.
    })

