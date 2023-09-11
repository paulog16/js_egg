
const num = document.getElementById('num');
const btnlimit = document.getElementById('btn-limit')
const btnnum = document.getElementById('btn-num')
const limit = document.getElementById('limit')
const tx = document.getElementById('text')
var limitt = 0
btnlimit.addEventListener('click', function () {
    limitt = parseInt(limit.value)
    console.log(limitt)
    // limit.style.display = 'none';    // btnlimit.style.display = 'none';
})

var sum = 0
var number = 0
btnnum.addEventListener('click', function () {
    number = parseInt(num.value)

    console.log(num.value)

    sumador(sum)

    if (sum > limitt) {
        text.textContent = 'superaste el limite'
    } 

    //num.value = ''

})

function sumador(sums) {
    tx.textContent = parseInt(num.value) + parseInt(sums);
    sum = tx.value;
}
// let valor = 0;
// let maximo;
// verificar.addEventListener("click", function () {
//   if (respuesta.value < 0) {
//     error.textContent = "Error, el numero no puede ser Negativo";
//     error.style.display = "flex";
//     setTimeout(() => {
//       error.textContent = "";
//       error.style.display = "none";
//     }, 2500);
//   }
//   resultado.style.display = "flex";
//   verificar.style.display = "none";
//   sumar.style.display = "flex";

//   maximo = parseInt(respuesta.value);
//   console.log(maximo, valor);
//   respuesta.value = 0;
// });

// sumar.addEventListener("click", function () {
//   if (maximo <= valor) {
//     resultado.textContent = `ALCANZASTE EL NUMERO MAXIMO! = ${valor}`;
//   } else {
//     sumador(valor);
//     console.log(valor);
//   }
// });

// function sumador(val) {
//   resultado.textContent = parseInt(respuesta.value) + parseInt(val);
//   valor = resultado.value;
// }