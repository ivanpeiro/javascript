var numero1 = parseFloat(prompt("Introduce el primer número:"));
var operador = prompt("Introduce la operación (+, -, *, /):");
var numero2 = parseFloat(prompt("Introduce el segundo número:"));
var valido = true;
var resultado;

switch (operador) {
        case '+':
            resultado = (numero1 + numero2);
            break;
        case '-':
            resultado = (numero1 - numero2);
            break;
        case '*':
            resultado = (numero1 * numero2);
            break;
        case '/':
            resultado = (numero1 / numero2);
            break;
        default:
            valido = false;
            break;
}

if (valido == true) {
    alert(numero1 + " " + operador + " " + numero2 + " = " + resultado);
} else {
    document.write("Error en la operación.");
}

document.write("<a href=\"3.html\">Ejercicio 4.10 - 3</a>");