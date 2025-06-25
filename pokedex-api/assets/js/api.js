const pokeApi = {} // objeto representando a pokeApi

pokeApi.getFilteredPokemons = function (offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)  // FETCH retorna uma promise ("promessa" de um response conforme executa a busca, se der tudo certo)
        .then((response) => response.json()) //quando o recurso (url) for disponibilizado, o then é chamado.
        // THEN tem uma função com a respose como parâmetro. Quando ele terminar a req. o THEN será chamado e vai passar essa função dentro das chaves.
        .then((responseBody) => responseBody.results)// aqui já retorna o res convertido 
       .catch((error) => {
            console.error('Erro ao buscar Pokémon:', error);
            return []; // Retorna um array vazio em caso de erro para evitar falhas no resto do código.
        });
};
