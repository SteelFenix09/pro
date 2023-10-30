function salario(semanas) {
    let sueldo = 30
    

    for (let semana=1;semana<=semanas;semana++){
        for (let dia=1;dia<=7;dia++){
            sueldo *= 2
        }
    }

    return sueldo

}
const semanasTrabajo = 3
const sueldoFinal = salario(semanasTrabajo)
console.log(`Tu salario al final de ${semanasTrabajo} semanas será de ${sueldoFinal} pesos.`);