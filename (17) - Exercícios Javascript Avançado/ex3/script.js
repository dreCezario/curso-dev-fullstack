const aluno = {

    nome: 'Maria',

    sobrenome: 'da Silva',

    notas: [7, 10, 8, 6, 8, 9],

}

const media = aluno.notas.reduce((acc, curr) => {
    return acc + curr
})

const mediaFinal = media/6

const mediaParseada = parseInt(mediaFinal)

console.log(`A media final da aluna ${aluno.nome} ${aluno.sobrenome} foi de ${mediaParseada} para um total de 6 bimestres`)