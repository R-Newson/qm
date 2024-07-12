// static/js/scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme + '-mode');

    const switchTheme = () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(newTheme + '-mode');
        localStorage.setItem('theme', newTheme);
    };

    document.getElementById('theme-switcher').addEventListener('click', switchTheme);
});
