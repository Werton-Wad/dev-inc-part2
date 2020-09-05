let darkMode = localStorage.getItem('darkMode');

function enabledDarkMode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

function disabledDarkMode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enabledDarkMode();
}

const theme = {
    enabledDarkMode: enabledDarkMode,
    disabledDarkMode: disabledDarkMode,
}

export default theme;