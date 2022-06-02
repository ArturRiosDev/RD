document.querySelector('img.preview').addEventListener('click',function(e){
    let lowResolution = e.target.src
    let myOverlay = document.querySelector('.overlay')
    let highRes = document.createElement('img')
    let mySpinner = document.createElement('img')

    myOverlay.style.display= 'block'
    highRes.className = 'bgImg'
    highRes.src= lowResolution.substr(0,lowResolution.length-7)+ '.jpg'
    myOverlay.appendChild(highRes)

    mySpinner.className = 'spinner'
    mySpinner.src = 'images/spinner.gif'
    myOverlay.appendChild(mySpinner)

    highRes.addEventListener('load', function(){
        mySpinner.parentNode.removeChild(mySpinner)
    })

},false)