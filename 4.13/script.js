var intentos = 0;
var numero = 0;

alert("do while");

do {
        numero += parseInt(prompt("Introduce un número: "));
        ++intentos;

} while(intentos < 5);

alert(numero);

numero = 0;
intentos = 0;
alert("while");

while(intentos < 5) {
        numero += parseInt(prompt("Introduce un número: "));
        ++intentos;
}

document.write("<a href=\"2.html\">Ejercicio 4.13 - 4</a>");