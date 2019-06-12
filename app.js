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
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    tasklist.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}


// Get tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }   else {
        // local storage can only store strings so we need to parse it as json when it comes out
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
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
        });
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

    // store in LS
    storeTaskInLocalStorage(taskInput.value);

    // clear input 
    taskInput.value = '';

    //prevent the default from happening ( default form submit)
    e.preventDefault();
}


// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }   else {
        // local storage can only store strings so we need to parse it as json when it comes out
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        // push the task on to the array
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

}


// remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains
        ('delete-item')) {
            if(confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
            }
    }
}


// remove from LS 
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }   else {
        // local storage can only store strings so we need to parse it as json when it comes out
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear tasks
function clearTasks(){
    //tasklist.innerHTML = '';

    // faster
    while(tasklist.firstChild){
        tasksList.removeChild(taskList.firstChild);

    }

    // https://jsperf.com/innerhtml-vs-removechild

    // clear from LS
    clearTasksFromLocalStorage();
}


// clear tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}


// filter tasks
function filterTasks() {
    const text =  e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach();
    (function(tasks){
        const item = task.firstChild.textContent;
        if(item.toLowercase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });
}





