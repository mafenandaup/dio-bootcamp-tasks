
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