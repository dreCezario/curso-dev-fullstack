/*
        ARROW FUNCTIONS

        As funções seta nos permitem escrever uma sintaxe de uma função mais curta  
*/

/* 

const soma = (param1, param2) => {
    return param1 + param2
}

const resultado = soma(788, 4)

console.log(resultado)

*/

// RETORNO IMPLICITO

//não necessitada do return nem do scope

const soma = (param1, param2) => 
     param1 + param2

const resultado = soma(788, 4)

console.log(resultado)

// QUANDO HÁ APENAS UM PARAMETRO NÃO NECESSITA DE PARANTESES

const teste = param1 => param1

console.log(teste('ok'))


const button = document.querySelector('#button')

button.onclick = () => {
    console.log(this)
}