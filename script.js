const switchBtn = document.querySelector('.switch');
const body = document.body;

const theme = localStorage.getItem('theme');
const input = document.getElementsByTagName('input');



switchBtn.addEventListener('change', () => {
    console.log(switchBtn.checked)
})
if (theme) {
    body.classList.remove('dark');
    body.classList.add(theme);
}
if (theme === 'light') {
    switchBtn.checked = true;
}

switchBtn.addEventListener('change', () => {
    if (switchBtn.checked == true) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');

    } else if (switchBtn.checked == false) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }
})

