
function initApplication() {
    window.onload = function () {
        setInterval(updateTime, 1000);
    }
}

initApplication();

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

function lockedImgOver(item) {
    item.className = "icon-Locked";
}

function lockedImgOut(item, iconName) {
    item.className = iconName;
}

function lockedTextOver(item) {
    item.style.textDecoration = "line-through";
}

function lockedTextOut(item) {
    item.style.textDecoration = "none";
}


