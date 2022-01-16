
number = 0

let numberHTML = document.querySelector('#number')
let botaoMenos =  document.querySelector('#botaoMenos')
let botaoMais =  document.querySelector('#botaoMais')

botaoMais.onclick = function() {
    number++
    numberHTML.innerText = number
}
    


botaoMenos.onclick = function() {
    number--
    numberHTML.innerText = number
}
     
       


