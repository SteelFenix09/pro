//Ordenar datos
const nombres=["Luis","Daniel","Federico","Alberto","Pamfilo","Jesus"]
function ordenamiento(){
    nombres.sort()
    console.log(nombres);
}
console.log(ordenamiento());

const numeros=[23,21,51,87,15,65,41,2,12]
function comporar(a,b){
    return a-b
}
function ordenar(){
    const orden=numeros.sort(comporar)
    console.log(orden);
}
console.log(ordenar());