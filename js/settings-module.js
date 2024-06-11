
export var selectedTheme = '';

export function selectTheme(option) {
    selectedTheme = option;
}

export function openSettings() {
    buildSettingsPage();
}

function buildSettingsPage() {
    const container = document.getElementById('wrapper');
    container.innerHTML = '';
    container.style.display = 'none';
    
    document.getElementById('wrapper-settings').style.display = "flex";
}