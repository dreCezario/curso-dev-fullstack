let inputNota1 = prompt('Digite sua primeira nota')
let inputNota2 = prompt('Digite sua segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 6

let media = (nota1 + nota2) / 2

if (media === mediaMinima) {
    document.write('Ok, você passou mas tem bastante o que melhorar')
}

else if (media >= 6.1 && media <= 8) {
    document.write('Você ainda tem coisas a melhorar mas está muito bem, você passou')
}

else if (media >= 8.1 && media <= 9.5) {
    document.write('Excelente, tem poucas coisas a melhorar, está no caminho certo')
}

else if (media >= 9.6 && media === 10 ) {
    document.write('Você é o bichão memo ein doido')
}

else {
    document.write('Você não passou')
}
