function toLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default toLocalStorage;