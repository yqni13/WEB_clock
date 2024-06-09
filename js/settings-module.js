
export var selectedTheme = '';

export function selectTheme(option) {
    selectedTheme = option;
}

export function openSettings() {
    const container = document.getElementById('wrapper');
    container.innerHTML = '';
}