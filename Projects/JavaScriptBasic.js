
// https://www.youtube.com/watch?v=2Ji-clqUYnA&t=2756s




// const btn = document.querySelectorAll(".btn");

// btn.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         alert('Hello World');
//     });
// });

// ************************************************

// document.write('hello');
// document.write({name :"hello"});
// alert('hello');
// console.log('hello');

//***********************************************

// let address, zip;
// address = "kldfnjklsdnf";
// zip = 135153;
// console.log(address, zip);

// ************************************************

// let number1 = '45';
// let number2 = '55';

// //todo - Implicit Type Conversion

// console.log(number1-number2);   // -10
// console.log(number1+number2);  // 4555

// let number4 = 64;
// let number5 = '45';
// console.log(number4-number5, number4+number5);  // 19, 6445

// ************************************************

// function funcName(a, b){
//     console.log("Function invokation");
//     console.log(a+b);
//     return a+b;
// }

// funcName("dfdsf ", 4);
// let res = funcName(65646, 3545634);
// console.log(res);


// Another Way ---> Function Expression
// const add = function (a, b){
//     return a+b;
// };
// console.log(add(464, 4));


// Arrow Function
// const add = (a, b) => a+b;
// console.log(add(45, 5));

// ************************************************

// Object

// const person = {
//     name : "Ani",
//     last : "ghjgv",
//     age : 21,
//     education : true,
//     arr : ['sdf', 45634],
//     greet : function (){
//         console.log('hello');
//     },
//     greeting(){
//         console.log('hello');
//     },
// };

// console.log(person.arr);
// console.log(person.age);
// person.age = 22;
// console.log(person.age);
// person.greet();
// person.greeting();

// **************************************************

//  ==  checks only value
//  === checks value and type

// let a = 6;
// let b = '6';

// console.log(a == b);   // true
// console.log(a === b);  // false

// console.log(a != b);   // false
// console.log(a !== b);   // true

// *************************************************

// let str = " Anirudha";
// console.log(str.trim().toLowerCase().startsWith('a'));  // true
// console.log(str.includes('r'));  // true
// console.log(str.slice(0, 2)); // A -> index 2 is excluded. 
// console.log(str.slice(-2));   // ha

// ************************************************

// Template litrals - ES6+ ---->  `${}`

// const nam = ['anna', 'susy', 'bob'];
// const lastname = 'asdas';
// let newArr = [];

// for(let i = 0; i < nam.length; i++){
//     // let temp = nam[i].concat(" ", lastname);
//     // newArr.push(temp);

//     newArr.push(`${nam[i]} ${lastname}`);
// }

// console.log(nam);
// console.log(newArr);
// // for(let i = 0; i < newArr.lenght; i++){
// //     console.log(newArr[i]);
// // }

// ***********************************************

// todo CallBack Fucntion

// function morning(name){
//     return `Good Morning ${name.toUpperCase()}`;
// }

// function greet(name, callback){   // higher Order Function
//     console.log(`${callback(name)}, my name is John`);
// }

// greet('bobo', morning);
// greet('susy', morning);

// ************************************************

// ForEach

// const people = [
//     {
//         name: 'bob',
//         age: 20,
//         position: 'developer',
//         id: 1,
//         salary: 200
//     },
//     {
//         name: 'peter',
//         age: 25,
//         position: 'designer',
//         id: 2,
//         salary: 300
//     },
//     {
//         name: 'susy',
//         age: 30,
//         position: 'the boss',
//         id: 3,
//         salary: 500
//     }
// ];

// function showPersons(person){
//     console.log(person.name.toUpperCase());
// }

// Callback function
// people.forEach(showPersons);



// people.forEach(function(item){
//     console.log(item.position);
// });



// map

// const ages = people.map(function(person){
//     // console.log(person);
//     return person.age+10;
// });

// const newpeople = people.map(function(person){
//     return {first: person.name.toLocaleLowerCase(),
//     oldAge: person.age + 20,};
// });

// const names = people.map(function(person){
//     return `<h1>${person.name}</h1>`;
// });
// document.body.innerHTML = names.join('');

// console.log(newpeople);




// filter

// const youngpeople = people.filter(function(person){
//     return person.age <= 25;
// });
// console.log(youngpeople);

// youngpeople1 = people.filter(function(person){
//     return person.position === 'developer';
// });
// console.log(youngpeople1);




// find -> unique value

// const lkdsfn = people.find(function(person){
//     return person.id === 2;
// });
// console.log(lkdsfn);

// names = ['bob', 'peter', 'susy'];
// console.log(names.find(function(name){
//     return name === 'bob';
// }));




// reduce

// const total = people.reduce(function(totalValue, curr){
//     console.log(`total ${totalValue}`);
//     console.log(`curr money ${curr.salary}`);
//     totalValue += curr.salary;
//     return totalValue;
// }, 0); // return type for array [], for object {}

// console.log(total);

// ****************************************************

// getElementById, getElementsByTagName, getElementsByClassName

// document.body.style.backgroundColor = 'aqua';
// document.body.style.color = 'yellow';

// const h1 = document.getElementById('title');
// h1.style.color = 'aqua';

// const btn = document.getElementById('btn');
// btn.style.backgroundColor = 'yellow';
// btn.style.color = 'red';

