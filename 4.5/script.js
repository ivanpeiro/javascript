var A = parseInt(prompt("Introduce un número: "));
var B = parseInt(prompt("Introduce otro número: "));

alert("A==B es: " + (A==B));
alert("Suma = " + (A + B) + " es > 100: " + ((A+B) > 100));
alert("Resta = " + (A-B) + " es < 100: " + ((A-B) < 100));

document.write("<h1>Números Leidos</h1>" +
               "<br>" +
               "A= " + A + " B= " + B +
               "<br>" + 
               "<h1>Resultados</h1>" + 
               "<br>" +
               "A == B es: " + (A==B) + "<br>" +
               "Suma = " + (A+B) + " es > 100: " + ((A+B) > 100) + "<br>" +
               "Resta = " + (A-B) + " es < 100: " + ((A-B) < 100) 
);