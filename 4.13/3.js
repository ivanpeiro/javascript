var intentos = 0;
var media = 0;
var edad = 0;
var sexo = '';

do {
        document.write(prompt("Introduce el nombre del alumno") + ": ");

        edad = parseInt(prompt("Introduce la edad del alumno:"));
        while(!(edad >= 13 && edad <= 100)) edad = parseInt(prompt("Introduce una edad real"));
        media += edad;
        document.write(edad + " - ");

        sexo = prompt("Introduce tu sexo (h / m): ");
        while(!(sexo == 'h' || 'H' || 'm' || 'M')) sexo = prompt("Introduce un sexo valido h: hombre m: mujer");

        if(sexo == 'h' && 'H') document.write("Hombre<br>");
        if(sexo == 'm' && 'M') document.write("Mujer<br>");

        ++intentos;
} while(intentos < 3);

        media = media / 3;
        document.write("Edad media de los alumnos: " + media);
        document.write("<br><br><br><a href=\"4.html\">Ejercicio 4.13 - 6</a>");