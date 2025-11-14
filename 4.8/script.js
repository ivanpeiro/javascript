var nombre = prompt("Introudce tu nombre: ");
var edad = parseInt(prompt("Introduce tu edad: "));
var mayor = edad > 18;
var nota = parseInt(prompt("Introduce tu nota: "));
var aprobado = nota > 5 && nota < 10;

document.write("<h1>Notas</h1>" +
               "<br>Nombre: " + nombre + 
               "<br>Edad: " + edad +
               "<br>Mayor de edad?: " + mayor + 
               "<br>Nota: " + nota + " - Aprobado?: " + aprobado 
);