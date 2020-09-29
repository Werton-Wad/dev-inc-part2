function toLocalStorage(type, tasks) {
    localStorage.setItem(type, JSON.stringify(tasks));
}

export default toLocalStorage;