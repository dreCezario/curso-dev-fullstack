
number = 0

let numberHTML = document.querySelector('#number')
let botaoMenos =  document.querySelector('#botaoMenos')
let botaoMais =  document.querySelector('#botaoMais')


let intervaloMais = 

function(){
    botaoMenos.classList.remove('botaoMenos')
    botaoMais.classList.add('botaoMais')
    setInterval(function () {
        number++
        numberHTML.innerText = number
        }, 100);

}

let intervaloMenos = 

function(){
    botaoMais.classList.remove('botaoMais')
    botaoMenos.classList.add('botaoMenos')
    setInterval(function () {
        number--
        numberHTML.innerText = number
        }, 100);

}


botaoMais.addEventListener('click', intervaloMais)
botaoMais.addEventListener('click', clearInterval(intervaloMenos))

botaoMenos.addEventListener('click', intervaloMenos)
botaoMenos.addEventListener('click', clearInterval(intervaloMais))





