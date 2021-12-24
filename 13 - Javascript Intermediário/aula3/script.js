
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'

// SELETOR POR TAG
document.querySelector('a').innerText = '<b>teste</b>'

// SELECIONANDO MAIS DE UM ITEM POR TAG

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima / callback
    elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE UM ITEM POR CLASSE

let boxes = document.querySelectorAll('.box')



boxes.forEach(function(box, index){
    box.innerHTML = 'TRAVOSS ' + (index + 1)
})

