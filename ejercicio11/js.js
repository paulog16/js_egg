const tx = document.getElementById('tx')
const btn = document.getElementById('btn')
const tx1 = document.getElementById('tx_2')

var word = tx.value.split(' ')
var wordLargue = ''
btn.addEventListener('click', function () {
    for (var i = 1; i < word.length; i++) {
        if (word[i].length > wordLargue) {
            wordLargue = word[i]
        }
    }
    console.log(wordLargue)
    tx1.textContent = `la palabra mas larga es: ${wordLargue}`
})
