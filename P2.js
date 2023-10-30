function calificacion() {
    const promedio = [9.5, 6.8, 9.2, 8.8]
    let cali = 0
    let resul =0
    for (let i=0; i < promedio.length; i++) {
        cali = promedio.reduce((a, b) => { return a + b })
        resul = cali/4
    }
   /* console.log((cali/4)>6 ? `Aprobado: ${cali}`:`Reprobado: ${cali}`);*/

    if (resul >= 6) {
        console.log("Aprobo", resul);
    } else {
        console.log("No aprobo", resul);
    }


}

console.log(calificacion());