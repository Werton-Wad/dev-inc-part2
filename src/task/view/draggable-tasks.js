import actions from '../controller';

function handleDragOver(e) {
    e.preventDefault();
    e.target.style.fontSize = '2.5rem';
}

function handleDragLeave(e) {
    e.target.style.fontSize = '1.75rem';
}

function handleDrop(e, id) {
    e.stopPropagation();
    e.preventDefault();
    e.target.style.fontSize = '1.75rem';
    let srcId = e.dataTransfer.getData(id);
    if (srcId && id === 'srcId') {
        actions.completeTask(Number(srcId));
    } else if (srcId && id === 'srcIdCompleted') {
        actions.dropCompletedTasks(Number(srcId));
    }
    e.dataTransfer.clearData();
}

export const dragAndDrop = {
    handleDragOver: handleDragOver,
    handleDragLeave: handleDragLeave,
    handleDrop: handleDrop,
}