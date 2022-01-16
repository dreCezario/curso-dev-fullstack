/*

SINCRONO E ASSINCRONO

*/

// SINCRONO 

function primeira () {
    console.log('primeira')
}

function segunda () {
    console.log('segunda')
}

primeira()

segunda()

// ASSINCRONO

function primeira () {
    console.log('primeira')
}

function segunda () {
    console.log('segunda')
}

setTimeout(primeira, 2000)

segunda()