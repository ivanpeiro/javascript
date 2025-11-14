var edad = parseInt(prompt("Introduce tu edad: "));

if(edad < 0 || edad > 110) {
        alert("La edad introducida no es correcta.");
        document.write("La edad introducida no es correcta.");
} else if(edad < 18) {
        alert("Eres menor de edad.");
        document.write("Eres menor de edad.");
} else {
        alert("Eres mayor de edad.");
        document.write("Eres mayor de edad.");
}

document.write("<br><br> <a href=\"3.html\">Ejercicio 4.9 - 3</a>");