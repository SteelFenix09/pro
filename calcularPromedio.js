let c1,c2,c3,c4,c5,promedio;
//para pedir datos a traves del teclado
//const prompt=require("prompt-sync")({sigint:true})
//instalar npm install prompt-sync


c1=prompt("ingrese la calificacion 1")
c2=prompt("ingrese la calificacion 2")
c3=prompt("ingrese la calificacion 3")
c4=prompt("ingrese la calificacion 4")
c5=prompt("ingrese la calificacion 5")
promedio=(c1+c2+c3+c4+c5)/5;

if (promedio>=70 & promedio<80){
    console.log("Calificacion regular: "+promedio)
    alert(("Calificacion regular: "+promedio))
} else if(promedio>=80 & promedio<90){
    console.log("Calificacion bueno: "+promedio)
    alert(("Calificacion bueno: "+promedio))
} else if(promedio>=90 & promedio<100){
    console.log("Calificacion excelente: "+promedio)
    alert(("Calificacion excelente: "+promedio))
} else{
    console.log("Alumno deficiente: "+promedio)
    alert(("Alumno deficiente: "+promedio))
}

