const switchBtn = document.querySelector('.switch');
const body = document.body;

const theme = localStorage.getItem('theme');
const input = document.getElementsByTagName('input');

if (input.type == 'checkbox') {
    input.checked = false;
}

if (theme) {
    body.classList.remove('dark');
    body.classList.add(theme);
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

