import * as settings from './js/settings-module.js';
import * as clockdesign from './js/clock-module.js';


function initApplication() {
    settings.setDefaultItems();
    document.body.setAttribute('data-theme', settings.settingTheme);
    settings.displayNavVisibility();
    clockPage.start();
    document.getElementById('nav-item-clock').addEventListener("click", clockPage.start, false);
}

function navClockPage() {
    var interval;

    return {
        start() {
            closeAllComponents();
            setNavigationActive('nav-item-clock');
            clockdesign.buildClockPage(settings.settingClockDesign);
            if(settings.settingClockDesign == 'design1' || settings.settingClockDesign == 'design3') {
                interval = setInterval(clockdesign.updateTime, 1000, settings.settingClockDesign, settings.settingDateFormat);
            }
            else if (settings.settingClockDesign == 'design2' || settings.settingClockDesign == 'design4') {
                interval = setInterval(clockdesign.setAnalogTime, 1000, settings.settingClockDesign);
            }
        },
        stop() {
            clearInterval(interval);
        }
    }
}

var clockPage = navClockPage()

window.navSettings = function() {
    closeAllComponents();
    setNavigationActive('nav-item-settings');
    settings.openSettings();
    clockPage.stop();
}

function closeAllComponents() {
    document.getElementById('wrapper-settings').style.display = 'none';
    const container = document.getElementById('wrapper');
    container.style.display = 'none';
    container.innerHTML = '';
}



window.lockedImgOver = function(item) {
    item.className = "icon-Locked";
}

window.lockedImgOut = function(item, iconName) {
    item.className = iconName;
}

window.lockedTextOver = function(item) {
    item.style.textDecoration = "line-through";
}

window.lockedTextOut = function(item) {
    item.style.textDecoration = "none";
}

function setNavigationActive(item) {
    document.getElementById('nav-item-clock').className = 'nav-passive';
    document.getElementById('nav-item-worldclock').className = 'nav-passive';
    document.getElementById('nav-item-timer').className = 'nav-passive';
    document.getElementById('nav-item-specialtimer2').className = 'nav-passive';
    document.getElementById('nav-item-specialtimer1').className = 'nav-passive';
    document.getElementById('nav-item-settings').className = 'nav-passive';

    document.getElementById(`${item}`).className = 'nav-active';
}


initApplication();