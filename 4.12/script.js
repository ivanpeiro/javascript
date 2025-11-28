var sexo = '';

do {
        sexo = prompt("Introduce tu sexo (h: hombre / m: mujer): ");

        if(sexo != 'h' && sexo != 'H' && sexo != 'm' && sexo != 'M') {
                alert("Sexo erroneo, teclea de nuevo.");
        }
} while(sexo != 'h' && sexo != 'H' && sexo != 'm' && sexo != 'M');

alert("El sexo " + sexo + " es correcto.");
document.write("<a href=\"2.html\">Ejercicio 4.12 - 2</a>");
