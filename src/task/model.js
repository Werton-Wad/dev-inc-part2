import { utilis } from '../utilis';
import toLocalStorage from '../localStorage';

let tasks = [];
let id = 1;
let completedTasks = [];


if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

function getTasks() {
    return tasks;
}

function addTask(task) {
    tasks.push({ ...task, id: id });
    id++;
    toLocalStorage(tasks);
    return tasks;
}

function getTask(id) {
    let task = tasks.find(task => task.id === id);
    return task;
}

function editTask(id, editedTask) {
    tasks = tasks.map(task => {
        return task.id !== id ? task : editedTask
    });
    toLocalStorage(tasks);
    return tasks;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    toLocalStorage(tasks);
    return tasks;
}

function deleteCompletedTask(id) {
    completedTasks = completedTasks.filter(task => task.id !== id);
    return completedTasks;
}


function sortTasks(value) {
    let flag = (value === 'Z') ? 1 : -1;
    let sortedTasks = [...tasks].sort((a, b) => {
        if (utilis.getDate(a.date) < utilis.getDate(b.date)) {
            return 1 * flag;
        } else {
            return -1 * flag
        }
    });
    return sortedTasks;
}

function completeTask(task) {
    completedTasks.push(task);
    return completedTasks;
}

const taskModel = {
    getTasks,
    addTask,
    deleteTask,
    getTask,
    completeTask,
    deleteCompletedTask,
    editTask,
    sortTasks,
};

export default taskModel;