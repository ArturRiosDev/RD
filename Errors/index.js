// let response = parseInt(prompt('Please add a number between 5 - 10'))

// const validation = (num)=>{
//     try {
//         if(num > 5 && num < 10){
//             let numer = 4
//             console.log(`the value is ${num}`)
//         }else if(num < 5 || num > 10){
//             throw 'it is out of the scope'
//         }
//     } catch (error) {
//         console.log(error)
//     }
//     finally{
//         console.log('this is the end of the function')
//     }
// }

// validation(response)


// function Human (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
  
//   Human.prototype.sayHello = function () {
//     console.log(`Hi, I'm ${this.firstName}`)
//   }

//   const hablar = function(){
//       console.log(`${this.firstName} is talking`)
//   }
//   Human.prototype.hablar = hablar

//   const arturo = new Human('arturo','rios')
//   console.log(arturo.hablar())

// Human.prototype.jump = function(){
//     console.log(`${this.firstName} jumping`)
// }

// arturo.jump()
// arturo.hablar()

// class Example {

//     somePublicMethod() {
//       this.#somePrivateMethod();
//     }
  
//     #somePrivateMethod() {
//       console.log('You called me?');
//     }
  
//   }
  
//   const myExample = new Example();
  
//   myExample.somePublicMethod(); // 'You called me?'
  
class Hero {
        constructor(heroName) {
          this.heroName = heroName;
        }
        
        logName = () => {
          console.log(this.heroName);
        };
        
        logName2() {
          console.log(this.heroName);
        }
      }
      const batman = new Hero('Batman');
     
     setTimeout(batman.logName,10000)



