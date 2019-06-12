// Define UI Vars 
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();


// Load all event listeners with function
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // add a class
    li.classname = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add a class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    // append the link to li
    li.appendChild(link);

    // append li to ul
    tasklist.appendChild(li);

    // clear input 
    taskInput.value = '';

    //prevent the default from happening ( default form submit)
    e.preventDefault();
}
