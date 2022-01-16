/*

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'André'
console.log(nome)

//string concatenada 
let sobrenome = 'Cezário'
//console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)



//number 
let idade = 20
console.log(idade)
console.log(idade + 60)

//number float
let porcentagem = 10.6
console.log(porcentagem + '%')

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['Javascript', 'Phyton', 'PHP']
console.log(habilidades)

console.log(habilidades.length)
console.log(habilidades[0])

//object
let pessoa = {
    nome: 'André',
    sobrenome: 'Cezário',
    idade: 20,
    habilidades: ['Javascrpit', 'PHP', 'CSS', 'HTML']
}
console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa.habilidades[0])

//JSON (Javascrpit Objective Notation)

//undefined
let trabalho
console.log(trabalho)

//null
let cidade = null
console.log(cidade)