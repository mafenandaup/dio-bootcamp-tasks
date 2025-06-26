const numbers = [23, 24, 6, 72, 6, 78, 9, 10, 1]

numbers.forEach((value, index)=> { // primeiro valor, depois i, depois a lista
    console.log(value + " index: " +index)
})

//filter

const filterEvenNumbers = numbers.filter((value) => (value%2 == 0))

console.log(filterEvenNumbers)

const listaNumerosIndex = numbers.map((value, index) => { // ao contrário do filter, ele TRANSFORMA os números, não os filtra.
     console.log(value + " index: " +index)
})