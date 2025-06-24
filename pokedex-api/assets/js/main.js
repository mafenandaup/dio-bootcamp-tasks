
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then(function (response) { // FETCH retorna uma promise ("promessa" de um response conforme executa a busca, se der tudo certo)
    //quando o recurso (url) for disponibilizado, o then é chamado.

    response.
        json()
        .then(function (responseBody) { // THEN tem uma função com a respose como parâmetro. Quando ele terminar a req. o THEN será chamado e vai passar essa função dentro das chaves.
        console.log(responseBody)// aqui já retorna o res convertido
    }) //na vida real não é boa prática ter tantos callbacks, aqui é só pra ser mais dinâmico
})
    .catch(function (error) {
        console.log(error) // tratamento de erros
    })
    .finally(function () {
        console.log('Requisição concluída') // executa o bloco de código independente do sucesso ou fracasso da requisição.
    })