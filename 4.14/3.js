var numero = parseInt(prompt("Introduce un número para ver su tabla de multiplicar:"));

document.write("<h2>Tabla de multiplicar del " + numero + "</h2>");
document.write("<table>" +
                        "<tr>" +
                                "<th>NÚMERO</th><th>FACTOR</th><th>RESULTADO</th>" +
                        "</tr>");

for (var i = 1; i <= 10; i++) {

        document.write("<tr ");

        if(((numero*i)%2) == 0) {
                document.write("style=\"background-color: blue;\"");
                     
        } else {
                document.write("style=\"background-color: green;\""); 
        }

        document.write(">" +
                                "<td>" + numero + "</td><td>" + i + "</td><td>" + (numero*i) + "</td>" + 
                        "</tr>" 
        );
}
