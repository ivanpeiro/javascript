var numero = parseInt(prompt("Introduce un número: "));

if (numero == 100) {
        document.write("Cantidad: " + numero + " | Cantidad + 200: " + (numero + 200));
} else if (numero > 101 && numero < 200) {
        document.write("Cantidad: " + numero + " | Doble de cantidad: " + (numero*2));
} else if (numero < 0) {
        document.write("Cantidad: " + numero + " | ES NEGATIVA");
} else {
        document.write("Cantidad: " + numero + " | Cantidad triple: " + (numero * 3));
}

document.write("<br><br> <a href=\"2.html\">Ejercicio 4.9 - 2</a>");