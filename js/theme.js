let darkTheme = true;

// Fonction pour changer de thème
function toggleTheme(){
    darkTheme = !darkTheme;
    document.body.classList.toggle("light-theme", !darkTheme)
    getThemeIcon();
}

// Fonction pour récupérer l'icon du bouton thème
function getThemeIcon() {
    const icon = darkTheme 
        ? "<span class='material-symbols-outlined'>light_mode</span>" 
        : "<span class='material-symbols-outlined'>dark_mode</span>"

    document.getElementById("theme-icon").innerHTML = icon;
}

document.getElementById("theme-icon").addEventListener('click', toggleTheme)

// Initialiser de l'icône au chargement
getThemeIcon();