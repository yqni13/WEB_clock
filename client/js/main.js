let currentTime;

let divTime = document.getElementById("clock_time");



let currentDate = new Date();
let currentDayName = currentDate.getDay();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth()+1;
let currentYear = currentDate.getFullYear();

let weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

for (let i = 0; i <= currentDayName; ++i) {
    if (i == currentDayName) {
        currentDayName = weekdays[i-1];
    }
}

let divDate = document.getElementById("clock_date");
divDate.innerHTML = currentDayName + ", " + currentDay + "." + currentMonth + "." + currentYear;


