/*

ASYNC / AWAIT

*/

function transformarEmJson (response) {
    return response.json()
}

function exibirErro () {
    console.log('ops, deu erro')
}

function exibirNaTela (dados) {
    console.log(dados)
}

const configs = {
    method: 'GET',
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao () {
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos', configs)
        .then(transformarEmJson)
        .catch(exibirErro)

    console.log(dados)
}

