const tx = document.getElementById('tx')
const btn = document.getElementById('btn')
const tx_p = document.getElementById('tx_e')
var frase_e = ''
btn.addEventListener('click', function () {
    for (var i = 0; i < tx.value.length; i--) {
        frase_e += tx.value.charAt(i) + ' ';
    }
    tx_p.textContent=frase_e

})