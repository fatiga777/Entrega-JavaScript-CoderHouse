let año= "2022"

if(año == "2022") {
    console.log("EN ESTE AÑO QATAR 2022 GANAMOS EL MUNDIALL, ¡¡SOMOS CAMPEONES!!")
} else if (año == "2014") {
    console.log("Perdimos... pero aún hay oportunidades")
} else {
    console.log("Argentina la mejor seleccion del mundo")
}

// Switch case de leo jaja

let continuar = true;
while(continuar) {
    let menu = parseInt(prompt("Ingresar 2006, 2010, 2014, 2018 o 2022, Para ver que sucedio con Leo Messi en estos años"))
    switch(menu) {
        case 2006:
            alert("Lionel Messi hizo su debut en la Copa Mundial el 16 de junio de 2006, fue eliminado por Alemania empatando 1 a 1 y luego de caer 4 a 2 en penales quedando eliminado")
            break
        case 2010:
            alert("Lionel Messi ganó el Balón de Oro en 2010 sin marcar un solo gol en el Mundial y fue eliminado por Alemania en cuartos de final con una goleada de 4-0")
            break
        case 2014:
            alert("En el Mundial 2014, Messi lideró a Argentina a la final contra Alemania, donde perdieron 1-0 en el tiempo extra. Aunque no logró ganar el trofeo, fue elegido el mejor jugador del torneo (Balón de Oro) y, a pesar de la tristeza, marcó goles decisivos y llevó a su equipo hasta la final, contribuyendo en la mayoría de los goles del equipo argentino")
            break
        case 2018:
            alert("En el Mundial 2018, Messi se vio afectado por una lesión y una presión significativa, logrando clasificar a Argentina a los octavos de final en un partido agónico contra Nigeria, donde marcó el gol decisivo. A pesar de sus esfuerzos, su rendimiento no fue el más brillante y Argentina fue eliminada en octavos de final por Francia.")
            break
        case 2022:
            alert("Lionel Messi lideró a Argentina hacia la victoria final, el título más anhelado de su carrera. A pesar de un comienzo con una derrota inesperada, Messi anotó 7 goles y dio 3 asistencias en el torneo, marcando en todas las fases eliminatorias. Su actuación estelar le valió el Balón de Oro al mejor jugador del torneo. En la final contra Francia, considerada una de las mejores de la historia, Messi anotó dos goles y otro en la tanda de penales para asegurar la victoria")
            break
        case 2026:
            alert("Easter Egg, No estaba entre las opciones, pero Ojala lo juege y gane otra vez, Te amo Leo <3")
            break
        default:
            alert("Opcion Incorrecta, messi no jugo un mundial este año")
    }

    let confirmacion = prompt("Desea ver que mas paso en sus otros mundiales? (si/no)").toLowerCase()
    if(confirmacion == "no"){
        continuar = false
        alert("Gracias")
    }
}


function sumar(numeroA, numeroB) {
    const resultado = (numeroA + numeroB);
    return resultado;
}

console.log("Messi tiene " + sumar(3, 5) + " Balones de Oro")

function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3
    return promedio;
}

console.log("Tu promedio es de " + calcularPromedio(3, 10, 8))

function calculadoraDolaresaPesos() {
    const pesos = Number(prompt("Ingresar cuantos pesos tenés"))
    const resultado = pesos / 1500;
    alert("Equivale a " + resultado + " USD")
    return resultado
}

calculadoraDolaresaPesos();
