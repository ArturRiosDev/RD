class Item {
    constructor(){
        this.type = 'goods'
    }
    logItem(){
        console.log('its working')
    }
}

class Live extends Item{
    constructor (name, pot , quantity =1){
        super()
        this.name = name
        this.pot = pot
        this.quantity = quantity
        this.storage = 'warm'
    }

}

const play1 = new Item()
console.log(play1.logItem())


