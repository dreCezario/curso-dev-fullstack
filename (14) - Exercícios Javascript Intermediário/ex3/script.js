const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],

}

const selectEstados = document.querySelector('#selectEstados')
const selectCidades =  document.querySelector('#selectCidades')
const divCidades = document.querySelector('#div-cidades')


selectEstados.onchange = function (e) {
    let estado = e.target.value

    let listaCidades

    if (estado === 'sp') {
        listaCidades = cidades.sp
    }

    if (estado === 'rj') {
        listaCidades = cidades.rj
    }
    
    let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`
      
    for(let cidade of listaCidades) {
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }
    
    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')      
  }

  
 