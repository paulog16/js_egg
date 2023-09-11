function op() {

    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    var opc = document.getElementById('op').value;
    var res = document.getElementById('result').value;

    switch (opc) {
        case 's':
           result.textContent = `usted eligio suma, resultado: ${num1 + num2}`
            break;
        case 'r':
            result.textContent = `usted eligio resta, resultado: ${num1 - num2}`
            break;
        case 'm':
            result.textContent = `usted eligio multiplicacion, resultado: ${num1 * num2}`
            break;
        case 'd':
            result.textContent = `usted eligio division, resultado: ${num1 / num2}`
            break;
    }

}
