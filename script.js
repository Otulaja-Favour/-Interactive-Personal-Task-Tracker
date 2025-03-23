let inputType = document.getElementById('input-text');
let addButton = document.getElementById('addInput');
let result = document.getElementById('result');

//serves as a store to store all list
let dairy = [];
console.log(dairy);


//fuction to add a object and push to the main store
function addTodairy(task){
    //creating a new dairy
const newDairy = {task};

//adding it to the dairy main up
dairy.push(newDairy);

// i need to make it be updated with each display of task of the task list
renderTaskList();
}
console.log(addTodairy(task));


//need to render the task list
inputType.innerHTML = '';

//looping through the array to create a new i tem for each task
dairy.forEach((task, index) => {

    //creating a new html element with javascript
    const droppingList = document.createElement('li');

    // setting the display  for the li
    droppingList.textContent = task;

    //adding a check box to the li
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const select = document.createElement('select');
    select.type = 
})