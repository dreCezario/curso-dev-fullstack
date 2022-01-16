
let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function removeToast() {
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function () {
    toast.classList.add('visible')

    setTimeout (removeToast, 5000)
}