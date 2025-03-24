// Get the elements
let inputType = document.getElementById('input-text');
let addButton = document.getElementById('addInput');
let result = document.getElementById('result');
let sortButton = document.getElementById('sort');


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
// console.log(addTodairy(task));


// Function to render the task list
function renderTaskList() {
    result.innerHTML = ''; // Clear previous list

    // Loop through dairy array to display each task
    dairy.forEach((item, index) => {
        const droppingList = document.createElement('li');  //want the result to be in li for
        droppingList.classList.add('styled-li'); // Apply CSS class
        droppingList.textContent = item.task; // Corrected text content
        // alert('select category ')
        // Adding a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check')
        checkbox.addEventListener('click', function () {
            alert('task completed')
        })

        // Adding a select dropdown
        const select = document.createElement('select');
        const options = [
            { text: 'choose', value: '' },
            { text: 'Work', value: 'work' },
            { text: 'Personal', value: 'personal' },
            { text: 'School', value: 'school' }
        ];

        options.forEach((option) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.text; // Fixed
            optionElement.value = option.value;
            select.appendChild(optionElement);  //appending it to an element
        });

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn'); // Apply styling
{
        deleteButton.addEventListener('click', function () {

            if (deleteButton.click) {
                document.getElementById('confirmation').style.display = 'block';
                let Yes = document.getElementById('yes');
                Yes.addEventListener('click', function () {
                    // Remove the item from the array
                    dairy.splice(index, 1);
                    // Re-render the list
                    renderTaskList();
                    document.getElementById('confirmation').style.display = 'none';


                })
                if (deleteButton.click) {
                    let No = document.getElementById('No');
                    No.addEventListener('click', function () {
                        document.getElementById('confirmation').style.display = 'none';
                    })
                }


            }
        });
    }
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
            alert('Add the category in the list select option')
        } else {
            alert('pls input and select a category')
        }
    });
}
// console.log(dairy)
sortButton.addEventListener('click', function () {
    dairy.sort((a, b) => a.task.toLowerCase().localeCompare(b.task.toLowerCase())); //sort alphabetically
    renderTaskList() //update ui
})

