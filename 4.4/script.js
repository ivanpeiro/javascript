var numero = parseInt(prompt("Introduce un número:"));
var numero2 = parseInt(prompt("Introduce otro número:"));


//Ejercicio 5_1
document.write("Número: " + numero);
document.write("<br>Número 2: " + numero2);
document.write("<br>Número al cuadrado: " + (numero**2));
document.write("<br>Número al cubo: " + (numero**3));

alert("Número: " + numero + "\nNúmero 2: " + numero2 + "\tNúmero al cuadrado: " + (numero**2) + "\tNúmero al cubo: " + (numero**3));

//Ejercicio 5_2
document.write("<br><br>Suma de los números: " + (numero + numero2));
document.write("<br>Resta del primer número menos el segundo: " + (numero - numero2));
document.write("<br>Multiplicación de los números: " + (numero * numero2));
document.write("<br>División de los números: " + (numero / numero2));
document.write("<br>Resto de la división: " + (numero % numero2)); 

alert(  "Suma de los números: " + (numero + numero2) + "\tResta de los números: " + (numero - numero2) + "\tMultiplicación de los números: " + (numero * numero2) +
        "\tDivisión de los números: " + (numero / numero2) + "\tResto de la división: " + (numero % numero2));

//Ejercicio 6
document.write("<br><br>A=" + numero + "\tB=" + numero2);
document.write("<br>A==B es: " + (A==B));
document.write("<br>A>B es:" + (A>B));

alert("A=" + numero + "\tB=" + numero2 + "\nA==B es: " + (A==B) + "\nA>B es: " + (A>B));