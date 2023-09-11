const limit = document.getElementById('limit')
const btn_limit = document.getElementById('btn-limit')
const num = document.getElementById('num')
const btn_num = document.getElementById('btn-num')
const tx = document.getElementById('text')
var limiter = 0
btn_limit.addEventListener('click', function () {
    limiter = parseInt(limit.value)
    console.log(limiter)
})

//var suma=0
var suma = 0
btn_num.addEventListener('click', function () {
    let number = parseInt(num.value)
    suma += number
    if (suma >= limiter) {
        tx.textContent = 'supero o es igual al limite'
    }
    console.log(suma)
    num.value = ''

})
