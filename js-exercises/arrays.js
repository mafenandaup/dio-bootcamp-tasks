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

// exercício 8 : produto acumulado


let arrayNums2 = [23, 4, 6, 70, 39, 2, 345, 5]

function produtoAcumulado(arr) {
    newArr = [arr[0], arr[1]]
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i - 1])
    }
    return newArr
}

console.log(produtoAcumulado(arrayNums2))



// exercício 9: two sum
let numberss = [2, 7, 9, 23, 1, 3, 5];

function twoSum(arr, target) {
    // Ordenar o array, mas preservando os índices originais
    const sortedArray = arr.map((num, index) => ({ num, index }))
        .sort((a, b) => a.num - b.num);

    let i = 0;
    let j = sortedArray.length - 1;

    while (i < j) {
        const sum = sortedArray[i].num + sortedArray[j].num;
        if (sum === target) {
            // Retornar os índices originais + 1
            return [sortedArray[i].index + 1, sortedArray[j].index + 1];
        }

        if (sum > target) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    return [];
}

console.log(twoSum(numberss, 9));




// exercício 10: palíndromo

let palindromo = 'socorram me subi no onibus em marrocos';

function isPalyndrome(str) {

    let cleaned = str.replace(/\s+/g, '').toLowerCase();

    let start = 0
    let end = cleaned.length - 1

    while (start < end) {
        if (cleaned[start] != cleaned[end])
            return false
        start += 1
        end -= 1
    }
    return (`é um palíndromo!`)
}

console.log(isPalyndrome(palindromo))


// exercício 11: ordenar por valor absoluto

let numbers2 = [-3, -2, -55, 107, 9, 22, 1, 3, 5, -1000]
let absOrder = numbers2.sort((a, b) => Math.abs(a) - Math.abs(b))
console.log(absOrder)

// exercício 12

function evenNumbersToZero(arr) {

    newArr = []
    for (let num of arr) {
        if (num % 2 == 0) {
            num = 0;
        }
        newArr.push(num)
    }
    return newArr
}

console.log(evenNumbersToZero(numbers2))

// exercício 13: contar numeros ímpares

function countOddEvenNumbers(arr) {

    let countOdd = 0
    let countEven = 0

    for (let num of arr) {
        if (num % 2 == 0) {
            countEven += 1
        } else {
            countOdd += 1
        }

    }
    return (`Numeros pares: ${countEven} ; Números ímpares: ${countOdd}`)
}

console.log(countOddEvenNumbers(numbers2))

// exercício 14: retornar array só de numeros primos

function cousinNumbers(arr) {  //KKKKKKKKKKKKKKKKKKKK olha o nome da função

    newArr = []
    for (let num of arr) {
        if (num % num == 0 || num  % 1 == 0) {
            newArr.push(num)
        }
    }
    return newArr
}

console.log(cousinNumbers(numberss))
