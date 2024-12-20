const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        let randomNumber = getRandomNumber();
        // Implicit type Conversion
        hexColor += hex[randomNumber];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber(){
    let num = Math.random(hex.length);
    num = Math.floor(num*hex.length);
    return num;
}