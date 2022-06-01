// console.log('hi')

// setTimeout(()=>{
//     console.log('this result is for the asynchronous function')
// },5000)

// console.log('hello again')

// let httpRequest = new XMLHttpRequest()

// function get(url){
//     httpRequest.open('GET',url)
//     httpRequest.send()
// }

// const test = async (url)=>{
//     let response = await fetch(url)
//     return await response.json()
// }

// const test2 = async (url,obj)=>{
//     let response = await fetch(url,{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj)
//     })
//     return await response.json()
// }

// //declaring a web worker
// const worker = new Worker()
// //new comment

//Create a function, that receives an array of numbers and remove the duplicates. Without using Set, then refactor it to use Set

// const removeDuplicates = (numbers)=>{
//     const filteredNumbers = [];
//     for (var i = 0; i < numbers.length; i++){
//     if (!filteredNumbers.includes(numbers[i])){
//     filteredNumbers.push(numbers[i]);
//                 }
//     }

//     return filteredNumbers;
// }

// const removeDuplicates = (numbers)=>{
//     const filteredNumbers = new Set(numbers)
//     return filteredNumbers
// }

///////////NEW ANSWER
//const removeDuplicates = (arr)=>{
//   return arr.sort().filter((num,i)=>num != arr[i + 1])
// }

// console.log(removeDuplicates([1,2,2,2,3,3,4,5,6,6,7,8,9,9,9]))

// console.log(removeDuplicates([1,2,2,2,3,3,4,5,6,6,7,8,9,9,9]))

//What would be the log of the following code and why?
// a = 3;
// function F() {
// console.log(a); // first answer here: ‘undefined’ because ‘a’ is not in the scope of the function ‘F’
// var a = 5;
// }

// F();

// console.log(a); // second answer here: 3, because ‘a’ is in the global context (same level) of this log

/////////////////////////////////

//#4
//What would be the log of the following code and why?

//  class Hero {
//     constructor(heroName) {
//       this.heroName = heroName;
//     }

//     logName = () => {
//       console.log(this.heroName);
//     };

//     logName2() {
//       console.log(this.heroName);
//     }
//   }
//   const batman = new Hero('Batman');

//   setTimeout(batman.logName, 1000); // answer: Batman, because it's been called by an anonymous function wich has this as a parameter
//   setTimeout(batman.logName2, 1000); // undefined , as the function is not receiving any parameter to log

//#5----------
// Create a function that receives any string and returns the same string but reversed.

// const reversed = (string) => {
//   //your solution here
//     return string.split('').reverse().join('')
// };

// console.log(reversed(':( repoleved a ma I !dlroW olleH'));

//#2--------------
//Create a function “Sum” that works like this?

// let result = new Object(0)
// function Sum(x=0){
//         return (y) =>{
//            result = result + ( x + y)
//             return result
//              }
//     }

// let sum1 = new Sum()
// //sum1(3); // 3
// // sum1(5); // 8
// // sum1(2); // 10

// let sum2 = new Sum();
//  //sum2(1); // 1
// // sum1(1); // 11

// console.log(sum1(3))
// console.log(sum1(5))
// console.log(sum1(2))
// console.log(sum2)

//#6----------

// // what would be the log for the following code and why?
// function f1() {
//   let c = 1;
//   let sum = f2();

//   function f2() {
//     return b + c;
//   }
//   return sum
// }

// var b = 3;

// console.log(f1()) //answer: 4, because sum represents the returned value of function f2 and c and b are in the scope of function f1

//HOME TASK
const myPromise = class{
  syncThen(){
    console.log(1)
    console.log(2)
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log(3)
          },1000)
          resolve(4)
      })
   }  
}
let promise = new myPromise()

promise.syncThen().then((res)=> console.log(res))