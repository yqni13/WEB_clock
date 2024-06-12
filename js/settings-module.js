export var settingTheme = localStorage.getItem('setting-theme') || 'Dark Mode';
export var settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';

const parameterThemes = 'themes'
const parameterDateFormat = 'dateformat'

export function openSettings() {
    settingTheme = localStorage.getItem('setting-theme') || 'Dark Mode';
    settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';

    buildSettingsPage();
}

function buildSettingsPage() {
    const container = document.getElementById('wrapper');
    container.innerHTML = '';
    container.style.display = 'none';
    document.getElementById('themes').addEventListener('change', setNewSettings, false);
    document.getElementById('themes').parameter = parameterThemes;
    document.getElementById('dateformat').addEventListener('change', setNewSettings, false);
    document.getElementById('dateformat').parameter = parameterDateFormat;
    document.getElementById('wrapper-settings').style.display = "flex";

    setThemeOption();
    setDateFormatSetting();
}

export function setNewSettings(param) {
    const option = param.currentTarget.parameter;
    switch(option) {
        case 'themes': {
            var optionThemes = document.getElementById('themes');
            settingTheme  = optionThemes.options[optionThemes.selectedIndex].value;
            localStorage.setItem('setting-theme', settingTheme);
            document.body.setAttribute('data-theme', settingTheme);
            break;
        }
        case 'dateformat': {
            var optionsDateFormat = document.getElementById('dateformat');
            settingDateFormat = optionsDateFormat.options[optionsDateFormat.selectedIndex].text
            localStorage.setItem('setting-dateformat', settingDateFormat);
            break;
        }
        default:
            break;
    }
}

function setThemeOption() {
    var setting = document.getElementById('themes');
    switch(settingTheme) {
        case 'darkmode':
            setting.selectedIndex = 0;
            break;
        case 'lightmode':
            setting.selectedIndex = 1;
            break;
        default:
            setting.selectedIndex = 0;
    }
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