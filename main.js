import * as settings from './js/settings-module.js';


function initApplication() {
    document.body.setAttribute('data-theme', settings.settingTheme);
    clockPage.start();
    document.getElementById('nav-item-clock').addEventListener("click", clockPage.start, false);
}

function navClockPage() {
    var interval;

    return {
        start() {
            buildClockPage();
            interval = setInterval(updateTime, 1000);
        },
        stop() {
            clearInterval(interval);
        }
    }
}

var clockPage = navClockPage()


function updateTime() {
    let currentDate = new Date();       //get timestamp
    
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    let hourValue = currentDate.getHours();
    let minuteValue = currentDate.getMinutes();
    let secondValue = currentDate.getSeconds();

    if (hourValue >= 0 && hourValue <= 9) { hourValue = "0" + hourValue; };
    if (minuteValue >= 0 && minuteValue <= 9) { minuteValue = "0" + minuteValue; };
    if (secondValue >= 0 && secondValue <= 9) { secondValue = "0" + secondValue; };

    hour.innerHTML = hourValue;
    minute.innerHTML = minuteValue;
    second.innerHTML = secondValue;

    // let currentDayName = currentDate.getDay();
    let currentDay = currentDate.getDate();
    if (currentDay >= 0 && currentDay <= 9) { currentDay = "0" + currentDay; };
    let currentMonth = currentDate.getMonth()+1;
    if (currentMonth >= 0 && currentMonth <= 9) { currentMonth = "0" + currentMonth; };
    let currentYear = currentDate.getFullYear();
    

    let weekdays = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag'
    ];

    // for (let i = 0; i <= currentDayName; ++i) {
    //     if (i == currentDayName) {
    //         currentDayName = weekdays[i];
    //     }
    // }

    let divDate = document.getElementById("clock_date");
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

function buildClockPage() {
    document.getElementById('wrapper-settings').style.display = 'none';
    const container = document.getElementById('wrapper');
    container.innerHTML = '';
    container.style.display = 'flex';

    // create
    var clockWrapper = document.createElement('div');
    var clockTime = document.createElement('div');
    var clockDate = document.createElement('div');
    var hours = document.createElement('span');
    var minutes = document.createElement('span');
    var seconds = document.createElement('span');
    var blink = document.createElement('span');
    var dateContent = document.createElement('p');
    
    // assign
    clockWrapper.className = 'wrapper_clock';
    clockTime.id = 'clock_time';
    hours.id = 'hour'
    hours.innerHTML = '00';
    minutes.id = 'minute';
    minutes.innerHTML = '00';
    seconds.id = 'second';
    seconds.innerHTML = '00';
    blink.className = 'blink-colon';
    blink.innerHTML = ':';
    clockDate.id = 'clock_date';
    dateContent.id = 'clock_date_p';
    dateContent.innerHTML = '0';

    // assemble
    clockDate.append(dateContent);
    clockTime.append(hours, blink, minutes, blink.cloneNode(1), seconds);
    clockWrapper.append(clockTime, clockDate);
    container.append(clockWrapper);
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

window.navSettings = function() {
    settings.openSettings();
    clockPage.stop();
}


initApplication();