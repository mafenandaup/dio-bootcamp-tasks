
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

const pokemonList = document.getElementById('pokemonList')

fetch(url)  // FETCH retorna uma promise ("promessa" de um response conforme executa a busca, se der tudo certo)
    .then((response) => response.json()) //quando o recurso (url) for disponibilizado, o then é chamado.

    // THEN tem uma função com a respose como parâmetro. Quando ele terminar a req. o THEN será chamado e vai passar essa função dentro das chaves.

    .then((responseBody) => responseBody.results)// aqui já retorna o res convertido 
    // //na vida real não é boa prática ter tantos callbacks, aqui é só pra ser mais dinâmico
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    .catch((error) => console.error(error))

    .finally(function () {
        console.log('Requisição concluída') // executa o bloco de código independente do sucesso ou fracasso da requisição.
    })

