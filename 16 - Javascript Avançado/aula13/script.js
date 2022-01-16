/*

FECTH

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
    method: 'GET'
}

const botaoCarregar = document.querySelector('#botaoCarregar')


botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos', configs)
            .then(transformarEmJson)
            .then(exibirNaTela)
            .catch(exibirErro)



