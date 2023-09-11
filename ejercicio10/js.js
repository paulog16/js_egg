const tx = document.getElementById('tx')
const btn = document.getElementById('btn')
const tx_e = document.getElementById('tx_e')


btn.addEventListener('click', function () {
    var word_i = ''
    for (var i = tx.value.length; i >= 0; i--) {
        word_i += tx.value.charAt(i) + ''
    }
    tx_e.textContent = word_i
})