const numeros2 = [3, 43, 6, 27, 2, 3, 9, 1]
const numeros = [23, -20, 56, 7, 2, 3, 9, 1]
const numbersAndStrings = [1, 24, 5, "melanie", 23, "john", "robert", "kelsey", 2]
const personagens = ['Bob esponja', 'Patrick', 'Sandy', 'Seu Sirigueijo', 'Plankton']
const pessoas = [
    {
        nome: "maria",
        idade: 26,
        salario: 1200
    },
    {
        nome: "Jean",
        idade: 36,
        salario: 6000
    },
    {
        nome: "tom",
        idade: 22,
        salario: 2200
    },
    {
        nome: "jerry",
        idade: 16,
        salario: 800
    },

]


// biggest num in array with math.max

const biggestNum = (arr) => {
    let maxNum = 0
    arr.forEach(element => {
        if (element > maxNum) {
            maxNum = element;
        }
    });
    return maxNum
}

console.log(biggestNum(numeros2))

// Criar uma arrow function que recebe uma lista de strings e retorna a quantidade de caracteres em cada string.

const stringsAndCharacters = personagens.map((personagem) => (`Personagem: ${personagem} . Caracteres: ${personagem.length} `))
console.log(stringsAndCharacters)

// Criar uma arrow function que retorne o quadrado de um número.

const squareNums = numeros.map((numero) => (numero ** numero))
console.log(squareNums)

// Criar uma arrow function que receba um array de números e retorne o menor valor.

const smallestNumindex = (arr) => {
    const minNum = Math.min(...arr);
    return (`Menor número: ${minNum}  Index: ${arr.indexOf(minNum)}`)
};

console.log(smallestNumindex(numeros2));

// Criar uma arrow function que filtre apenas strings em um array misto.

const filterStrings = numbersAndStrings.filter((elemento) => (typeof(elemento) == 'string'))
console.log(filterStrings)


// Criar uma arrow function que retorne o índice do maior número em um array.

const biggestNumIndex = (arr) => {
    const maxNum = Math.max(...arr);
    return arr.indexOf(maxNum);
};

console.log(biggestNumIndex(numeros2));

// Criar uma arrow function que verifique se um número é primo.

const filterCousins = numeros2.filter((numero) => {
    if (numero <= 1) return false; // Números <= 1 não são primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; // Se divisível, não é primo
    }
    return true; // É primo
});
console.log(filterCousins)

// Criar uma arrow function que calcule o fatorial de um número.

const mapFatoriais = numeros.map((numero) => {
    let acumulador = numero
    for (numero; numero > 0; numero--) {
        acumulador *= numero
        
    }
    return acumulador
})
console.log(mapFatoriais)

// Criar uma arrow function que receba um array de objetos e retorne apenas aqueles com uma determinada propriedade.

