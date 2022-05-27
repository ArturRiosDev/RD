// var Dog =  function () {
//     var name, breed
// }

// var speak = function (say){
//     console.log(say)
// }

// Dog.prototype.speak = speak

// firstDog = new Dog
// firstDog.name = 'Rover'
// firstDog.breed = 'doberman'
// firstDog.speak('woof')


// var speak = function (what){
//     console.log(what)
//     console.log(this.love)
//     // console.log(this)
// }

// var saySomething = {normal: 'mew', love: 'purr'}
// speak.call(saySomething,'testing')

// var plus = function(){
//     console.log(arguments[0])
// }

// plus(2,3,1)

// let test  = function(){
//     console.log('its working')
// }()

// let dog = function (){
//     let name, breed
// }

// firstDog = new dog
// firstDog.name = 'luka'
// firstDog.breed = 'poodle'

// console.log(firstDog)

// let jump = function(meters){
//     firstDog.color = 'white'
//     console.log(`This dog can jump ${meters} high`)
// }

// dog.prototype.jump = jump
// firstDog.jump(5)
// console.log(firstDog)

var speak = function (what){
        console.log(what)
        console.log(this.normal)
        // console.log(this)
    }
    
    var saySomething = {normal: 'mew', love: 'purr'}
    speak.call(saySomething,'testing')
    
