var num = document.getElementById('num')
var btn = document.getElementById('btn')
var cont = 0
var suma = 0
var num_mayor = 0
var num_minimo = Infinity
const tx = document.getElementById('tx')
btn.addEventListener('click', function () {

    var num_value = parseInt(num.value)


    var promedio = suma / cont
    if (num_value > 0) {
        cont += 1
        suma += num_value
        if (num_value > num_mayor) {
            num_mayor = num_value
        }
        if (num_minimo > num_value) {
            num_minimo = num_value
        }
    }
    if (num_value == 0) {
        tx.textContent = `el numero minimo es ${num_minimo}, el numero mayor es ${num_mayor} y el promedio es ${promedio}`
    }



    num.value = ''
})