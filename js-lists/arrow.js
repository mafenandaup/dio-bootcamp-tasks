// Arrow functions e functions normais, qual a diferença?

function Pessoa() {
    this.nome = "Maria";

    this.falar = function () {
        console.log(this.nome); // "this" se refere a "Pessoa"
    };

    this.falarArrow = () => {
        console.log(this.nome); // "this" continua fixo como "Pessoa"
    };
}

const maria = new Pessoa();
maria.falar();        // Maria
maria.falarArrow();   // Maria

const falar = maria.falar;
falar();              // undefined (perdeu o contexto, pois não está mais dentro da função)

const falarArrow = maria.falarArrow;
falarArrow();         // Maria (mantém o contexto)


// também é uma forma mais simplificada de escrever funcções. esse também é um exemplo de funcção anonima, onde o nome não é
//citado explicitamente.

const hello = (nome, idade) => { // é preciso atribuí-las a uma const
    console.log(`hello, ${nome}`)
    console.log(`sua idade em anos; ${idade}`) // sintaxe mais curta

}
hello('maria', 19);

// let salutations = 'hellomaria';
// const saluteArr = salutations.split('');

// const saluteTypewriter = (arr, index = 0) => {
//     if (index < arr.length) {
//         console.log(arr[index]); 
//         setTimeout(() => {
//             saluteTypewriter(arr, index + 1); 
//         }, 400); 
//     }
// };

// saluteTypewriter(saluteArr);


// function closure
//  é uma função que "lembra" do ambiente onde foi criada, mesmo que seja executada fora dele.

function criarContador() {
    let contador = 0;

    return function incrementar() {
        contador++; // A função "incrementar" lembra do "contador".
        return contador;
    };
}

const contador1 = criarContador();
console.log(contador1()); // 1
console.log(contador1()); // 2


function sumNumbers(x) {
    return function sumBoth(y) {
        const sum = x + y;
        console.log(sum)
    }
}

sumNumbers(10)(20)


// como invocar funções ; INVOCAÇÃO DIRETA ^^

// INVOCAÇÃO COMO OBJETO (função é um objeto, e como um objeto ela tem métodos.)

const pessoa = {
    nome: "mafe",
    idade: 20,
    altura: 1.67
    
}

function gritar (prefixo) { // o this é setado explicitamente em apply
    console.log(prefixo, this.nome);
};

gritar.apply(pessoa, ["Olá"]); // "Olá mafe; use applay quando tiver seus elementos em forma de array"
gritar.call(pessoa, "Olá"); // use call quando quiser passar os atributos idretamente
