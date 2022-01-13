const video=document.getElementById("video");
const play=document.getElementById("play");
const stop=document.getElementById("stop");
const progress=document.getElementById("progress");
const timestampdocument.getElementById("timestamp");

//Function for clicking video
// Evenrt Listener
//1. Event Listener for  video player
video.addEventListener("click",toggleVideoStatus);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);

//2.Event Listemer for Play Button
play.addEventListener("click",toggleVideoStatus)

//3.Event Listemer for stop Button
stop.addEventListener("click",stopVideo);
