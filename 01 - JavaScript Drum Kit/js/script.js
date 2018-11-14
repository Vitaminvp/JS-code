var defaultAudio = document.querySelector(`audio[data-key="76"]`);

window.addEventListener("keydown", (e) => {
    
    //console.log(e.keyCode);
    
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //console.log(key);
    //console.log(audio);
    //console.log(defaultAudio);
    
    if(!audio) {
        defaultAudio.currentTime = 0;
        defaultAudio.play();
        return;
    }
    
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing");
    key.addEventListener("transitionend", function(e){
        //console.log(e.propertyName);
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    });
    
});


//const keys = document.querySelectorAll(".key");
////keys.forEach(function(key){
////    key.addEventListener("transitionend", removeTransition);
////});
//keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//
//function removeTransition(e){
//    console.log(e.propertyName);
//    if(e.propertyName !== "transform") return;
//    this.classList.remove("playing");
//}

window.addEventListener("click", function(e){
    var key = e.target.parentElement;
    var keyDataKey = e.target.parentNode.getAttribute("data-key");

    if(keyDataKey){
        key.classList.add("playing");
        key.addEventListener("transitionend", function(e){
//            console.log(e.propertyName);
            if (e.propertyName !== "transform") return;
            this.classList.remove("playing");
        });
    }else return;
    
    var audio =  document.querySelector(`audio[data-key="${keyDataKey}"]`);
    
    audio.currentTime = 0;
    audio.play();
});