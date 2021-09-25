const acoes = require('./acoes');
const servicos = require('./servicos');
const vacinas = require('./vacinas');
const perguntas = [
    {
        type: 'list',
        name: 'acao',
        message: 'O que deseja fazer com os cachorros?',
        choices: [
            acoes.LISTAR,
            acoes.DESCREVER,
            acoes.ADICIONAR,
            acoes.VACINAR,
            acoes.SERVICO,
            acoes.REMOVER,
            acoes.SAIR
        ]
    },
    {
        type: 'list',
        name: 'vacina',
        message: 'Qual vacina deseja aplicar?',
        choices: vacinas,
        when: respostas => respostas.acao == acoes.VACINAR
    },
    {
        type: 'number',
        name: 'idDoCachorroVacina',
        message: 'Qual o index do cachorro a vacinar?',
        when: respostas => respostas.acao == acoes.VACINAR
    }
    ,
    {
        type: 'list',
        name: 'servico',
        message: 'Qual serviço o cachorro realizou?',
        choices: servicos,
        when: respostas => respostas.acao == acoes.SERVICO
    },
    {
        type: 'number',
        name: 'idDoCachorroServico',
        message: 'Qual o index do cachorro que realizou o serviço?',
        when: respostas => respostas.acao == acoes.SERVICO
    },
    {
        type: 'input',
        name: 'idCachorroParaDescrever',
        message: 'Digite o index do cachorro a descrever:',
        filter: valor => Number(valor),
        when: respostas => respostas.acao == acoes.DESCREVER
    },
    {
        type: 'input',
        name: 'nomeDoCachorro',
        message: 'Digite o nome do cachorro:',
        when: respostas => respostas.acao == acoes.ADICIONAR,
        validate: valor => valor?true:'Digite um nome válido'
    },
    {
        type: 'list',
        name: 'sexoDoCachorro',
        message: 'Qual o sexo do cachorro:',
        choices: ['m','f'],
        when: respostas => respostas.acao == acoes.ADICIONAR,
        validate: valor => valor?true:'Digite um nome válido'
    },
    
    {
        type: 'list',
        name: 'cachorroCastrado',
        message: 'O cachorro é castrado?',
        choices: ['Sim','Não'],
        when: respostas => respostas.acao == acoes.ADICIONAR,
        validate: valor => valor?true:'Digite um nome válido'
    },
    {
        type: 'input',
        name: 'dataNascimentoDoCachorro',
        message: 'Digite a data de nascimento (AAAA-MM-DD):',
        when: respostas => respostas.acao == acoes.ADICIONAR,
    },
    {
        type: 'number',
        name: 'pesoDoCachorro',
        message: 'Digite o peso do cachorro:',
        when: respostas => respostas.acao == acoes.ADICIONAR,
        validate: peso => {
            if(!isNaN(peso) && peso > 0){
                return true;
            }
            return 'Digite um peso válido';
        }
    },
    {
        type: 'input',
        name: 'idCachorroParaRemover',
        message: 'Qual o id do cachorro que deseja remover?',
        when: respostas => respostas.acao == acoes.REMOVER
    },
    {
        type: 'confirm',
        name: 'confirmaRemocao',
        message: 'Tem certeza que deseja remover o cachorro?',
        default: false,
        when: respostas => respostas.acao == acoes.REMOVER
    }

];

module.exports = perguntas;