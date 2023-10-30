const prompt=require("prompt-sync")({sigint:true})
let años
let dias
let horas

años=parseInt(prompt("Ingrese tu edad "))

dias= años*365
horas=8*dias

console.log("A dormido un total de ",horas);
