const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;



// btns.forEach(btn => {
//    btn.addEventListener('click', (event)=>{
//     if(event.currentTarget.classList.contains('decrease')){
//         count--;
//         value.textContent = count;
//         if(count < 0) value.style.color = 'red';
//     } else if(event.currentTarget.classList.contains('increase')){
//         count++;
//         value.textContent = count;
//         if(count > 0) value.style.color = 'green';
//     } else {
//         count = 0;
//         value.textContent = count;
//         value.style.color = "#222";
//     }
//    });
// });



btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.currentTarget.classList);
    if (event.currentTarget.classList.contains("decrease")) {
      count--;
    } else if (event.currentTarget.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) value.style.color = "red";
    if (count > 0) value.style.color = "green";
    if (count === 0) value.style.color = "#222";
    value.textContent = count;
  });
});
