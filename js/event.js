//evenhandlar-->onclick
function makeRed(){
    document.body.style.backgroundColor='red';
    document.getElementById('heading').innerText="Testing Events";
}

function makeblue(){
    document.getElementById('heading').style.border='3px solid pink';
    document.getElementById('heading').style.borderRadius='30px';
    document.getElementById('heading').style.color='blue';
}

//evenListenner

//using variable
const myEvent=document.getElementById('blue-btn');
myEvent.addEventListener('click',function(){
    document.body.style.backgroundColor='tomato';
    document.getElementById('h2-container').innerText='Teddy';
})

//without variable
document.getElementById('red-btn').addEventListener('click',function(){
    document.body.style.backgroundColor='purple';
})