import createTask from './task-component';
import actions from '../controller';
import createCompletedTask from './completedTask-component';
import theme from '../../dark-mode';

const $bodyForList = document.createElement('ul');
$bodyForList.className = 'list-group flex-wrap justify-content-between';
$bodyForList.id = 'currentTasks';
const $titleToDO = document.getElementById('todo');
const $titleCompleted = document.getElementById('completed');
const $completedTasksList = document.querySelector('#completedTasks');


export function view() {
    const $hr = document.querySelector('hr');
    $hr.parentNode.insertBefore($bodyForList, $hr);
    const $addForm = document.querySelector('form');
    const $btnSortNew = document.getElementById('btn-sort-new');
    const $btnSortOld = document.getElementById('btn-sort-old');
    const $themeMenu = document.querySelector('#theme-menu');
    const $btnDarkModeEnabled = $themeMenu.children[0];
    const $btnDarkModeDisabled = $themeMenu.children[1];

    $addForm.onsubmit = function (e) {
        actions.createTask(e);
        $("#exampleModal").modal('hide');
    }

    $btnSortNew.onclick = () => actions.sortTasks('Z');
    $btnSortOld.onclick = () => actions.sortTasks('A');

    $btnDarkModeEnabled.onclick = theme.enabledDarkMode;
    $btnDarkModeDisabled.onclick = theme.disabledDarkMode;

    $btnDarkModeEnabled.onclick = theme.enabledDarkMode;
    $btnDarkModeDisabled.onclick = theme.disabledDarkMode;
}

function renderCompletedTasks(tasks) {
    $completedTasksList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let createdTask = createCompletedTask(tasks[i]);
        $completedTasksList.append(createdTask);
    }
    $titleCompleted.innerHTML = `Completed (${tasks.length})`;
}

function renderTasks(tasks) {
    $bodyForList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let createdTask = createTask(tasks[i]);
        $bodyForList.append(createdTask);
    }
    $titleToDO.innerHTML = `ToDo (${tasks.length})`;
}

const renders = {
    renderTasks: renderTasks,
    renderCompletedTasks: renderCompletedTasks,
}

export default renders;
