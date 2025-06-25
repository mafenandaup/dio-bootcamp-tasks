const maxRecords = 151 // quantia max. de pokemons que podem aparecer na pag.
const limit = 10
let offset = 0;

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


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

function loadPokemonItems(offset, limit) { // estabelece um ponto de partida e um limite para o carregamento de pokemons
    pokeApi.getFilteredPokemons(offset, limit)
        .then((pokemons = []) => {// faz a chadmada do fetch no outro arquivo, auxiliando a organizar melhor o código. a partir daí ele já faz também a chamada da arrow function pra converter cada pokemon em LI.
            // junta todos os elementos da lista em uma string, nesse caso sem separador; por default, se coloca uma vírgula
            const newHtml = pokemons.map(convertPokemonToLi).join('');
            pokemonList.innerHTML += newHtml;

        })
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) { // enquanto a quantia de registros no display for menor que a máxima
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton); // remove o botão quando terminar
    } else {
        loadPokemonItems(offset, limit);
    }
});



//     .finally(function () {
//     console.log('Requisição concluída') // executa o bloco de código independente do sucesso ou fracasso da requisição.
// })