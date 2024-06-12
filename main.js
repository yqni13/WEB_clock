import * as settings from './js/settings-module.js';
import * as clockdesign from './js/clock-module.js';


function initApplication() {
    settings.setDefaultItems();
    document.body.setAttribute('data-theme', settings.settingTheme);
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
            interval = setInterval(updateTime, 1000);
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

function updateTime() {
    let currentDate = new Date();       //get timestamp
    
    let hour = document.getElementById(`hour_${settings.settingClockDesign}`);
    let minute = document.getElementById(`minute_${settings.settingClockDesign}`);
    let second = document.getElementById(`second_${settings.settingClockDesign}`);

    let hourValue = currentDate.getHours();
    let minuteValue = currentDate.getMinutes();
    let secondValue = currentDate.getSeconds();

    if (hourValue >= 0 && hourValue <= 9) { hourValue = "0" + hourValue; };
    if (minuteValue >= 0 && minuteValue <= 9) { minuteValue = "0" + minuteValue; };
    if (secondValue >= 0 && secondValue <= 9) { secondValue = "0" + secondValue; };

    hour.innerHTML = hourValue;
    minute.innerHTML = minuteValue;
    second.innerHTML = secondValue;

    let currentDay = currentDate.getDate();
    if (currentDay >= 0 && currentDay <= 9) { currentDay = "0" + currentDay; };
    let currentMonth = currentDate.getMonth()+1;
    if (currentMonth >= 0 && currentMonth <= 9) { currentMonth = "0" + currentMonth; };
    let currentYear = currentDate.getFullYear();

    let divDate = document.getElementById(`clock_date_${settings.settingClockDesign}`);
    switch(settings.settingDateFormat) {
        case 'mm/dd/yyyy':
            divDate.innerHTML = `${currentMonth}/${currentDay}/${currentYear}`;
            break;
        case 'dd.mm.yyyy':
            divDate.innerHTML = `${currentDay}.${currentMonth}.${currentYear}`;
            break;
        case 'yyyy-mm-dd':
            divDate.innerHTML = `${currentYear}-${currentMonth}-${currentDay}`;
            break;
        case 'dd-mm-yyyy':
            divDate.innerHTML = `${currentDay}-${currentMonth}-${currentYear}`;
            break;
        default:
            divDate.innerHTML = `${currentMonth}/${currentDay}/${currentYear}`;
    }

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