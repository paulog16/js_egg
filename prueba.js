var fraseP = document.getElementById('frase');
var frase = "hola paulo";
fraseP.innerHTML = frase;

function mostrarTexto(){
    var textoI=document.getElementById('textoI').value; //trae el valor del input
    document.getElementById('resultado').textContent='texto: '+textoI;

     //lo muestra en donde digamos
}