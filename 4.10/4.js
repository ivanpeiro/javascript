var empleado = prompt("Introudzca el nombre de empleado: ");
var salario = parseFloat(prompt("Introduzca el salario del empleado " + empleado + ": "));
var departamento = parseInt(prompt("Introduzca su número de departamento: "));
var salario_nuevo;
var subida;

switch (departamento) {
        case 10:
                subida = 100;
                salario_nuevo = salario + subida; 
                break;
        case 20:
                subida = 0.05;
                salario_nuevo = salario * subida;
                break;
        case 30:
                subida = 0.04;
                salario_nuevo = salario * subida;
                break;
        default:
                subida = 75;
                salario_nuevo = salario + subida;
                break;
}

document.write("Nombre empleado: " + empleado + "<br>" +
               "Salario: " + salario + "<br>" +
               "Departamento: " + departamento + "<br>" +
               "Subida de: " + subida + "<br>" + 
               "Salario Nuevo: " + salario + " + " + subida + " = " + salario_nuevo );

document.write("<br><br><br><a href=\"../index.html\">Volver al inicio.</a>");
