const pokeApi = {} // objeto representando a pokeApi

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getFilteredPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

       return fetch(url)  // FETCH retorna uma promise ("promessa" de um response conforme executa a busca, se der tudo certo)
        .then((response) => response.json()) //quando o recurso (url) for disponibilizado, o then é chamado.
        // THEN tem uma função com a respose como parâmetro. Quando ele terminar a req. o THEN será chamado e vai passar essa função dentro das chaves.
        .then((responseBody) => responseBody.results)// aqui já retorna o res convertido 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//mapeando cada pokemon e "buscando seus detalhes" na função.
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) =>  pokemonDetails)

};