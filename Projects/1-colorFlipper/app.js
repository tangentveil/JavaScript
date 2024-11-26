const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'aqua', 'wheat', 'aquamarine'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    // const randomNumber = getRandomNumber();

    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function getRandomNumber(){
//     let num = Math.random();
//     num = Math.floor(num*colors.length);
//     return num;
// }