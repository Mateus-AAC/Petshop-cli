const cachorros = require('./database/cachorros.json')
const fs = require('fs')
const { removeListener } = require('process')
const servicos = require('./settings/servicos')

module.exports = {
    //listar
    listar() {
        console.table(cachorros)
    },
    
    //descrever
    descrever(i){
        if (i >= cachorros.length){
            console.error('Animal Não Cadastrado')
            return
        }

        let c = cachorros[i]
        console.log(`nome: ${c.nome}`)
        console.log(`sexo: ${c.sexo}`)
        console.log(`castrado: ${c.castrado == true ? 'sim': 'nao'}`)
        console.log(`Data de Nascimento: ${c.dataDeNascimento}`)
        console.log(`peso: ${c.peso}kg`)
        console.log("vacinas:")
        console.table(c.vacinas)
        console.log("servicos:")
        console.table(c.servicos)
    },

    //adicionar
    adicionar($nome, $sexo, $castrado, $dataDeNascimento, $peso){
        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas: [],
            servicos: []
        }

        cachorros.push(dog)

        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))
    },

    //vacinar
    vacinar(pos, $vacina){
        if (pos >= cachorros.length){
            console.error('Animal Não Cadastrado')
            return
        }

        let vacina = {
            nome: $vacina
        }

        cachorros[pos].vacinas.push(vacina)
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))
    },

    //serviços
    atribuirServico(pos, $servico){
        if (pos >= cachorros.length){
            console.error('Animal Não Cadastrado')
            return
        }

        let servicos = {
            servico: $servico
        }

        cachorros[pos].servicos.push(servicos)
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))
    },

    //remover
    remover(pos){
        if (pos >= cachorros.length){
            console.error('Animal Inexistente')
            return
        }

        delete cachorros[pos]
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))
        console.log('Animal Deletado Com Sucesso')
    }

}

