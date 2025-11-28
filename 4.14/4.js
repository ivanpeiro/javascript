var alumno = "";
var edad = 0;
var media = 0;
var hombres = 0;
var mujeres = 0;
var nota = 0;
var notaMedia = 0;
var sexo = '';
var color = false;


document.write("<h2>TABLA DE ALUMNOS</h2>" +
               "<table>" +
                        "<tr style=\"background-color:red;\">" +
                                "<th>NOMBRE</th><th>EDAD</th><th>SEXO</th><th>NOTA</th>" +
                        "</tr>");

for(var i = 0; i < 5; i++) {
        if(color == false) {
                document.write("<tr style=\"background-color:blue;\">");
        } else {
                document.write("<tr style=\"background-color:green;\">");
        }

        document.write("<td>" + prompt("Introduce el nombre del alumno: ") + "</td>");

        edad = parseInt(prompt("Introduce la edad del alumno:"));
        while(!(edad >= 13 && edad <= 100)) edad = parseInt(prompt("Introduce una edad real"));
        media += edad;
        document.write("<td>" + edad + "</td>");

        sexo = prompt("Introduce tu sexo (h/m):");
        while(!(sexo == 'h' || 'H' || 'm' || 'M')) sexo = prompt("Introduce un sexo valido h: hombre m: mujer");
        
        if(sexo == 'h' || sexo == 'H') {
                document.write("<td>Hombre</td>");
                ++hombres;
        }

        if(sexo == 'm' || sexo == 'M') {
                document.write("<td>Mujer</td>");
                ++mujeres;
        }

        nota = parseFloat(prompt("Introduce tu nota: "));
        while(!(nota >= 0 && nota <= 10)) nota = parseFloat(prompt("Introduce una nota valida"));
        notaMedia += nota;
        document.write("<td>" + nota + "</td>");

        document.write("</tr>");
        if(color == false) {
                color = true;
        } else {
                color = false;
        }

}

        document.write("</table>" + 
                       "<h2>DATOS ESTADISTICOS</h2>" +
                       "La media de edad es: " + (media / 5) + "<br>" +
                       "La media de nota es: " + (notaMedia / 5) + "<br>" +
                       "Número de hombres: " + hombres + "<br>" + 
                       "Número de mujeres: " + mujeres + "<br>"
        );