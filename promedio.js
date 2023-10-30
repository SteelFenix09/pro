let calificacion = new Array(10)
calificacion = [97, 100, 96, 86, 98, 99]
let suma = 0
let calcular = 0
function promedio() {
    for (let i = 0; i <calificacion.length; i++) {
        suma = suma + calificacion[i];



    }
    
    calcular = suma / 10
    console.log("suma ", suma);
    console.log("promedio ", calcular);
}

console.log(promedio());