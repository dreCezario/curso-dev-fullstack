/*

JSON

JAVASCRIPT OBJECT NOTATION

*/

const objeto = {
    name: 'fulano',
    age: 35,
}

const json = JSON.stringify(objeto)

const jsonParseado = JSON.parse(json)


console.log(jsonParseado.age)