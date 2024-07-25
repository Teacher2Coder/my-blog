const emoji = document.querySelector('.emoji');
const bodyEL = document.querySelector('.bg');
const logo = document.querySelector('.custom')

let mode = "dark";
emoji.textContent = "🌑";
logo.setAttribute('src', 'assets/images/logo-dark.png')

emoji.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        emoji.textContent = "☀️";
        bodyEL.setAttribute('class', 'light');
        logo.setAttribute('src', 'assets/images/logo-light.png');
    } else {
        mode = 'dark';
        emoji.textContent = "🌑";
        bodyEL.setAttribute('class', 'dark');
        logo.setAttribute('src', 'assets/images/logo-dark.png');
    }
});