function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    let toggleDarkThemeButton = document.getElementById("toggle-dark-theme");
    toggleDarkThemeButton.classList.toggle("bi-sun");
    toggleDarkThemeButton.classList.toggle("bi-moon");
}