let count=0;
document.getElementById('input-btn').addEventListener('click',function(){
    // console.log('button click');
    count +=1;
  const myElement =   document.getElementById('input-value').value;
 
//   console.log(myElement);

//parent k dhorlam
const parent=document.getElementById('content-container');
//create tr,th,td & append them

// const tr=document.createElement('tr');
// const th=document.createElement('th');
// th.innerText='1';
// const td=document.createElement('td');
// td.innerText='Mark';
// tr.appendChild(td);
// const td1=document.createElement('td');
// td1.innerText='Otto';
// tr.appendChild(td1);
// parent.appendChild(tr);

//template html
const tr=document.createElement('tr');
tr.innerHTML = `
    <th scope="row">${count}</th>
        <td>${myElement}</td>
        <td>
        <button class='btn btn-primary deletebtn'>Delete</button>
        <button class='btn btn-secondary'>Done</button>
        </td>
`;
parent.appendChild(tr);
document.getElementById('input-value').value=''; //input feild empty korbe


//delete button use kore delete korbo 
const elements=document.querySelectorAll('.deletebtn');
// console.log(elements);
for(const value of elements){
    // console.log(value);
    value.addEventListener('click',function(event){
        // console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.style.display = 'none';
    })
}
});

//clear All button dia sob delete korbo

document.getElementById('clear-btn').addEventListener('click',function(event){
    console.log(event.target.parentNode);
    event.target.parentNode.style.display='none';
})
