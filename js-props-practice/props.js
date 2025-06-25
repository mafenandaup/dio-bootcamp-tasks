const pessoa = {
    genero: 'masc' // default caso o objeto proto não tenha esse atributo
}

const fefis = {
    nome: "maria fernanda",
    apelido: "mafê",
     genero: 'fem',
__proto__: pessoa // não usa mais!! usa mais o .prototype
}

Object.create(pessoa) // como se você estivesse instanciando um novo objeto

console.log(fefis)

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

console.log(new Pessoa('mafe', 20))

Pessoa.prototype.falar = function () {
    console.log(`oi, ${this.nome}`)
}

const jonas = {}
    
Pessoa.call(jonas, 'jonas', 40)
console.log(jonas)
    
String.prototype.toPlang = function () {
    return `papapapa ${this}`
}

console.log('teste'.toPlang())