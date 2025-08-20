let darkTheme = true;

// Fonction pour changer de thème
function toggleTheme(){
    darkTheme = !darkTheme;
    document.body.classList.toggle("light-theme", !darkTheme)
    getThemeIcon();
}

// Fonction pour récupérer l'icon du bouton thème
function getThemeIcon() {
    const icon = darkTheme ? "/icons/sun.svg" : "/icons/moon.svg";
    fetch(icon)
        .then(res => res.text())
        .then(html => {
        document.getElementById("theme-icon").innerHTML = html;
        });
}

getThemeIcon();