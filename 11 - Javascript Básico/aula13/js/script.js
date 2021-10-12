let clientes = [
    {
        nome: 'André',
        idade: 20,
        linguagens: ['CSS', 'HTML', 'Javascript']
    },
    {
        nome: 'Zeca',
        idade: 27,
        linguagens: ['python', 'php', 'Javascript']
    },
    {
        nome: 'Zoro',
        idade: 65,
        linguagens: ['c', 'c++', 'c#']
    },
]


let htmlClientes = ''

for (let cliente of clientes) {
    
    let listaLinguagens = ''

    for (let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b><br>
            <ul>
               ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes