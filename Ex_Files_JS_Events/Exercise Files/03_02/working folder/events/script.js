let  jukebox = document.querySelector('ul.player')
jukebox.addEventListener('click', function(e){
     let audioPlayer = document.createElement('audio')
     let songName = e.target.getAttribute('data-src')
     e.target.id = 'playing';
     audioPlayer.id = 'player'
     audioPlayer.src = songName
     document.body.appendChild(audioPlayer)
     audioPlayer.play()
},false)