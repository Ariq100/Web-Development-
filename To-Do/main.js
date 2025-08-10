// Set the onclick event handler for the "Add" button
document.getElementById('AddBtn').onclick = function() {
    // Get the input element where the user types the task
    const input = document.getElementById('Add');
    // Get the trimmed value of the input (remove whitespace)
    const task = input.value.trim();
    // If the input is not empty
    if (task) {
        // Create a new list item element for the task
        const li = document.createElement('li');
        // Set the text of the list item to the task
        li.textContent = task;
        // Add the new list item to the task list in the DOM
        document.getElementById('TaskList').appendChild(li);
        // Clear the input box for the next task
        input.value = '';
    }
};