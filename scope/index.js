// var warrior = 'Ninja'



// const screamWarrior = ()=>{
//     let warrior2 = 'Samurai'
//wrapped ina function now is a closure

//     return {
//         shootWarrior:()=>{
//             return console.log(warrior,warrior2)
//         }
//     }
// }

// screamWarrior()

// // console.log(warrior,warrior2)

// const newWarrior = screamWarrior()

//first declared ****HOISTING
// warrior = 'Ninja'

// const screamWarrior = ()=>{
//     let warrior2 = 'Samurai'
//     return {
//         shootWarrior:()=>{
//             return console.log(warrior,warrior2)
//         }
//     }
// }

// screamWarrior()
// var warrior = 'hola'
// console.log(warrior)

// // const newWarrior = screamWarrior()

// const warrior  = {
//     name: 'jujin take ',
//     type: ' ninja',
//     weapon: 'shurkiken',
//     agility: 79
// }// this is globally scoped 

// //globally scoped 
// const screamWarrior = ()=>{
//         warrior2 = 'Samurai' // globally scoped
//         return {
//             shootWarrior:()=>{
//                 return console.log(warrior,warrior2)
//             }
//         }
//     }

// screamWarrior()
// console.log(warrior,warrior2)


const screanWarrior = () =>{
    var warrior1 = 'ninja'
    let warrior2 = 'samurai'

    return `our warriors are ${warrior1} and ${warrior2}`
}

console.log(screanWarrior())

// warrior 1 & warrior 2 aren´t available globally 

// console.log(warrior1,warrior2)