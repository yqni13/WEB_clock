import * as settings from './js/settings-module.js';

var intervalID;

function initApplication() {
    document.getElementById('nav-item-clock').addEventListener("click", changeToClock, false);

    buildClockPage();
    refreshUpdateTime();
}

initApplication();

function refreshUpdateTime() {
    window.addEventListener("load", () => {
        intervalID = setInterval(updateTime, 1000);
    })
}

function changeToClock() {
    intervalID = '';
    buildClockPage();
    refreshUpdateTime();
    console.log("intervalID for changeToClock(): ", intervalID);
}


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

    let currentDayName = currentDate.getDay();
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

    for (let i = 0; i <= currentDayName; ++i) {
        if (i == currentDayName) {
            currentDayName = weekdays[i];
        }
    }

    let divDate = document.getElementById("clock_date");
    divDate.innerHTML = currentDayName + ", " + currentDay + "." + currentMonth + "." + currentYear;

}

function buildClockPage() {
    const container = document.getElementById('wrapper');
    container.innerHTML = '';

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
    console.log("intervalID: ", intervalID);
    clearInterval(intervalID);
}
