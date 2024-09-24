
// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `${taskValue} <button onclick="removeTask(this)">Delete</button>`;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Add event listener for "Enter" key press
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
