var nombre;
var edad;
var poblacion;
var centro;

nombre = prompt("Introduce tu nombre: ");
edad = prompt("Introduce tu edad: ");
poblacion = prompt("Introduce tu población: ");
centro = prompt("Introduce tu centro: ");
alert("Me llamo " + nombre + ", tengo " + edad + " vivo en " + poblacion + ", y estudio en " + centro);
document.write("<h2> Me llamo " + nombre + ", tengo " + edad + " vivo en " + poblacion + ", y estudio en " + centro + "</h2>");
document.write("<table border>" +
                        "<tr>" +
                                "<th>Nombre</th> <th>Edad</th> <th>Población</th> <th>Centro</th>" +
                        "</tr>" +
                        "<tr>" +
                                "<td>" + nombre + "</td>" + "<td>" + edad + "</td>" + "<td>" + poblacion + "</td>" + "<td>" + centro + "</td>" +
                        "</tr>" +
                "</table>");