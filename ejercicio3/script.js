var btn = document.getElementById('btn')
var btn2 = document.getElementById('btn2')
var tx = document.getElementById('tx');
var res = document.getElementById('res');

//funcion
btn.addEventListener('click', function () {

    setTimeout(() => {
        tx.style.display = 'none';
        btn.style.display = 'none';
        btn2.style.display = 'block';
    }, 2500);
    if (parseInt(tx.value) > 18) {
        document.getElementById('res').textContent = 'Es mayor de edad'
    } else {
        document.getElementById('res').textContent = 'No Es mayor de edad'

    }
})


btn2.addEventListener('click', function () {
    tx.value = '';
    res.textContent = "";
    tx.style.display = 'block';
    btn.style.display = 'block';
    btn2.style.display = 'none';
})


