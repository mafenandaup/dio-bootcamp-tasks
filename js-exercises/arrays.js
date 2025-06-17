// Exercício 1: duplicar apenas os pares

let arrNumbers1 = [1, 28, 10, 4, 13, 7, 6]

function multiplyEvenNumbers(arr) {
    newArr = []
    for (let num of arr) {
        if (num % 2 == 0) {
            newArr.push(num * 2) // o num a qual vc está se refererindo é o próprio elemento do arrray, não o índice.
        } else {
            newArr.push(num)
        }
    }
    return newArr
}

console.log(multiplyEvenNumbers(arrNumbers1))

// Exercício 2: maiores que X

function biggerThanX(arr, x) {
    newArr = []
    for (let num of arr) {
        if (num > x) {
            newArr.push(num)
        }
    }
    return (`Estes são os números maior que ${x}: ${newArr}`)
}

console.log(biggerThanX(arrNumbers1, 10))

// Exercício 3: remover valores "falsy" (NaN, null, undefined...)

let falsyArr = [NaN, 1, 45, null, 80, null, 15, 90, NaN]

const filteredArray = falsyArr.filter(Boolean)

console.log(filteredArray);

// Exercício 4: ordenação alfabética e por tamanho de strings

const fruits = ["banana", "blueberry", "raspberry", "avocado", "pineapple", "watermelon"]

const fruitsFromAtoZ = fruits.sort();

function sortByWordLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByWordLength(fruitsFromAtoZ))

// exercício 5: transformando array em string

function stringArray(arr) {
    const lastElement = arr.pop();
    return `${arr.join(", ")} and ${lastElement}`;
}

console.log(stringArray(fruits))

// exercício 6: maior número em um array


function biggestInArray(arr) {

    maxNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    // Substituir todas as ocorrências do maior número por "MAIOR"
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxNum) {
            arr[i] = "MAIOR";
        }
    }

    return arr
}

console.log(biggestInArray(arrNumbers1))

// exercício 7: transformando um array em um objeto

const pessoa = [["nome", "maria"], ["idade", 36], ["profissão", "engenheira"], ["salário", 1200]]

function arrToObject(arr) {
    return Object.fromEntries(arr)
}
console.log(arrToObject(pessoa))

// exercício 8

// exercício 9

// exercício 10

// exercício 11

// exercício 12

// exercício 13

// exercício 14

// exercício 15

// exercício 16

// exercício 17
