// Function to create a new todo item
function createTodoItem(taskName) {
    const todoItem = document.createElement('li');
    todoItem.textContent = taskName;

    const timestamp = document.createElement('span');
    timestamp.textContent = getCurrentDateTime();
    timestamp.style.marginLeft = '10px';
    todoItem.appendChild(timestamp);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        markAsCompleted(todoItem);
    });
    todoItem.appendChild(completeButton);

    return todoItem;
}

// Function to get current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
}

// Function to add a new todo item
function addTodoItem(event) {
    event.preventDefault();
    
    const todoInput = document.getElementById('todo-input');
    const taskName = todoInput.value.trim();
    
    if (taskName === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = createTodoItem(taskName);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

// Function to mark a task as completed
function markAsCompleted(todoItem) {
    const completedList = document.getElementById('completed-list');
    const timestamp = todoItem.querySelector('span').textContent;

    const completedItem = document.createElement('li');
    completedItem.textContent = todoItem.textContent;
    completedItem.classList.add('completed');

    const timestampCompleted = document.createElement('span');
    timestampCompleted.textContent = `Completed on: ${timestamp}`;
    timestampCompleted.style.marginLeft = '10px';
    completedItem.appendChild(timestampCompleted);

    completedList.appendChild(completedItem);
    
    todoItem.remove();
}

// Event listener for form submission
const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', addTodoItem);
