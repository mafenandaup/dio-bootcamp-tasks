//Usar map para transformar um array de números em strings com prefixo "Número: ".

const numeros = [23, 4, 56, 7, 2, 3, 9, 1]
const numeros2 = [3, 43, 6, 27, 2, 3, 9, 1]

const mapToStrings = numeros.map((numero) => (`Número: ${numero}`))
console.log(mapToStrings)

// Usar filter para retornar apenas números maiores que um valor específico.

const mapBiggerNums = numeros.filter((numero) => (numero > 23))
console.log(mapBiggerNums)

// Usar reduce para encontrar o produto de todos os números em um array.

// const produtoNums = 

// // Usar some para verificar se há algum número negativo em um array.

// const hasNegative =

// // Usar includes para verificar se um valor específico está presente em um array.

console.log(numeros.includes(43))

// // Criar uma função que receba dois arrays e retorne apenas os elementos presentes em ambos.

const bothArraysNums = (arr1, arr2) => {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    return newArr
}

console.log(bothArraysNums(numeros,numeros2))

// const bothArrays = 

// Usar concat para juntar dois arrays em um só.

// Usar sort para ordenar objetos dentro de um array com base em uma propriedade.

// Usar splice para remover elementos de um array e adicionar novos em sua posição.

// Criar uma função que percorra uma lista e imprima cada elemento formatado com sua posição no array.

const numsIndex = numeros.forEach((value, index) => { // primeiro valor, depois i, depois a lista
    console.log(value + " index: " + index)
})
