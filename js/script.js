let btnAdd = document.querySelector('#add')
let btnSub = document.querySelector('#sub')
let btnMult = document.querySelector('#mult')
let btnDiv = document.querySelector('#div')

let x = document.querySelector('#x')
let y = document.querySelector('#y')
let result = document.querySelector('#result')

btnAdd.addEventListener('click', add)
btnSub.addEventListener('click', sub)
btnMult.addEventListener('click', mult)
btnDiv.addEventListener('click', div)

function validation() {
    if (x.value != "" && y.value != "") {
        return true
    } else {
        alert('Preencha os valores de X e Y.')
        return false
    }
}

function add() {
    if (validation()) {
        result.value = parseFloat(x.value) + parseFloat(y.value)
    }

}

function sub() {
    if (validation()) {
        result.value = x.value - y.value
    }
}

function mult() {
    if (validation()) {
        result.value = x.value * y.value
    }
}

function div() {
    if (validation()) {
        result.value = x.value / y.value
    }
}