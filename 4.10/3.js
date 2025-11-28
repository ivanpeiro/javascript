var mes = parseInt(prompt("Introduce el nº de un mes (1-12): "));
var prod = 100


switch (mes) {
        case 1:
        case 2:
        case 3:
                prod += 15;
                break;
        case 4:
        case 5:
        case 6:
                prod += 17;
                break;
        case 7:
        case 8:
                break;
        case 9:
        case 10:
        case 11:
                prod += 20;
                break;
        case 12:
                prod += 21;
                break;
        default:
                alert("Error en el mes.");
                break;
}

alert("La productividad del mes Nº " + mes + " es: " + prod);
document.write("<a href=\"4.html\">Ejercicio 4.10 - 4</a>");