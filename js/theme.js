export function initThemeToggle() {
    window.toggleTheme = function() {
        const html = document.documentElement;
        const themeButton = document.getElementById('themeButton');
        
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeButton.textContent = '🌚';
        } else {
            html.classList.add('dark');
            themeButton.textContent = '🌞';
        }
    }
}