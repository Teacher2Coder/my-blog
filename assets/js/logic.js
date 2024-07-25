const emoji = document.querySelector('.emoji');
const bodyEL = document.querySelector('.bg');


let mode = "dark";
emoji.textContent = "🌑";

emoji.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        emoji.textContent = "☀️";
        bodyEL.setAttribute('class', 'light');
    } else {
        mode = 'dark';
        emoji.textContent = "🌑";
        bodyEL.setAttribute('class', 'dark');
    }
});