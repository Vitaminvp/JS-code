var inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", changeValue));
inputs.forEach(input => input.addEventListener("mousemove", changeValue));

function changeValue(e){
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}