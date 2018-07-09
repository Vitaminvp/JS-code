
function Rect(name, w, h) {
    this.rect = document.createElement("div");
    this.rect.innerHTML = name;
    this.rect.style.position = "absolute";
    this.rect.style.visibility = "hidden"
    this.rect.style.width = w + "px";
    this.rect.style.height = h + "px";
    this.rect.style.backgroundColor = "hsl(" + Math.floor(Math.random()*(360 + 1)) +", 75%, 50%)";
}
Rect.prototype.bg = function () {
    this.rect.style.backgroundColor = "hsl(" + Math.floor(Math.random()*(360 + 1)) +", 75%, 50%)";
    this.rect.style.transition = "all 0.8s ease";

};

Rect.prototype.show = function (x, y) {
    this.rect.style.visibility = "visible";
    this.rect.style.border = "1px solid gray";
    this.rect.style.top = x + "px";
    this.rect.style.left = y + "px";
    if(this.rect.parentNode != document.body){
        document.body.appendChild(this.rect);
    }
};
Rect.prototype.move = function (direction, length) {
    if(direction == "left"){
        if((parseInt(window.getComputedStyle(this.rect, null)[direction]) - length) < 0){
            this.rect.style.left = window.innerWidth/2 + "px";
        }else{
            this.rect.style.left = parseInt(window.getComputedStyle(this.rect, null)[direction]) - length + "px";
        }
    }
    else if(direction == "right"){
        console.log(window.getComputedStyle(this.rect, null)["left"] + length);
        console.log(window.innerWidth);
        if((parseInt(window.getComputedStyle(this.rect, null)["left"]) + length) > window.innerWidth - length){
            this.rect.style.left = window.innerWidth/2 + "px";
        }else{
            this.rect.style.left = parseInt(window.getComputedStyle(this.rect, null)["left"]) + length +"px";
        }
    }
    else if(direction == "top"){
        if((parseInt(window.getComputedStyle(this.rect, null)["top"]) - length) < 0){
            this.rect.style.top = window.innerHeight/2 + "px";
        }else{
            this.rect.style.top = parseInt(window.getComputedStyle(this.rect, null)["top"]) - length +"px";
        }
    }
    else if(direction == "bottom"){
        console.log(window.getComputedStyle(this.rect, null)["top"] + length);
        console.log(window.innerWidth);
        if((parseInt(window.getComputedStyle(this.rect, null)["top"]) + length) > window.innerHeight - length){
            this.rect.style.top = window.innerHeight/2 + "px";
        }else{
            this.rect.style.top = parseInt(window.getComputedStyle(this.rect, null)["top"]) + length +"px";
        }
    }
};

const rectangle = new Rect("Some TEXT", 100, 100);

const btn = document.querySelector(".show");
btn.addEventListener("click", function (e) {
    rectangle.show(document.documentElement.clientHeight/2 - 100, document.documentElement.clientWidth/2 - 100);
     let timer = setInterval(function () {
        rectangle.bg();
     }, 1000);

});
const left = document.querySelector(".left");
left.addEventListener("click", function (e) {
    rectangle.move("left", 100);
});

const right = document.querySelector(".right");
right.addEventListener("click", function (e) {
    rectangle.move("right", 100);
});

const topp = document.querySelector(".top");
topp.addEventListener("click", function (e) {
    rectangle.move("top", 100);
});
const bottom = document.querySelector(".bottom");
bottom.addEventListener("click", function (e) {
    rectangle.move("bottom", 100);
});

