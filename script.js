// Get the elements
let inputType = document.getElementById('input-text');
let addButton = document.getElementById('addInput');
let result = document.getElementById('result');
let sortButton = document.getElementById('sort')

// Serves as a store to keep tasks
let dairy = [];

// Function to add a task and update the list
function addTodairy(task) {
    // Creating a new task object
    const newDairy = { task };

    // Adding to the dairy list
    dairy.push(newDairy);

    // Updating the displayed task list
    renderTaskList();
}

// Function to render the task list
function renderTaskList() {
    result.innerHTML = ''; // Clear previous list

    // Loop through dairy array to display each task
    dairy.forEach((item, index) => {
        const droppingList = document.createElement('li');
        droppingList.classList.add('styled-li'); // Apply CSS class
        droppingList.textContent = item.task; // Corrected text content

        // Adding a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Adding a select dropdown
        const select = document.createElement('select');
        const options = [
            { text: 'Work', value: 'work' },
            { text: 'Personal', value: 'personal' },
            { text: 'School', value: 'school' }
        ];

        options.forEach((option) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.text; // Fixed
            optionElement.value = option.value;
            select.appendChild(optionElement);
        });

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn'); // Apply styling

        deleteButton.addEventListener('click', function () {
            // Remove the item from the array
            dairy.splice(index, 1);
            // Re-render the list
            renderTaskList();
        });

        // Append elements to the list item
        droppingList.appendChild(checkbox);
        droppingList.appendChild(select);
        droppingList.appendChild(deleteButton);

        // Append the list item to the result container
        result.appendChild(droppingList);
    });
}

// Event listener for adding tasks (only if input and button exist)
if (inputType && addButton) {
    addButton.addEventListener('click', function () {
        const myDairy = inputType.value.trim();

        if (myDairy) {
            addTodairy(myDairy); // Fixed variable name
            inputType.value = ''; // Clear input after adding
        }
    });
}
console.log(dairy)
sortButton.addEventListener('click', function(){
    dairy.sort(); //sort alphabetically
    renderTaskList() //update ui
})
console.log(dairy)
