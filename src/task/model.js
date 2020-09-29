import { utilis } from '../utilis';
import toLocalStorage from '../localStorage';

const state = {
    tasks: [],
    completedTasks: [],
}
if (localStorage.getItem('toDo')) {
    state.tasks = JSON.parse(localStorage.getItem('toDo'));
}
if (localStorage.getItem('completed')) {
    state.completedTasks = JSON.parse(localStorage.getItem('completed'));
}

function getTasks(type) {
    switch(type) {
        case 'toDo':
            return state.tasks;
        case 'completed':
            return state.completedTasks;
        default:
            return [...state.tasks, ...state.completedTasks];
    }
}

function addTask(task) {
    state.tasks.push({ ...task });
    toLocalStorage('toDo', state.tasks);
    return state.tasks;
}

function getTask(id, type) {
    let tasks = [];
    switch (type) {
        case 'toDo':
            tasks = state.tasks;
            break;
        case 'completed':
            tasks = state.completedTasks;
            break;
        default:
            tasks = [...state.tasks, ...state.completedTasks];
    }
    return tasks.find(task => task.id === id);
}
function editTask(id, editedTask) {
    state.tasks = state.tasks.map(task => {
        return task.id !== id ? task : editedTask
    });
    toLocalStorage('toDo', state.tasks);
    return state.tasks;
}
function deleteTask(id, type) {
    if (type === 'toDo') {
        state.tasks = state.tasks.filter(task => task.id !== id);
        toLocalStorage(type, state.tasks);
        return state.tasks;
    } else if (type === 'completed') {
        state.completedTasks = state.completedTasks.filter(task => task.id !== id);
        toLocalStorage(type, state.completedTasks);
        return state.completedTasks;
    }
}

function sortTasks(value) {
    let flag = (value === 'Z') ? 1 : -1;
    let sortedTasks = [...state.tasks].sort((a, b) => {
        if (utilis.getDate(a.date) < utilis.getDate(b.date)) {
            return 1 * flag;
        } else {
            return -1 * flag
        }
    });
    return sortedTasks;
}

function completeTask(task) {
    state.completedTasks.push(task);
    toLocalStorage('completed', state.completedTasks);
    return state.completedTasks;
}

const taskModel = {
    getTasks,
    addTask,
    deleteTask,
    getTask,
    completeTask,
    editTask,
    sortTasks,
};

export default taskModel;