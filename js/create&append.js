//create Element & appand
//create element
const parentContainer = document.getElementById('container-details');
const myLi= document.createElement('li');
myLi.innerText = "four";

// console.log(myLi);
// console.log(myLi.innerText);

//append
parentContainer.appendChild(myLi);

//example-2
const  sectionContainer=document.querySelector('#section-container');
//create a div
const divCreate=document.createElement('div');

//create h1 and put h1 tag into div
const h1=document.createElement('h1');
h1.innerText='Flower List';
divCreate.appendChild(h1);
// console.log(divCreate);
//put div into section
sectionContainer.appendChild(divCreate);
//create ul
const ul=document.createElement('ul');
//create li 
const li=document.createElement('li');
li.innerText='Rose';
//append li into ul
ul.appendChild(li);
//append ul into div
divCreate.appendChild(ul);



