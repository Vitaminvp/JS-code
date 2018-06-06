var inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", changeValue));
inputs.forEach(input => input.addEventListener("mousemove", changeValue));

function changeValue(e){
    console.log(this.value);
    
    
}