function letsGo () {

let nome = prompt('Qual é o seu nome?')
let idade = prompt('Digite sua idade')

if (idade === '' || nome === '' ) {
    alert('Preencha os campos corretamente!')
}

else if (idade >= 18 && nome === 'Thomas Anderson') {
    document.querySelector('#titulo').innerHTML = `Olá ${nome}, você é maior de idade.` 
    document.querySelector('#titulo2').innerHTML = `Você é um personagem do filme matriz`
}

else if (idade >= 18 && nome === 'thomas anderson') {
    document.querySelector('#titulo').innerHTML = `Olá ${nome}, você é maior de idade.` 
    document.querySelector('#titulo2').innerHTML = `Você é um personagem do filme matriz`
}

else if (idade >= 18) {
    document.querySelector('#titulo').innerHTML = `Olá ${nome}, você é maior de idade.`
}

else if (idade < 18) {
    document.querySelector('#titulo').innerHTML = `Olá ${nome}, você é menor de idade`
}



}
