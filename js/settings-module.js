export var settingTheme = localStorage.getItem('setting-theme') || 'darkmode';
export var settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';
export var settingClockDesign = localStorage.getItem('setting-clockdesign') || 'design1';
export var settingClockColor1 = localStorage.getItem('setting-clockcolor1') || '#910f4e';
export var settingClockColor2 = localStorage.getItem('setting-clockcolor2') || '#910f4e';
export var settingClockColor3 = localStorage.getItem('setting-clockcolor3') || '#910f4e';
export var settingClockPreview = localStorage.getItem('setting-clockpreview') || true;

const parameterThemes = 'themes';
const parameterDateFormat = 'dateformat';
const parameterClockDesign = 'clockdesign';
const parameterClockColor1 = 'clockcolor1';
const parameterClockColor2 = 'clockcolor2';
const parameterClockColor3 = 'clockcolor3';
const parameterClockPreview = 'clockpreview';

export function openSettings() {
    settingTheme = localStorage.getItem('setting-theme') || 'Dark Mode';
    settingDateFormat = localStorage.getItem('setting-dateformat') || 'dd.mm.yyyy';
    settingClockDesign = localStorage.getItem('setting-clockdesign') || 'design1';
    settingClockColor1 = localStorage.getItem('setting-clockcolor1') || '#910f4e';
    settingClockColor2 = localStorage.getItem('setting-clockcolor2') || '#910f4e';
    settingClockColor3 = localStorage.getItem('setting-clockcolor3') || '#910f4e';
    settingClockPreview = localStorage.getItem('setting-clockpreview') || true;

    buildSettingsPage();
}

function buildSettingsPage() {
    document.getElementById('themes').addEventListener('change', setNewSettings, false);
    document.getElementById('themes').parameter = parameterThemes;
    document.getElementById('dateformat').addEventListener('change', setNewSettings, false);
    document.getElementById('dateformat').parameter = parameterDateFormat;
    document.getElementById('clockdesign').addEventListener('change', setNewSettings, false);
    document.getElementById('clockdesign').parameter = parameterClockDesign;
    document.getElementById('colorpicker1').addEventListener('change', setNewSettings, false);
    document.getElementById('colorpicker1').parameter = parameterClockColor1;
    document.getElementById('colorpicker2').addEventListener('change', setNewSettings, false);
    document.getElementById('colorpicker2').parameter = parameterClockColor2;
    document.getElementById('colorpicker3').addEventListener('change', setNewSettings, false);
    document.getElementById('colorpicker3').parameter = parameterClockColor3;
    document.getElementById('clockpreview').addEventListener('change', setNewSettings, false);
    document.getElementById('clockpreview').parameter = parameterClockPreview;
    document.getElementById('wrapper-settings').style.display = "flex";

    setThemeSetting();
    setDateFormatSetting();
    setClockDesignSetting();
    setClockColor1Setting();
    setClockColor2Setting();
    setClockColor3Setting();
    setClockPreviewSetting();
    displayClockPreview();
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
        case 'clockdesign': {
            var optionsClockDesign = document.getElementById('clockdesign');
            settingClockDesign = optionsClockDesign.options[optionsClockDesign.selectedIndex].value
            localStorage.setItem('setting-clockdesign', settingClockDesign);
            break;
        }
        case 'clockcolor1': {
            settingClockColor1 = document.getElementById('colorpicker1').value;
            localStorage.setItem('setting-clockcolor1', settingClockColor1);
            document.documentElement.style.setProperty('--selected-color1', settingClockColor1);
            break;
        }
        case 'clockcolor2': {
            settingClockColor2 = document.getElementById('colorpicker2').value;
            localStorage.setItem('setting-clockcolor2', settingClockColor2);
            document.documentElement.style.setProperty('--selected-color2', settingClockColor2);
            break;
        }
        case 'clockcolor3': {
            settingClockColor3 = document.getElementById('colorpicker3').value;
            localStorage.setItem('setting-clockcolor3', settingClockColor3);
            document.documentElement.style.setProperty('--selected-color3', settingClockColor3);
            break;
        }
        case 'clockpreview': {
            settingClockPreview = document.getElementById('clockpreview').checked;
            localStorage.setItem('setting-clockpreview', settingClockPreview);
            displayClockPreview();
            break;
        }
        default:
            break;
    }
}

function setThemeSetting() {
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

function setClockDesignSetting() {
    var setting = document.getElementById('clockdesign');
    switch(settingClockDesign) {
        case 'design1':
            setting.selectedIndex = 0;
            break;
        case 'design2':
            setting.selectedIndex = 1;
            break;
        case 'design3':
            setting.selectedIndex = 2;
            break;
        case 'design4':
            setting.selectedIndex = 3;
            break;
        default:
            setting.selectedIndex = 0;
    }
}

function setClockColor1Setting() {
    var setting = document.getElementById('colorpicker1');
    setting.value = settingClockColor1;
}
function setClockColor2Setting() {
    var setting = document.getElementById('colorpicker2');
    setting.value = settingClockColor2;
}
function setClockColor3Setting() {
    var setting = document.getElementById('colorpicker3');
    setting.value = settingClockColor3;
}

function setClockPreviewSetting() {
    var setting = document.getElementById('clockpreview');
    switch(settingClockPreview) {
        case 'true':
            setting.checked = true;
            break;
        case 'false':
            setting.checked = false;
            break;
        default:
            setting.checked = false;
    }
}

export function setDefaultItems() {
    if(!localStorage.getItem('setting-theme')) localStorage.setItem('setting-theme', 'darkmode');
    if(!localStorage.getItem('setting-dateformat')) localStorage.setItem('setting-dateformat', 'dd.mm.yyyy');
    if(!localStorage.getItem('setting-clockdesign')) localStorage.setItem('setting-clockdesign', 'design1');
    if(!localStorage.getItem('setting-clockcolor1')) localStorage.setItem('setting-clockcolor1', '#910f4e');
    document.documentElement.style.setProperty('--selected-color1', settingClockColor1);
    if(!localStorage.getItem('setting-clockcolor2')) localStorage.setItem('setting-clockcolor2', '#910f4e');
    document.documentElement.style.setProperty('--selected-color2', settingClockColor2);
    if(!localStorage.getItem('setting-clockcolor3')) localStorage.setItem('setting-clockcolor3', '#910f4e');
    document.documentElement.style.setProperty('--selected-color3', settingClockColor3);
    if(!localStorage.getItem('setting-clockpreview')) localStorage.setItem('setting-clockpreview', false);
}

function displayClockPreview() {
    var preview = document.getElementById('settings-preview-wrapper');
    switch(settingClockPreview) {
        case 'true':
        case true:
            preview.style.display = 'block';
            break;
        case 'false':
        case false:
            preview.style.display = 'none';
            break;
        default:
            preview.style.display = 'block';
    }
}