var opc = document.getElementById('op')
var opci = 'Como esta el dia? soleado,nublado,lluvioso'
opc.innerHTML = opci;

function clima() {
    var op = document.getElementById('input').value;
    document.getElementById('cont').textContent = 'opcion: '+op;
}
function resetear(){
    document.getElementById('input').value='';
    document.getElementById('cont').value='';
  

}
