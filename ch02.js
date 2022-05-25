// const createPrinter = () => ()=> console.log('Hello')


// const createMultiplier = y => x => x * y 

// const double = createMultiplier(2)
// const triple = x => x * 2

//Closure
// const createPrinter = () =>{
//     const myFavoriteNumber = 42
//     return ()=>
//     console.log(`My favorite number is ${myFavoriteNumber}`)
// }

// const printer = createPrinter()
// printer()

// const Person = ({name,age, job})=>{
//     let _name = name
//     let _age = age
//     let _job = job
//     return {
//         getName: () => _name,
//         getAge: () => _age,
//         getJob: () => _job
        
//     }
// }


// const me = Person({name: 'Artur',age: 26, job: 'Junior software engineer'})
// console.log(me.getAge())


const divide = (x,y)=> {
    if (y === 0){
        console.log('Error dividing by zero')
        return null
    }
    return x/y 
}

const secondArgumentIsntZero = func =>(...args)=>{
    if (args[1] === 0){
        console.log('Error dividing by zero')
        return null
    }
    return func(...args)
}

const divideSafe = secondArgumentIsntZero(divide)
console.log(divide(7,0))