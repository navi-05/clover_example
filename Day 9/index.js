const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  // ^ Container Div
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {

    // * Child 1 - List Item (taskItem)
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) {
      taskItem.classList.add('completed');
    }

    // * Child 2 - Task Text
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text;

    // * Child 3 - Task Actions
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // * Child 3 - Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    // * Child 4 - Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

renderTasks();