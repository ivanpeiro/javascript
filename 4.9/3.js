var sexo = prompt("Introduce tu sexo (h/m): ");

if(!(sexo == 'h' || 'H' || 'm' || 'M')) {
        alert("Ha introducido un valor no valido.\nIntroduce 'h' para hombre o 'm' para mujer");
        sexo = prompt("Introduce tu sexo (h/m): ");
} else if (sexo == 'h' || 'H') {
        alert("Has seleccionado el sexo hombre.");
} else if (sexo == 'm' || 'M') {
        alert("Has seleccionado el sexo mujer.");
}

