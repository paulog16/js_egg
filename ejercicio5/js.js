function op() {

    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    var opc = document.getElementById('op').value;
    var res = document.getElementById('result').value;

    switch (opc) {
        case 's':
            document.getElementById('result').textContent = `usted eligio suma, resultado: ${num1 + num2}`
            break;
        case 'r':
            document.getElementById('result').textContent = `usted eligio resta, resultado: ${num1 - num2}`
            break;
        case 'm':
            document.getElementById('result').textContent = `usted eligio multiplicacion, resultado: ${num1 * num2}`
            break;
        case 'd':
            document.getElementById('result').textContent = `usted eligio division, resultado: ${num1 / num2}`
            break;
    }

}
