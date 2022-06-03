var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
  var songName = e.target.getAttribute('data-src');
  var songPlaying = document.querySelector('#player');

  if (songPlaying) {

    if(songName=== songPlaying.getAttribute('src')){

      if (songPlaying.paused) {
        songPlaying.play();
        e.target.id = 'playing';
      } else {
        songPlaying.pause();
        e.target.id = 'paused';
      }
    }else{
        songPlaying.src = songName
        songPlaying.play()
        if(document.querySelector('#playing')){
        document.querySelector('#playing').id = ''
        }else{
          document.querySelector('#paused').id = ''
        }
        e.target.id = 'playing'
      }

  } else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();


    audioPlayer.addEventListener('ended', function() {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id='';
    }, false);
  }

}, false);