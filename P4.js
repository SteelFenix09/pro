function hora() {
    const horas = [70]
    const sueldoHora = [350]
    let sueldo = 0

    for (let i = 0; i < sueldoHora.length; i++) {
        if (horas <= 40) {
            sueldo = sueldoHora * horas
            console.log(sueldo);
        } else if (horas >= 40 && horas < 60) {
            sueldo = horas * 400
            console.log(sueldo);
        } else if (horas > 60) {
            sueldo = (sueldoHora * horas) * 2
            console.log(sueldo);
        }

    }
}
console.log(hora());