// const list_a= document.getElementsByTagName('a');
// // list[3].style.color = 'aqua';
// const lists = [...list_a];   // we have to tranform in array from list
// lists.forEach(element=>{
//     element.style.color = 'orange';
// });

// ****************************************************

// childern element

// const result = document.querySelector('#result');
// const allChidern = result.childNodes; // including white spaces

// const childern = result.children;
// console.log(childern); // excluding white spaces

// console.log(result.firstChild);
// console.log(result.lastChild);



// Parent element

// const li = document.querySelector('li');
// console.log(li.parentElement);
// console.log(li.parentElement.parentElement);
// li.parentElement.style.color = 'red';



// sibling element

// We have to takecare of white spaces
// const first = document.querySelector('.first');
// console.log(first);

// const second = (first.nextSibling.nextSibling.style.color = 'red');


// const last = document.querySelector('.last');
// console.log(first);

// const last_second = (last.previousSibling.previousSibling.style.color = 'aqua');


// Don't have to care about white spaces
// const first = document.querySelector('.first');

// const second = (first.nextElementSibling.style.color = 'red');


// const last = document.querySelector('.last');
// console.log(first);

// const last_second = (last.previousElementSibling.style.color = 'aqua');


// **************************************************

// nodeValue, textContent

// const item = document.getElementById('navbar');
// const value = item.firstChild.nodeValue;
// console.log(value);


// // textContent
// const easyValue = item.textContent;
// console.log(easyValue);

// ***********************************************

// getAttribute(), setAttribute()

// const element = document.querySelector('.btn');
// const classValue = element.getAttribute('class');
// console.log(classValue);

// *********************************************

// className, classList

// const btn = document.querySelector('.btn');
// btn.className = 'demo textDemo';



// const btn = document.querySelector('.btn');
// btn.classList.add('demo', 'textDemo');

// let res = btn.classList.contains('demo');

// if(res){
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// **********************************************

// createElement('element'), createTextNode, element.appendChild(childElement)

// const bodyDiv = document.createElement('h1');
// const text = document.createTextNode('A simple body div Dynamically');

// bodyDiv.append(text);
// bodyDiv.classList.add('color');
// document.body.appendChild(bodyDiv);



// insertBefore
// replaceChild(newchild, oldchild)


// prepand
// innerText
// const bodyDiv = document.createElement('h1');
// bodyDiv.innerText = 'A simple body div Dynamically';
// document.body.prepend(bodyDiv);



// remove(), removeChild()

// const res = document.querySelector('#title');
// res.remove();


// const res = document.querySelector('#navbar');
// const child = document.querySelector('#child');
// res.removeChild(child);

// ******************************************

// innerHTML, textContent

// ***************************************

// using classList is better than doing individually

// const res = document.querySelector('#title');
// // res.style.backgroundColor = 'aqua';
// // for font, fontweight we have to add more lines

// res.classList.add('color', 'text'); // can add more

// *************************************************

// clickEvent
// const res = document.querySelector('#title');
// const child = document.querySelector('#child');

// const btn = document.querySelectorAll('.btn');
// btn.forEach((btns)=>{
//     btns.addEventListener('click', (event)=>{
//         res.classList.add('color', 'text');
//         child.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid reprehenderit minima voluptatem aliquam delectus nesciunt, officia nisi a similique nihil ipsa. Tenetur voluptatibus nemo porro rem incidunt quasi sint tempora!`;
//     });
// });




// function reference, callBack
// const res = document.querySelector('#title');
// const btn = document.querySelector('.btn');

// function changeColors(){
//     let hasClass = res.classList.contains('color');
//     if(hasClass){
//         res.classList.remove('color');
//     } else res.classList.add('color', 'text');
// }

// btn.addEventListener('click', changeColors);



// Other options ---> mouseup, mousedown, 
// hover effects ----> mouseenter, mouseleave

// keypress, keydown, keyup

// ************************************************

// Event Object
// event.type
// event.currentTarget
// 'this' keyword
// target
// preventDefault(e)  // e or event

// const res = document.querySelector('#title');
// const child = document.querySelector('#child');

// const btn = document.querySelectorAll('.btn');
// btn.forEach((btns)=>{
//     btns.addEventListener('click', (event)=>{
//         res.classList.add('color', 'text');

//         event.currentTarget.classList.add('color', 'text');
//     });
// });


// ************************************************

// Event Bubbling Capturing
// allows select dynamic elements

// event propogation
// event bubbling
// event capturing

// *******************************************

// Form Submit
// submit event listener
// prevent default

// ******************************************

// Local Storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'Ani');   // saved
// sessionStorage.setItem('name', 'Ani');   // temp

// const name = localStorage.getItem('name');
// console.log(name);

// localStorage.removeItem('name');

// **********************************************

// JSON.stringify(), JSON.parse()

// const friends = ['bob', 'susy', 'anna'];
// localStorage.setItem('friends', JSON.stringify(friends));

// const value = JSON.parse(localStorage.getItem('friends'));
// console.log(values[2]);



let fruits;
if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'));
} else{
    fruits = [];
}

console.log(fruits);
fruits.push('apple');

localStorage.setItem('fruits', JSON.stringify(fruits));