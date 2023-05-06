// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event listener for add task button
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task', 'text-black', 'w-full', 'bg-white','p-5', 'mb-2', 'flex', 'justify-between');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    li.classList.add('flex-auto', 'list-none');
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask', 'flex-1', 'rounded-lg', 'text-green-500', 'mr-2', 'border-2', 'text-base', 'border-green-500');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteTask', 'flex-1', 'rounded-lg', 'text-red-500', 'border-2', 'text-base', 'border-red-500');
    task.appendChild(deleteButton);

    if(inputTask.value === ''){
        alert('Please input a task!');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
});