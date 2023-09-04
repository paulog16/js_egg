function resp() {
    var resp = document.getElementById('correct').value;
    if (resp == 's' || resp == 'S') {
        var parrafo = document.getElementById('parrafo');
        parrafo.textContent = 'Correcto';
    } else {
        var parrafo = document.getElementById('parrafo');
        parrafo.textContent = 'Incorrecto';
    }
}