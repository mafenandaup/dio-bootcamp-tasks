
function sayHello(nome) {
    console.log(`hello, ${nome}`)
}

module.exports = { sayHello, biggestNumber }



function biggestNumber(arr) {
 let maxNum = 0;
    for (let num of arr) {
        if (num > maxNum) {
            maxNum =num
        }
    }
    return (`O maior número entre os sorteados é ${maxNum}`)
}
