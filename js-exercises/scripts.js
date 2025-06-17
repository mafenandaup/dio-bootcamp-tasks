// exercício 1, média, max e menor valor em um array numérico

const arrNumbers = [2, 3, 48, 2, 0, 1, 93, 45]

console.log(arrNumbers.push(3))
console.log(arrNumbers)

function avgNumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const resultado = Math.floor(sum / arr.length);
    return (`A média do array é ` + resultado)
}

function maxNumArray(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return (`O maior número no array é ` + maxNum)
}

function minNumArray(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < maxNum) {
            maxNum = arr[i]
        }
    }
    return (`O menor número no array é ` + maxNum)
}


const maiornum = maxNumArray(arrNumbers)
const media = avgNumArray(arrNumbers)
const menornum = minNumArray(arrNumbers)
console.log(maiornum)
console.log(menornum)
console.log(media)

// Exerício 2: tabuada (também com array)

let arrTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tabuada(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${num} * ${arr[i]} = ${num * arr[i]}`)
    }
}

const resultadoTabuada = tabuada(arrTabuada, 3)

console.log(resultadoTabuada)

// Exercício 3: soma de números pares

function numPares() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return (`a soma dos números pares é ${sum}`)
}

const resultPares = numPares();
console.log(resultPares)

// Exercício 4; inversão de array

function inversionArray(arr, num) {
    newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

const inverted = inversionArray(arrNumbers)

console.log(inverted)

// Exercício 5: soma de quadrados

function sumSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return (`a soma dos quadrados dos elementos é ${Math.floor(sum)}`)
}

const somaquadrados = sumSquares(arrNumbers)
console.log(somaquadrados)
//Exercício 6: busca por indice

function indexSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return (`número encontrado! ${num}`)
        }
    }
    return -1
}

const busca = indexSearch(arrNumbers, 48)
console.log(busca)