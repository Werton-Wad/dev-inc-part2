import actions from '../controller';


const $inputEditTitle = document.querySelector('#inputEditTitle');
const $inputEditText = document.querySelector('#inputEditText');
const $inputEditColor = document.querySelector('#inputEditColor');
const $editForm = document.querySelectorAll('form')[1];
const $editFormItems = document.querySelectorAll('form')[1].elements;

export default function editForm(task) {
    $("#exampleModalEdit").modal('show');
    $inputEditTitle.value = task.title;
    $inputEditText.value = task.description;
    $inputEditColor.value = task.color;
    [...$editFormItems['gridRadios']].find(item => item.value === task.priority).checked = true;
    $editForm.onsubmit = function (e) {
        actions.editTask(e, task.id);
        $("#exampleModalEdit").modal('hide');
    }
}