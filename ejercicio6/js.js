// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    var num = document.getElementById('num').value;
    num = parseInt(num);
    var ver = document.getElementById('ver').value;
    if (num == 0) {
        document.getElementById('ver').textContent = 'no es par, ni impar'
    } else if (num % 2 == 0) {
        document.getElementById('ver').textContent = ' es par'

    } else {
        document.getElementById('ver').textContent = 'es impar'
    }

})
radio = parseInt(radio)