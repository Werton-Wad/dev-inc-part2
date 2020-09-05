import taskModel from './model';
import renders from './view';
import { utilis } from '../utilis';
import { view } from './view';

function init() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks && savedTasks.length) {
        renders.renderTasks(savedTasks);
    }
    view();
  }

function createTask(e) {
    e.preventDefault();
    const { inputTitle, inputText, gridRadios, inputColor } = e.target.elements;
    const newTask = {
        title: inputTitle.value,
        description: inputText.value,
        priority: gridRadios.value,
        date: utilis.convertDate(new Date()),
        color: inputColor.value,
    };
    const updatedTasks = taskModel.addTask(newTask);
    renders.renderTasks(updatedTasks);             
    e.target.reset(); 
}

function deleteTask(id) {
    const updatedTasks = taskModel.deleteTask(id);
    renders.renderTasks(updatedTasks);
}

function completeTask(task) {
    deleteTask(task.id);
    const completedTasks = taskModel.completeTask(task);
    renders.renderCompletedTasks(completedTasks);
}

function deleteCompletedTask(id) {
    const updatedTasks = taskModel.deleteCompletedTask(id);
    renders.renderCompletedTasks(updatedTasks);
}

function editTask(e, id) {
    e.preventDefault();
    const { inputEditTitle, inputEditText, gridRadios, inputEditColor } = e.target.elements;
    const newTask = {
        title: inputEditTitle.value,
        description: inputEditText.value,
        priority: gridRadios.value,
        date: utilis.convertDate(new Date()) + ' (edited)',
        color: inputEditColor.value,
    };
    const updatedTasks = taskModel.editTask(id, newTask); 
    renders.renderTasks(updatedTasks);
    e.target.reset();
}

function sortTasks(value) {
    const sortedTasks = taskModel.sortTasks(value);
    renders.renderTasks(sortedTasks);
}



const actions = {
    init,
    createTask,
    deleteTask,
    completeTask,
    deleteCompletedTask,
    editTask,
    sortTasks,
};

export default actions;