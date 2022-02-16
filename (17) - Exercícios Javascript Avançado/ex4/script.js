
const alunos = [
{
nome: 'Maria',
sobrenome: 'da Silva',
nota: 10,
},

{
nome: 'José',
sobrenome: 'Moreira',
nota: 4,
},

{
nome: 'Paulo',
sobrenome: 'Henrique',
nota: 7,
},

{
nome: 'Sara',
sobrenome: 'Souza',
nota: 5,
},

{
nome: 'Clara',
sobrenome: 'Barbosa',
nota: 9,
},

{
nome: 'Rodrigo',
sobrenome: 'Barros',
nota: 4,
},

{
nome: 'Renato',
sobrenome: 'Barros',
nota: 7,
},

{
nome: 'Andrea',
sobrenome: 'Batista',
nota: 6,
},

{
nome: 'Carla',
sobrenome: 'Campos',
nota: 3,
},

]

const formulario = document.querySelector('#formulario')
const listaAlunos = document.querySelector('#listaAlunos')
const mensagem = document.querySelector('#mensagem')
const input = document.querySelector('#input')

formulario.addEventListener('submit', executarFuncao)



function executarFuncao (e) {
    e.preventDefault()
    const nota = document.forms[0].elements[0].value

    filtrarAlunos(nota)
}

function filtrarAlunos (nota) {
    htmlAlunos = alunos.reduce((acc, curr) => {
        if(curr.nota == nota){
            acc += `
            <li> 
            ${curr.nome} ${curr.sobrenome} | Nota: ${curr.nota}
            </li>
            `
        }
    
        return acc
    }, '')

    if(htmlAlunos){
        listaAlunos.innerHTML = htmlAlunos
        mensagem.innerHTML = ''
    }
    else {
        listaAlunos.innerHTML = ''
        mensagem.innerHTML = 'Nenhum aluno tirou essa nota.'
    }


    document.forms[0].elements[0].value = ''
}
