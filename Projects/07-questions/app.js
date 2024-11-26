// traversing the dom
// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach((btn)=>{
//     btn.addEventListener('click', (event)=>{
//         const question = event.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');
//     });
// });



// using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', (event)=>{

        // open one question one at a time or will close the already opened question and open clicked one.
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});