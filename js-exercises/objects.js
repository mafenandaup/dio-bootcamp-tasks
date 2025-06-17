// Exercício 1 : classe forma

class Forma {
    constructor(comprimento, altura) {
        this.altura = altura
        this.comprimento = comprimento
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super(); // Não precisamos de comprimento ou altura para um círculo
        this.raio = raio;
    }

    calcularArea() {
        const area = Math.PI * this.raio ** 2
        return area
    }
}

class Retangulo extends Forma {
    constructor(comprimento, altura) {
        super(comprimento, altura)
    }

    calcularArea() {
        const area = this.comprimento * this.altura
        return area
    }
}

const meuCirculo = new Circulo(5);
console.log("Área do círculo:", meuCirculo.calcularArea());

const meuRetangulo = new Retangulo(10, 4);
console.log("Área do retângulo:", meuRetangulo.calcularArea());

// Exercício 2 : verificar se uma chave específica existe em um array de objetos

let pessoas = [
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


function doesAtributoExist(arr, atributo) {

    if (arr[0] && arr[0][atributo]) { // verifica se existe o atributo no primeiro elemento do array
        return true
    }
    return false
}

console.log(doesAtributoExist(pessoas, 'nome'))

// Exercício 3: ordenar pessoas por atributos distintos

let peopleSortage = pessoas.sort((a, b) => a.idade - b.idade)
console.log(peopleSortage)

let peopleSortname = pessoas.sort((a, b) => {
    if (a.nome < b.nome) {
        return -1;
    }
    if (a.nome > b.nome) {
        return 1;
    }
    return 0;
});

console.log(peopleSortname)

// Exercício 4: calcular média das idades no array de objetos

function avgAge(pessoas) {

    contador = 0;
    for (i = 0; i < pessoas.length; i++) {
        contador += pessoas[i].idade
    }
    const media = contador / pessoas.length
    return media
}

console.log(avgAge(pessoas))

// Exercício 5 : clonar um objeto de um array

let JerryObj = pessoas[1]
const CloneJerry = Object.assign({}, JerryObj)
console.log(CloneJerry)

// Exercício 6 : converter objeto em string JSON formatada

function objToJson(obj) {
    return JSON.stringify(obj)
}

console.log(objToJson(JerryObj))

// Exercício 7 : Classe pessoa (metodo calcular idade, apresentar)

class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome
        this.idade = idade
        this.altura = altura

    }

    apresentar() {
        return (`Meu nome é ${this.nome}, tenho ${this.idade} e tenho ${this.altura} de altura`)
    }

    anoNascimento() {
        const anoNasc = 2025 - this.idade
        return (`Nasci em ${anoNasc} .`)
    }
}

const velhinha = new Pessoa("Marlene", 84, 1.67)
console.log(velhinha.apresentar(), velhinha.anoNascimento())

// Exercício 8 : classe com validação ContaBancária (sem depósitos negativos)

class ContaBancaria {
    portador;
    saldoatual;
    constructor(portador, saldoatual) {
        this.portador = portador
        this.saldoatual = saldoatual
    }

    verifyDeposit(quantiaAdd) {
        try {
            if (quantiaAdd < 0) {
                console.log('A quantidade que tentou inserir é insuficiente.')
            } else {
                const total = this.saldoatual + quantiaAdd;
                console.log(total)
            }
        } catch (error) {
            console.error('erro ao processar a quantia adicionada', error.message)
        }
    }
}

const milionario = new ContaBancaria('Elon Musk', 1029003)
milionario.verifyDeposit(-19203)

// Exercício 9 : função que recebe obj e retorna todos os valores como array

function objAsArray(obj) {
    const arrayObj = Object.entries(obj)
    return arrayObj
}

// Object.values(obj); retorna os valores das chaves
// Object.keys(obj); retorna as chaves em si.

console.log(objAsArray(JerryObj))

// Exercício 10 : verificar igualdade de objetos

function isObjEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Verifica se os objetos possuem o mesmo número de chaves
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Verifica se cada chave e valor são iguais
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


console.log(isObjEqual(pessoas[1], pessoas[1]))

// Exercício 11 : mesclar arrays em um objeto

const valores = [23, 4, 6, 5]
const chaves = ['a', 'b', 'c', 'd'];

function mergeArrIntoObj(arr1, arr2) {
    const obj = {};
    for (let i = 0; i < chaves.length && i < valores.length; i++) {
        obj[chaves[i]] = valores[i];
    }
    // valores.concat(chaves) se quiser mesclar 2 arrays puramente
    return obj
}

console.log(mergeArrIntoObj(valores, chaves))