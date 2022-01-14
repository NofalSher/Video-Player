const video=document.getElementById("video");
const play=document.getElementById("play");
const stop=document.getElementById("stop");
const progress=document.getElementById("progress");
const timestamp=document.getElementById("timestamp");

//Function for clicking on video
function toggleVideoStatus(){
    if (video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//   Important:: If we go to  (mdn video) Here we will get all event assosiated ith video element
//  In library we have a play and pause button




//Function for updating play/pause button
function updatePlayIcon(){
    if (video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    }
    else{
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
    }
}
// Function to   update progress
function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100;

    //Set time for timestamp
    let mins=Math.floor(video.currentTime/60);
    if(mins<10){
        mins="0"+String(mins);   // We have converted min to string as string can not be added to number value
    }
    let secs=Math.floor(video.currentTime % 60);// Check why we have done this
    if (secs<10){
        secs="0"+String(secs);
    }
    timestamp.innerHTML= `${mins}:${secs}` ; //
}

// Function to stop video
function stopVideo(){
    video.currentTime=0;
    video.pause();
}

//Set Video progress fucntion using slider
function setVideoProgress(){
    video.currentTime=+(progress.value * video.duration)/100;
}

// Evenrt Listener
//1. Event Listener for  video player
video.addEventListener("click",toggleVideoStatus);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);

//2.Event Listemer for Play Button
play.addEventListener("click",toggleVideoStatus);

//3.Event Listemer for stop Button
stop.addEventListener("click",stopVideo);

//4.Event Listener for progress bar
progress.addEventListener("change",setVideoProgress);