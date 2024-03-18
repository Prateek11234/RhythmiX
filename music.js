console.log("Welcome To RhythmiX");

let songIndex  = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myprogressbar');
let gif=document.getElementById('gif');

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate')

    //update progressbar
    progress = parseInt((audioElement.currentTime)/(audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
    })
