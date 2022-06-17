let dragndrop= (function(){
    let myX= ''
    let myY= ''
    let wichArt = ''

    function resetZ(){
        let elements = document.querySelectorAll('img')
        for (let index = elements.length-1; index >=0 ; index--) {
                elements[index].style.zIndex=5            
        }
    }

    function moveStart(e){
        wichArt= e.target
        console.log('ahi ya lo tomaste ',e)
        myX = e.offsetX === undefined? e.layerX : e.offsetX
        myY = e.offsetY === undefined? e.layerY : e.offsetY
        resetZ()
        wichArt.style.zIndex = 10
    }

    function moveDrop(e){
        console.log('ahi ya se solto ')
        e.preventDefault()
        wichArt.style.left = e.pageX - myX + 'px'
        wichArt.style.top = e.pageY - myY + 'px'

    }
    function moveDragOver(e){
        e.preventDefault()
        console.log('ahi ya se esta moviendo')
    }


    document.querySelector('body').addEventListener('dragstart', moveStart,false)
    document.querySelector('body').addEventListener('dragover', moveDragOver, false)
    document.querySelector('body').addEventListener('drop', moveDrop, false)
    

})()