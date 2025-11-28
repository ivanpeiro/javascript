var intentos = 0;
var media = 0;
var edad = 0;

do {
        document.write(prompt("Introduce el nombre del alumno") + ": ");
        edad = parseInt(prompt("Introduce la edad del alumno:"));
        while(!(edad > 13 && edad < 100)) edad = parseInt(prompt("Introduce una edad real"));
        media += edad;
        document.write(edad + "<br>");
        ++intentos;
} while(intentos < 3);

        media = media / 3;
        document.write("Edad media de los alumnos: " + media);
        document.write("<br><br><br><a href=\"3.html\">Ejercicio 4.13 - 5</a>");