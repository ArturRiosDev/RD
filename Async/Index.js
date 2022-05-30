console.log('hi')

setTimeout(()=>{
    console.log('this result is for the asynchronous function')
},5000)

console.log('hello again')

let httpRequest = new XMLHttpRequest()

function get(url){
    httpRequest.open('GET',url)
    httpRequest.send()
}

const test = async (url)=>{
    let response = await fetch(url)
    return await response.json()
}

const test2 = async (url,obj)=>{
    let response = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return await response.json()
}

//declaring a web worker 
const worker = new Worker()
//new comment