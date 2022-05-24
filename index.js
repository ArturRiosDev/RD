console.log('hola')


const lista = [
    {location:1,article:2},
    {location:2,article:3},
    {location:3,article:2},
    {location:2,article:2},
    {location:3,article:2},

]

// [{
//     "location1":[2,2],
//     "location2":[3,2]
// }]

// let nuevaLista = lista.reduce((acc,val)=>{
//     let locationKey = `location${val.location}`
//     let {article}= val
//     let currentValue = acc[locationKey]
//     console.log(currentValue)

//     return {...acc,
//         [locationKey]:currentValue ? [...currentValue,article]:[article]}
// },{})


// console.log(nuevaLista)

/* Pedir al usuario el dia de la semana
* p.ej. lunes, martes, ...
* Imprimir en consola el número del dia de la semana equivalente
* es decir:
* domingo -> 1, lunes -> 2, martes -> 3, etc...
* reducir lo mas posible el codigo utilizando el toLowerCase
*/

// let diaUsuario = parseInt(prompt('cual es el dia de la semana?'))

// const transformar = (dia)=>{
//     let diaDeSemana ={
//         1:"lunes",
//         2:"martes",
//         3:"miercoles"
//     }

//     return diaDeSemana[dia]
// }


// console.log(transformar(diaUsuario))

//pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo

// let palabra = prompt('Favor de poner una palabra ').split('').reverse()
// let nuevaPalabrasinspacios = palabra.filter(item=> item != ' ') 
// let palindromo = nuevaPalabrasinspacios.join('')

// console.log(palindromo)
// validar si es un numero par 

// let numero = parseInt(prompt('poner el numero ')) 


// const validacion = (number)=>{
//     if (number %2 == 0){
//         console.log('es un numero par')
//         return
//     }
//     return  console.log('no es un numero par')
// }

// validacion(numero)


//tabla de multiplicar 

// let numero = parseInt(prompt('poner el numero de quien quieres la tabla')
// ) 


// for (let index = 1; index <= 10; index++) {
    
//     console.log(`${numero} x ${index} = ${index*numero}`)
// }

//invertir una oracion 


// let palabra = prompt('palabra ')

// let nueva = palabra.split(' ').reverse().join(' ')

// console.log(nueva)

/**
 * Escribir un arrow function que tome como parametro 2 arrays,
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2])
 * -> 13
 *
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 */

// const cambio  =(a,b)=>{
// let nuevo = a.concat(b)
//    return nuevo.reduce((acc,val)=>{
//     let resultado = acc + val
//     return resultado   
//     })
// }

// console.log(cambio([1,2,3],[3,2]))

/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]).
 * -> [1,2]
 */

// const nuevo = (a,b)=>{
//     let nuevopalabra = a.concat(b).sort()
//     let result = []
//     for (let index = 0; index < nuevopalabra.length; index++) {
        
//         if (nuevopalabra[index]  == nuevopalabra[index + 1]){
//             result.push(nuevopalabra[index])
//         }
//     }
//     return result


// }

// console.log(nuevo([1,2,3,4],[1,2,5]))

// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]

// const separar = (numeros)=>{
    // let result = []
    // numeros.forEach(element => {
    //     if (element %2 == 0 ){
    //         result.push(element)
    //     }
    // });
    // return result

//     let result = numeros.reduce((acc,val)=>{
//          if(val %2 ==0) {
//             return [...acc,val]
//          }
//          return acc
//     },[])
//     return result
// }

// console.log(separar([1, 2, 3, 4]))

// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array
// -> firstAndLast (['hola', 'mundo'] )
// -> ['ha', 'mo']


// const extraccion = (ar)=>{
//     let result = []
//     ar.map(item=>{
//         let large = item.length -1 
//         result.push(item[0].concat(item[large]))

//     })
//     return result
// }

// * 3. Funcion que reciba un array de numeros
//  * y devuelva el promedio
//  * -> getAverage( [10, 8, 9, 7] )
// const getAverage = (arr) => {
//     let sum =0,  totalNumbers = arr.length
//     arr.forEach(element =>  sum += element)
//     return sum / totalNumbers
//   }


// console.log(getAverage([10, 8, 9, 7]))

// * Dado el siguiente array
//  * ['string','value','min','asdfghjk']
//  * Hacer una funcion que devuelva el string con mas caracteres


// const mostLarge = (arr)=>{
//     let word = ''
//    arr.forEach((item,index)=>{
//         arr[index].length < arr[index].length + 1? word = arr[index] : null
//     })
//     return word
// }

// console.log(mostLarge(['string','value','min','asdfghjk']))

/**
 * arr.map()
 * Dado un array
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 *
 */

// const reverseArray =(ar)=>{
//     return ar.map(word =>{
//         return word.split('').reverse().join('')
//     })
// }

// console.log(reverseArray(['string','value','min']))

/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a"
 *
 * p.ej.  filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */


// const filterStrings =(ar)=>{
//     let strings = ar.filter(item=>{
//         return typeof item === 'string'
//     })
//     let capitalizados = strings.map((item,index)=>{
//         return item[0].toUpperCase().concat(item.slice(1))
//     })
//     let moreThanFive = capitalizados.filter((item,index)=>{
//         return item.length > 5
//     })
//     let word  = moreThanFive.filter(item=>item.split('a').length >= 3)

//     return word
// }

// console.log(filterStrings(['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0]))

/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/

// const onlyVowels =(ar)=>{
//     return ar.filter((item,index)=>{
//         return item[0] == 'a' || item[0] == 'e' || item[0] == 'i' || item[0] == 'o' || item[0] == 'u' 
//     }).map(item => item[0].toUpperCase().concat(item.slice(1)))
// }

// console.log(onlyVowels(['jorge','ana','ivan','sergio','luis','oscar' ] ))