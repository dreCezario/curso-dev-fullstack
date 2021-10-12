let nome = prompt('Qual é o seu nome?')
let idade = prompt('Digite sua idade')

if (idade >= 18) {
    document.write(`Olá ${nome}, você é maior de idade`)
}

else if (idade < 18) {
    document.write(`Olá ${nome}, você é menor de idade`)
}