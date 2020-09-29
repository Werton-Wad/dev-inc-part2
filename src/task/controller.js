import taskModel from './model';
import renders from './view';
import { utilis } from '../utilis';
import { view } from './view';

function init() {
    const savedToDoTasks = JSON.parse(localStorage.getItem('toDo'));
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completed'));
    if (savedToDoTasks && savedToDoTasks.length) {
        renders.renderTasks(savedToDoTasks);
    }
    if (savedCompletedTasks && savedCompletedTasks.length) {
        renders.renderCompletedTasks(savedCompletedTasks);
    }
    view();
  }

function createTask(e) {
    e.preventDefault();
    const { inputTitle, inputText, gridRadios } = e.target.elements;
    const newTask = {
        id: utilis.setId(),
        title: inputTitle.value,
        description: inputText.value,
        priority: gridRadios.value,
        date: utilis.convertDate(new Date()),
        color: utilis.setColor(gridRadios.value),
    };
    const updatedTasks = taskModel.addTask(newTask);
    renders.renderTasks(updatedTasks);             
    e.target.reset(); 
}

function completeTask(id) {
    const finedTask = taskModel.getTask(id, 'toDo');
    deleteTask(id, 'toDo');
    const completedTasks = taskModel.completeTask(finedTask);
    renders.renderCompletedTasks(completedTasks);
}

function editTask(e, id) {
    e.preventDefault();
    const { inputEditTitle, inputEditText, gridRadios } = e.target.elements;
    const newTask = {
        id: id,
        title: inputEditTitle.value,
        description: inputEditText.value,
        priority: gridRadios.value,
        date: utilis.convertDate(new Date()) + ' (edited)',
        color: utilis.setColor(gridRadios.value),
    };
    const updatedTasks = taskModel.editTask(id, newTask); 
    renders.renderTasks(updatedTasks);
    e.target.reset();
}

function sortTasks(value) {
    const sortedTasks = taskModel.sortTasks(value);
    renders.renderTasks(sortedTasks);
}

function getTasks(type) {
    return taskModel.getTasks(type);
}

function dropCompletedTasks(id) {
    const task = taskModel.getTask(id, 'completed');
    const updatedTasks = taskModel.addTask(task);
    deleteTask(id, 'completed');
    renders.renderTasks(updatedTasks);
}

function deleteTask(id, type) {
    const updatedTasks = taskModel.deleteTask(id, type);
    switch(type) {
        case 'toDo':
            renders.renderTasks(updatedTasks);
            break;
        case 'completed':
            renders.renderCompletedTasks(updatedTasks);
            break;
    }
}

const actions = {
    init,
    createTask,
    deleteTask,
    completeTask,
    editTask,
    sortTasks,
    getTasks,
    dropCompletedTasks,
};

export default actions;