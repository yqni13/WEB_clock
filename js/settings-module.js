var settingTheme = 'darkmode';
export var settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';

export var selectedTheme;

export function selectTheme(option) {
    selectedTheme = option;
}

export function openSettings() {
    settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';
    buildSettingsPage();
    console.log("enter settings page");
}

function buildSettingsPage() {
    const container = document.getElementById('wrapper');
    container.innerHTML = '';
    container.style.display = 'none';
    document.getElementById('dateformat').addEventListener('change', savedSettings, false);
    document.getElementById('wrapper-settings').style.display = "flex";

    setDateFormatSetting();
}

export function savedSettings() {
    var optionsDateFormat = document.getElementById('dateformat');
    settingDateFormat = optionsDateFormat.options[optionsDateFormat.selectedIndex].text
    localStorage.setItem('setting-dateformat', settingDateFormat);
    console.log("dateformat: ", settingDateFormat);
}

function setDateFormatSetting() {
    var setting = document.getElementById('dateformat');
    switch(settingDateFormat) {
        case 'mm/dd/yyyy':
            setting.selectedIndex = 0;
            break;
        case 'dd.mm.yyyy':
            setting.selectedIndex = 1;
            break;
        case 'yyyy-mm-dd':
            setting.selectedIndex = 2;
            break;
        case 'dd-mm-yyyy':
            setting.selectedIndex = 3;
            break;
        default:
            setting.selectedIndex = 1;
    }
}