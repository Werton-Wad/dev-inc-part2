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
    $('#toggle-theme').bootstrapToggle({
        on: 'Dark',
        off: 'Light',
        onstyle: 'outline-secondary',
        offstyle: 'outline-primary',
      });

} else {
    $('#toggle-theme').bootstrapToggle({
    on: 'Light',
    off: 'Dark'
  });
}



const theme = {
    enabledDarkMode: enabledDarkMode,
    disabledDarkMode: disabledDarkMode,
}

export default theme;