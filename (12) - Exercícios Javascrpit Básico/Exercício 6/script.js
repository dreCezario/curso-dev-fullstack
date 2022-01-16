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

  document.querySelector('#titulo1').innerHTML = listaAtores[0].nome
  document.querySelector('#titulo2').innerHTML = listaAtores[1].nome
  document.querySelector('#titulo3').innerHTML = listaAtores[2].nome

  document.querySelector('#par1').innerHTML = (`Interpreta o personagem ${listaAtores[0].personagem} no filme ${listaAtores[0].filme}`)
  document.querySelector('#par2').innerHTML = (`Interpreta o personagem ${listaAtores[1].personagem} no filme ${listaAtores[1].filme}`)
  document.querySelector('#par3').innerHTML = (`Interpreta o personagem ${listaAtores[2].personagem} no filme ${listaAtores[2].filme}`)
