var numero1 = parseInt(prompt("Introduce un número:"));
var numero2 = parseInt(prompt("Introduce otro número:"));

if(numero1 == numero2){
        alert("Tus números son iguales");
} else if (numero1 < numero2){
        alert("El primero número es menor que el segundo");
} else {
        alert("El primero número es mayor que el segundo");
}

document.write("<a href=\"../index.html\">Volver atras</a>");