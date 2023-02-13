//addLisenner
let value=0;

document.getElementById('blue-btn').addEventListener('click',function(){
    // valueAdd ++;
    value+=5;
    // console.log(value);
    document.getElementById('counter').innerText=value;
   
})


document.getElementById('btn-success').addEventListener('click',function(){
    value --;
    // console.log(value);
    document.getElementById('counter').innerText=value;
   
})

//event handaler
let value=0;
function makeAdd(){
    value ++;
    document.getElementById('counter').innerText=value;
}

function makeMinus(){
 value--;
 document.getElementById('counter').innerText=value;
}