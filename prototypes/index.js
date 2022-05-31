class Item {
    constructor(type){
        this.type = type
    }
    logItem(){
        console.log('its working')
    }
}

class Live extends Item{
    constructor (name, pot , quantity =1,type){
        super(type)
        this.name = name
        this.pot = pot
        this.quantity = quantity
        this.storage = 'warm'
    }

}

const play1 = new Item()
console.log(play1.logItem())

const play2 = new Live('prueba','n',4,'test')
console.log(play2.quantity)

function Human (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  Human.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.firstName}`)
  }

  const hablar = function(){
      console.log(`${this.firstName} is talking`)
  }
  Human.prototype.hablar = hablar

  const arturo = new Human('arturo','rios')
  console.log(arturo.hablar())

  function Sum(){
      let result = 0
      return (num)=>{
          result += num
          console.log(result)
      }
  }

  let sum1 = new Sum()
  sum1(2)
  sum1(3)

  let sum2 = new Sum()
  sum2(2)
  sum2(3)