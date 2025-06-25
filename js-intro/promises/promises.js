

const numRandom = new Promise((resolve, reject) => {
    setTimeout(() => { // dá um intervalo de tempo até executar a função.
        const num = parseInt(Math.random() * 100) // resolve se tudo der certo, reject se der errado. premissa beeem parecida com o try/catch/finally
        resolve(num)
    }, 1000);
})

console.log("Carregando...")

numRandom //instancia a função
    .then((value) => { // quando for executada loga o valor
        console.log(value)
    })

    .catch((error) => {
        console.log(error) // tratamento de erro
    })
    .finally(() => {
        console.log("finalizou!") // executa independente 
    })

const typeWriter = new Promise((resolv, reject) => {
    
})