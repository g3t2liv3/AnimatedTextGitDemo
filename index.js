//function to change color

function randomRGB () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

//gets the class and executes the code
const letters = document.querySelectorAll('.letters');

setInterval(function(){
for(let letter of letters) {
    letter.style.color = randomRGB();
}    
}, 2000)