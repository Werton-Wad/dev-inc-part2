import actions from '../controller';

function createCompletedTask(task) {
    const $wrapper = document.createElement('li');
    $wrapper.className = 'list-group-item d-flex w-100 mb-2';
    const $wrapperTextContent = document.createElement('div');
    $wrapperTextContent.className = 'w-100 mr-2';
    const $wrapperTextContentContainer = document.createElement('div');
    $wrapperTextContentContainer.className = 'd-flex w-100 justify-content-between';
    const $title = document.createElement('h5');
    $title.classList.add('mb-1');
    $title.style.color = task.color;
    $title.textContent = `${task.title}`; // title
    const $wrapperPriorityAndDate = document.createElement('div');
    const $priority = document.createElement('small');
    $priority.classList.add('mr-2');
    $priority.textContent = `${task.priority}`
    const $date = document.createElement('small');
    $date.textContent = `${task.date}`; // date
    const $description = document.createElement('p');
    $description.className = 'mb-1 w-100';
    $description.style.color = task.color;
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
    // const $btnComplete = document.createElement('button');
    // $btnComplete.type = 'button';
    // $btnComplete.className = 'btn btn-success w-100';
    // $btnComplete.textContent = 'Complete';
    // $btnComplete.onclick = () => actions.completeTask(task);

    // const $btnEdit = document.createElement('button');
    // $btnEdit.type = 'button';
    // $btnEdit.className = 'btn btn-info w-100 my-2';
    // $btnEdit.textContent = 'Edit';

    const $btnDelete = document.createElement('button');
    $btnDelete.type = 'button';
    $btnDelete.className = 'btn btn-danger w-100';
    $btnDelete.textContent = 'Delete';
    $btnDelete.onclick = () => actions.deleteCompletedTask(task.id);

    $wrapperPriorityAndDate.append($priority, $date);
    $wrapperTextContentContainer.append($title, $wrapperPriorityAndDate);
    $wrapperTextContent.append($wrapperTextContentContainer, $description);
    $dropdownMenuItem1.append($faElepsis);
    $dropdownMenu.append($btnDelete);

    $buttonsWrapper.append($dropdownMenuItem1, $dropdownMenu);
    $wrapper.append($wrapperTextContent, $buttonsWrapper);
    
    return $wrapper;
}

export default createCompletedTask;