function nuemros(){
    suma=0
    for(var i=1;i<=10;i++){
        
        if (i%2!=0) {
            suma=suma+i
            
        }
    
    }
    console.log("La suma total es: "+suma)
}

console.log(nuemros())