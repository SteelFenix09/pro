function arreglo(){
    const datos=[10,12,34,24]
    console.log(datos)

}

//.push = agregar datos al inicio del array
//.unshift = agregar datos al final del array

function arreglo1(){
    const datos=[10,12,34,24]
    datos.push(23) 
    datos.unshift(9)
    console.log(datos)

}


//.shift = aliminar primer valor dentro del arreglo
//.pop = aliminar ultimo valor dentro del arreglo

function arreglo2(){
    const datos=[10,12,34,24]
    datos.pop()
    datos.shift()
    console.log(datos)

}

//utilizar propiedad de splice (elimina un dato dependiendo de su posición)
function arre(){
    const datos=[10,12,34,24]
    //datos.splice(-2,2)
    //si la posición no existe la anexara y replanzara el valor
    datos.splice(4,1,26,26,27)
    console.log(datos)
}

//eliminar con la opcion delate array
function arre2(){
    const datos=[10,12,34,24]
    delete(datos[1])
    console.log(datos)
}


//utilizar la funcion filter
function arre3(){
    const datos=["Calabacita", "Pedro", "Jkosé"]
    const resultado=datos.filter(dat=>dat!==12)
    const result=nombres.filter(dat=>dat!=="Dany")
    console.log(resultado)
    console.log(result)
}

//utilizando map
const listaOrigin=[1,2,3,4,5,6]

const nuevaLista=listaOrigin.map(function sumarValor(elementoAc){
return elementoAc + 10
})

//Destructuracion
function sumarValor(valor){
    return valor + 10
}

const nuevaList=listaOrigin.map(sumarValor)
    console.log(nuevaList)

    const articulos=[
        {nombre:"Refrescos", precio:20},
        {nombre:"Galletas", precio:15},
        {nombre:"Enlatados", precio:30},
    ]

    function obtenerDatos([nombre,precio]){
        return '${nombre} ${precio}'
    }

    const date=articulos.map(obtenerDatos)
console.log(date)


    console.log(nuevaLista)

