const box = document.querySelector('.box');
console.log(box);
box.addEventListener('click', function (){
    let first = 'opening';
    let second = 'open';
    if(this.classList.contains(first)) [first, second] = [second, first];
    this.classList.toggle(first);
    setTimeout(()=> this.classList.toggle(second), 500);
});