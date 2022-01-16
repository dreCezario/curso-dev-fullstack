/*
let idade = prompt('Digite sua idade')

if (idade >= 18) {
    document.write('Ok, você é maior de idade')
}

else if (idade = 17) {
    document.write('Você está quase lá, tente novamente ano que vem')
}

else {
    document.write('Você não pode entrar aqui')

}
*/

let nome = prompt('Digite seu nome')

if (nome === 'André' || nome === 'Andre') {
    document.write(`Olá ${nome}, seja bem vindo de volta`)
}

else {
    document.write(`Você não deveria estar aqui, saia imediatamente`)
}