//utilizar propiedad de splice (elimina un dato dependiendo de su posición)
function arre(){
    const datos=[10,12,34,24]
    //datos.splice(-2,2)
    //si la posición no existe la anexara y replanzara el valor
    datos.splice(4,1,26,26,27)
    console.log(datos)
}
console.log(arre());

function arreglo2(){
    const datos=[10,12,34,24]
    datos.pop()
    datos.shift()
    console.log(datos)

}
console.log(arreglo2());

