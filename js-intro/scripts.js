
const nome = 'Superhomem'
const experience = 30200
let level;

if (experience < 1000) {
    level = 'ferro'
} else if (2000 > experience > 1001) {
    level = 'bronze'
} else if (5000 > experience > 2001) {
    level = 'prata'
} else if (7000 > experience > 5001) {
    level = 'ouro'
} else if (8000 > experience > 7001) {
    level = 'platina'
} else if (9000 > experience > 8001) {
    level = 'ascendente'
} else if (10000 > experience > 9001) {
    level = 'imortal'
} else if (experience >= 10001) {
    level = 'radiante'
}

console.log("O herói " + nome + " está no nível" + level)


// Desafio: gasto médio em uma viagem

const combustivelPreco = 5.80;
const kmPorLitros = 1;
const distanciaEmKM = 1580
const litrosConsumidos = distanciaEmKM / kmPorLitros
const gastoMedio = litrosConsumidos * combustivelPreco
console.log("O gasto médio da viagem será " + Math.floor(gastoMedio) + " reais por KM.")


// Desafio : cálculo IMC

const peso = 80
let altura = 1.98

// switch case não é adequado em esse tipo de situação, já que é baseado em instâncias booleanas. If else funciona com instruções condicionais.

function calculaImc(peso, altura) {
    const imcAdultos = peso / Math.pow(altura, 2)
    console.log(Math.floor(imcAdultos))
    if (imcAdultos < 18.5) {
        console.log('Abaixo do peso.');
    } else if (imcAdultos >= 18.5 && imcAdultos <= 25) {
        console.log('Peso normal.');
    } else if (imcAdultos > 25 && imcAdultos <= 30) {
        console.log('Acima do peso.');
    } else if (imcAdultos > 30 && imcAdultos <= 40) {
        console.log('Obeso.');
    } else if (imcAdultos > 40) {
        console.log('Obesidade grave.');
    } else {
        console.log('Informações inválidas.');
    }
}

console.log((calculaImc(60, 1.60)))

// Entendendo objetos e como funcionam


const pessoas = [

    {
        nome: "Maria Fernanda",
        idade: 20,
        profissao: "Desempregada"
    },
    {
        nome: "Jonas",
        idade: 22,
        profissao: "Técnico Enfermagem"
    },
    {
        nome: "Alicia",
        idade: 59,
        profissao: "Farmacêutica"
    },
    {
        nome: "Igor",
        idade: 29,
        profissao: "Professor de física"
    },
]
pessoas[0].altura = 1.69 //propriedades de objetos não sofrem hoisting
console.log(pessoas)

const produto = {
    nome: "Iphone 3",
    tipo: "Eletrônicos",
    valor: 1500.99,

    descrever: function () {
        console.log(`Este produto é um ${this.nome} , do tipo ${this.tipo}. atualmente custando ${this.valor}`)
    }
}

console.log(produto)
produto.descrever(); // já loga a função dentro do produto.

// para acessar um atributo:

const atributo = 'nome';
console.log(pessoas[2][atributo])


// Como criar classes

class Pessoa {

    nomezin;
    idade;
    profissao;

    constructor(nomezin, idade, profissao) {
        this.nomezin = nomezin;
        this.idade = idade;
        this.profissao = profissao;
    }
    describe() { // não precisa declarar o "function" dentro de um objeto
        console.log(`Meu nome é ${this.nomezin}, tenho ${this.idade} anos e sou ${this.profissao}`)
    }
}

const mafefis = new Pessoa("Maria Fernanda", 20, "desempregada");
console.log(mafefis)
mafefis.describe();

class Carro {
    marca;
    cor;
    gastoMédioporKm;

    constructor(marca, cor, gastoMédioporKm) {
        this.marca = marca
        this.cor = cor;
        this.gastoMédioporKm = gastoMédioporKm
    }

    gastoPorPercurso(distancia, combustivelPreco) {
        return Math.ceil(distancia * this.gastoMédioporKm * combustivelPreco)

    }
}

const uno = new Carro('Fiat', 'Azul', 2 / 12)
console.log(uno)
console.log(uno.gastoPorPercurso(70, 5))

class Paciente {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura) {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            console.log('Abaixo do peso.');
        } else if (imc >= 18.5 && imc <= 25) {
            console.log('Peso normal.');
        } else if (imc > 25 && imc <= 30) {
            console.log('Acima do peso.');
        } else if (imc > 30 && imc <= 40) {
            console.log('Obeso.');
        } else if (imc > 40) {
            console.log('Obesidade grave.');
        } else {
            console.log('Informações inválidas.');
        }
    }
}

const josi = new Paciente("Josi", 49, 1.70)
console.log(josi)
josi.classificarImc();