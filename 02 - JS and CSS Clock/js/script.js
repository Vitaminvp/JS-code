var secondHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
var hand = document.querySelector(".hand");

function setDate(){
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours   = now.getHours();
    
    var secDegrees  = seconds/60 * 360 + 90;
    var minDegrees  = minutes/60 * 360 + 90;
    var hourDegrees = hours/12 * 360 + 90;
    
    if (seconds == 0){
        secondHand.style.transitionDuration = `0.0001s`;
        minHand.style.transitionDuration    = `0.0001s`;
        hourHand.style.transitionDuration   = `0.0001s`;
        console.log(seconds);
    } else{
        secondHand.style.transitionDuration = `0.2s`;
        minHand.style.transitionDuration    = `0.2s`;
        hourHand.style.transitionDuration   = `0.2s`;
    }
    
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform    = `rotate(${minDegrees}deg)`;
    hourHand.style.transform   = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);