//Add and Remove Class Name​
//add class name
const addClassName=document.getElementById('first-heading');
//1st-way-->(akhane className holo property)
addClassName.className = 'myclass';
//2nd way==>(akhane classList holo property)
addClassName.classList.add('hello');
//remove class name
addClassName.classList.remove('hello');
