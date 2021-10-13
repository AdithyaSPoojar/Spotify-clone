console.log('Welcome Ayush S Poojary');
// making the variables
let songIndex = 0
let audioElement = new Audio ('img/song.mp3');
let masterPlay  = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let wave = document.getElementById('wave');
let songItem = Array.from( document.getElementsByClassName('songItem'));
let songMainTitle = document.getElementById('songMainTitle');


let songs = [
    {songName:"Walking Home.", filePath : "img/song.mp3",coverPath:"img/mqdefault_6s.webp"},
    {songName:"Tuj-me rab", filePath : "img/song1.mp3",coverPath:"img/mqdefault_6s.webp"},
    {songName:"Manasinga yaru", filePath : "img/song2.mp3",coverPath:"img/mqdefault_6s.webp"},
    {songName:"Nuavni", filePath : "img/song3.mp3",coverPath:"img/mqdefault_6s.webp"},
    {songName:"Jai ram", filePath : "img/song4.mp3",coverPath:"img/mqdefault_6s.webp"},
    {songName:"How Are You", filePath : "img/song5.mp3",coverPath:"img/mqdefault_6s.webp"},
    
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// let audioElement = new Audio ('img/song.mp3');


//hanidling the master play
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        wave.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        wave.style.opacity = 0;


    }
    
})

//listening events
audioElement.addEventListener('timeupdate',()=>{
    //update seek
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;

})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})



const makeAllPlay  = ()=>{
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}




Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`img/song${songIndex+1}.mp3`;
        songMainTitle.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        wave.style.opacity = 1;
    })
})


//Next function
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=5) {
       songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`img/song${songIndex+1}.mp3`;
    songMainTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


//Previous function
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
       songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`img/song${songIndex+1}.mp3`;
    songMainTitle.innerText = songs[songIndex].songName + "Ad";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})