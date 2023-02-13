//1.tag className
const tagList=document.getElementsByTagName('h1');
// for (const tag of tagList){
//     tag.style.color = 'red';
// }
// or for loop
// for (let i=0; i<tagList.length; i++){
//     // console.log(tagList[i]);
//     console.log(tagList[i].innerText);
//     tagList[i].style.color = 'red';
// }

//2.className
const classList=document.getElementsByClassName('test');
// for (const value of classList){
//     console.log(value.innerText);
//     value.style.backgroundColor='green';
// }

//3.Id
const myHeading=document.getElementById('heading');
// console.log(myHeading);
// console.log(myHeading.innerText);
// myHeading.style.color='pink';
// myHeading.style.textAlign='center';
// document.getElementById('heading').style.color='pink';

//4.queryselector
const myElement= document.querySelector(".test");
// console.log(myElement);
// console.log(myElement.innerText);

// const myElement1= document.querySelector("#heading");
// console.log(myElement1);
// console.log(myElement1.innerText);

//5.querySelectorAll
const mySelector= document.querySelectorAll(".test");
// console.log(mySelector);
// console.log(mySelector.innerText);
// //for of loop using
// for(const value of mySelector){
//    console.log(value.innerText);
// }

//dynamic way-manipulating css
const myValue=document.getElementById('first-heading');
// myValue.style.color='red';
// myValue.style.backgroundColor='pink';
// myValue.style.padding='20px';
// myValue.style.margin='10px';




