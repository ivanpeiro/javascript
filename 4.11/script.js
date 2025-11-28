var sexo = '';

do {
        sexo = prompt("Introduce tu sexo (h: hombre / m: mujer): ");
        
} while (sexo != 'h' && sexo != 'H' && sexo != 'm' && sexo != 'M');

if(sexo == 'h' || 'H') {
        alert("Tu sexo es hombre.");
} else {
        alert("Tu sexo es mujer.");
}

document.write("<a href=\"2.html\">Ejercicio 4.11 - 2</a>")