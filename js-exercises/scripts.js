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
    return (`A média do array é ` +resultado)
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