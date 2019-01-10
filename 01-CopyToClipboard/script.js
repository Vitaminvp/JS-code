
const items = document.querySelectorAll('.cursors li');

function handleClick() {
    /*
      Copy to clipboard
    */
    const clipboardInput = document.querySelector('[name="clipboard"]');
    clipboardInput.value = this.dataset.css || ' ';
    clipboardInput.select();
    document.execCommand('copy');

    this.classList.add('copied');
    setTimeout(()=>this.classList.add('copied-active'))
    this.addEventListener('transitionend', ()=> {
        this.classList.remove('copied','copied-active');
});
}

Array.from(items).forEach(item => item.addEventListener('click', handleClick));

// Копирование без inputa на странице.
// function copyToClipboard(text){
//     var dummy = document.createElement("input");
//     document.body.appendChild(dummy);
//     dummy.setAttribute('value', text);
//     dummy.select();
//     document.execCommand("copy");
//     document.body.removeChild(dummy);
// }
// copyToClipboard('Hello, World!')