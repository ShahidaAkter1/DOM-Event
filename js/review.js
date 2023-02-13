//using addListenner

document.getElementById('review-btn').addEventListener('click',function(){
    const myElement = document.getElementById('floatingTextarea2');
    const myElementValue=myElement.value;
    // console.log(myElementValue);
    //create h1 and append 
    const h1=document.createElement('h1');
    h1.innerText=myElementValue;

    const parentChild=document.getElementById('commnet-container');
    parentChild.appendChild(h1);
    //text box empty

    myElement.value='';
})