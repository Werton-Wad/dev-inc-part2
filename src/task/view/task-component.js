import actions from '../controller';
import editForm from './editForm';

function createTask(task) {
    console.log(task.color)
    const $wrapper = document.createElement('li');
    $wrapper.className = 'list-group-item d-flex w-100 mb-2';
    const $wrapperTextContent = document.createElement('div');
    $wrapperTextContent.className = 'w-100 mr-2';
    const $wrapperTextContentContainer = document.createElement('div');
    $wrapperTextContentContainer.className = 'd-flex w-100 justify-content-between';
    const $title = document.createElement('h5');
    $title.classList.add('mb-1');
    $title.style.color = task.color; // color
    $title.textContent = `${task.title}`; // title
    const $wrapperPriorityAndDate = document.createElement('div');
    const $priority = document.createElement('small');
    $priority.classList.add('mr-2');
    $priority.textContent = `${task.priority}`
    const $date = document.createElement('small');
    $date.textContent = `${task.date}`; // date
    const $description = document.createElement('p');
    $description.className = 'mb-1 w-100';
    $description.style.color = task.color; // color
    $description.textContent = `${task.description}`; // description
    const $buttonsWrapper = document.createElement('div');
    $buttonsWrapper.className = 'dropdown m-2 dropleft';
    const $dropdownMenuItem1 = document.createElement('button');
    $dropdownMenuItem1.className = 'btn btn-secondary h-100';
    $dropdownMenuItem1.type = 'button';
    $dropdownMenuItem1.id = 'dropdownMenuItem1';
    $dropdownMenuItem1.setAttribute('data-toggle', 'dropdown');
    $dropdownMenuItem1.setAttribute('aria-haspopup', 'true');
    $dropdownMenuItem1.setAttribute('aria-expanded', 'false');
    const $faElepsis = document.createElement('i');
    $faElepsis.className = 'fas fa-ellipsis-v';
    $faElepsis.setAttribute('aria-hidden', 'true');
    const $dropdownMenu = document.createElement('div');
    $dropdownMenu.className = 'dropdown-menu p-2 flex-column';
    $dropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuItem1');

    // buttons
    const $btnComplete = document.createElement('button');
    $btnComplete.type = 'button';
    $btnComplete.className = 'btn btn-success w-100';
    $btnComplete.textContent = 'Complete';
    $btnComplete.onclick = () => actions.completeTask(task);

    const $btnEdit = document.createElement('button');
    $btnEdit.type = 'button';
    $btnEdit.className = 'btn btn-info w-100 my-2';
    $btnEdit.textContent = 'Edit';
    $btnEdit.onclick = () => editForm(task);


    const $btnDelete = document.createElement('button');
    $btnDelete.type = 'button';
    $btnDelete.className = 'btn btn-danger w-100';
    $btnDelete.textContent = 'Delete';
    $btnDelete.onclick = () => actions.deleteTask(task.id);

    $wrapperPriorityAndDate.append($priority, $date);
    $wrapperTextContentContainer.append($title, $wrapperPriorityAndDate);
    $wrapperTextContent.append($wrapperTextContentContainer, $description);
    $dropdownMenuItem1.append($faElepsis);
    $dropdownMenu.append($btnComplete, $btnEdit, $btnDelete);

    $buttonsWrapper.append($dropdownMenuItem1, $dropdownMenu);
    $wrapper.append($wrapperTextContent, $buttonsWrapper);
    
    return $wrapper;
}

export default createTask;





{/* <li class="list-group-item d-flex w-100 mb-2">
<div class="w-100 mr-2">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Title</h5>
        <div>
            <small class="mr-2">High priority</small>
            <small>11:00 01.01.2000</small>
        </div>

    </div>
    <p class="mb-1 w-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.</p>
</div>
<div class="dropdown m-2 dropleft">
    <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
    </button>
    <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
        <button type="button" class="btn btn-success w-100">Complete</button>
        <button type="button" class="btn btn-info w-100 my-2">Edit</button>
        <button type="button" class="btn btn-danger w-100">Delete</button>
    </div>
</div>
</li> */}