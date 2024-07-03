const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Array to store todo items
let todos = [];

// Add event listener to form submit
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get todo text from input
    let todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        // Add todo to array
        todos.push(todoText);
        
        // Update the list
        updateTodoList();
        
        // Clear input
        todoInput.value = '';
    }
});

// Function to update the todo list on the UI
function updateTodoList() {
    // Clear existing list items
    todoList.innerHTML = '';
    
    // Loop through todos array and create list items
    todos.forEach(function(todo, index) {
        // Create list item
        let li = document.createElement('li');
        li.textContent = todo;
        
        // Create actions container
        let actions = document.createElement('div');
        actions.classList.add('actions');
        
        // Create edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            editTodo(index);
        });
        
        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTodo(index);
        });
        
        // Append buttons to actions container
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        
        // Append actions container to list item
        li.appendChild(actions);
        
        // Append list item to the todo list
        todoList.appendChild(li);
    });
}

// Function to edit a todo item
function editTodo(index) {
    let newText = prompt('Enter new text for this to-do:', todos[index]);
    if (newText !== null) {
        todos[index] = newText.trim();
        updateTodoList();
    }
}

// Function to delete a todo item
function deleteTodo(index) {
    if (confirm(`Are you sure you want to delete "${todos[index]}"?`)) {
        todos.splice(index, 1);
        updateTodoList();
    }
}
