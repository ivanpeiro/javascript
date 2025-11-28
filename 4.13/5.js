var intentos = 0;
var media = 0;
var edad = 0;
var sexo = '';
var hombres = 0;
var mujeres = 0;
var nota = 0;
var notaMedia = 0;

do {
        document.write(prompt("Introduce el nombre del alumno") + ": ");

        edad = parseInt(prompt("Introduce la edad del alumno:"));
        while(!(edad >= 13 && edad <= 100)) edad = parseInt(prompt("Introduce una edad real"));
        media += edad;
        document.write(edad + " - ");

        sexo = prompt("Introduce tu sexo (h / m): ");
        while(!(sexo == 'h' || 'H' || 'm' || 'M')) sexo = prompt("Introduce un sexo valido h: hombre m: mujer");

        if(sexo == 'h' && 'H') {
                document.write("Hombre - Nota: ");
                ++hombres;
        }

        if(sexo == 'm' && 'M') {
                document.write("Mujer - Nota: ");
                ++mujeres;
        }

        nota = parseFloat(prompt("Introduce tu nota: "));
        while(!(nota >= 0 && nota <= 10)) nota = parseFloat(prompt("Introduce una nota valida"));
        notaMedia += nota;
        document.write(nota + "<br>");

        ++intentos;
} while(intentos < 3);

        media = media / 3;
        notaMedia = notaMedia / 3;
        document.write("Edad media de los alumnos: " + media + "<br>");
        document.write("Cantidad de Hombres: " + hombres + " - Cantidad de Mujeres: " + mujeres);
        document.write("Nota media de los alumnos: " + notaMedia);
        document.write("<br><br><br><a href=\"4.html\">Ejercicio 4.13 - 6</a>");