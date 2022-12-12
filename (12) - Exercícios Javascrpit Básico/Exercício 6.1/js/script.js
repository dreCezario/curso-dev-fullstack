let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
]

let htmlAtores = ''

for (const ator of listaAtores) {
    htmlAtores += `
            <div class="box">
                <h2>${ator.nome}</h2>
                <h3>Interpreta o personagem ${ator.personagem}, no filme ${ator.filme}</h3>
            </div>
    `
  }

document.querySelector('#div').innerHTML = htmlAtores