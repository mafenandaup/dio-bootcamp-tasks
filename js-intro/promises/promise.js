const fs = require('fs') //requisição do file System
const path = require('path') // atalhos do node

const filePathway = path.resolve(__dirname , 'tarefas.csv')

const fileReading = fs.promises.readFile(filePathway)

fileReading.then((arquivo) => {
    console.log(arquivo.toString('utf-8'))
    }).catch((error) => {
        console.log("xi...")
    })


    // versão simplificada de uma promise pra o formato procedural.. só faltou o try-catch

async function buscarArquivo() {
    const file = await fs.promises.readFile(filePathway) // transforma nossa promise em algo procedural.
    const fileText = file.toString('utf-8')
    console.log(fileText)
}

buscarArquivo();