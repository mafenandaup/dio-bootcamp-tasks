
const nome = 'Superhomem'
let experience = 30200
let level;

if (experience < 1000) {
    level = 'ferro'
} else if (2000 > experience > 1001 ) {
    level = 'bronze'
} else if (5000 > experience > 2001 ) {
    level = 'prata'
} else if (7000 > experience > 5001 ) {
    level = 'ouro'
} else if (8000 > experience > 7001 ) {
    level = 'platina'
} else if (9000 > experience > 8001 ) {
    level = 'ascendente'
} else if (10000 > experience > 9001 ) {
    level = 'imortal'
} else if ( experience >= 10001 ) {
    level = 'radiante'
}

console.log("O herói " +nome+ " está no nível" +level)

