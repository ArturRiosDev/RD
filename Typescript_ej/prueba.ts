let nombre = 'hola'
let accion:number = 1

let tipos:(string|number)
tipos = 'nombre'
tipos = 1

// tipos = [1,2,3]


interface animal{
    altura:number
    longitud?:(string|boolean)
}

function propiedad(x:animal){
    
    return console.log(x.longitud);
}

propiedad({altura:1,longitud:true})

