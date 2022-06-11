function saludar(target: Function):void{
    target.prototype.saludos = function():void{
        console.log('hola desde decoradores')
    }
}

@saludar
class Hola{

    constructor(){}
}

let hola1 = new Hola()
hola1.saludos()