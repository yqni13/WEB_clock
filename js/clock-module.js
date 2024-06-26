

export function buildClockPage(design) {
    switch(design) {
        case 'design1':
            buildDigitalClock(design);
            break;
        case 'design2':
            buildAnalogClock(design);
            break;
        case 'design3':
            buildDigitalClock(design);
            break;
        case 'design4':
            buildAnalogClock(design);
            break;
        default:
            buildDigitalClock('design1');
    }
}



function buildDigitalClock(design) {
    const container = document.getElementById('wrapper');
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
    clockWrapper.className = `wrapper_clock_${design}`;
    clockTime.id = `clock_time_${design}`;
    hours.id = `hour_${design}`;
    hours.innerHTML = '00';
    minutes.id = `minute_${design}`;
    minutes.innerHTML = '00';
    seconds.id = `second_${design}`;
    seconds.innerHTML = '00';
    blink.className = 'blink-colon';
    blink.innerHTML = ':';
    clockDate.id = `clock_date_${design}`;
    dateContent.id = `clock_date_p_${design}`;
    dateContent.innerHTML = '0';

    // assemble
    clockDate.append(dateContent);
    clockTime.append(hours, blink, minutes, blink.cloneNode(1), seconds);
    clockWrapper.append(clockTime, clockDate);
    container.append(clockWrapper);
}

function buildAnalogClock(design) {
    const container = document.getElementById('wrapper');
    container.style.display = 'flex';

    // create
    var clockWrapper = document.createElement('div');
    var clockOuter = document.createElement('div');
    var markingQuarter1 = document.createElement('span');
    var markingQuarter2 = document.createElement('span');
    var markingQuarter3 = document.createElement('span');
    var markingQuarter4 = document.createElement('span');
    var clockInner = document.createElement('div');
    var pointerHour = document.createElement('div');
    var pointerMinute = document.createElement('div');
    var pointerSecond = document.createElement('div');
    var am = document.createElement('div');
    var pm = document.createElement('div');
    var dot = document.createElement('div');
    var diallines = document.createElement('div');
    var infoWrapper = document.createElement('div');

    // assign
    clockWrapper.className = `wrapper_clock_${design}`;
    pointerHour.className = `hand hour-hand_${design}`;
    pointerMinute.className = `hand minute-hand_${design}`;
    pointerSecond.className = `hand second-hand_${design}`;
    dot.className = `dot_${design}`;
    diallines.className = `diallines_${design}`;
    if(design == 'design2') {
        markingQuarter1.className = `marking marking-1_${design}`;
        markingQuarter2.className = `marking marking-2_${design}`;
        markingQuarter3.className = `marking marking-3_${design}`;
        markingQuarter4.className = `marking marking-4_${design}`;
        clockOuter.className = `outer-clock-face_${design}`;
        clockInner.className = `inner-clock-face_${design}`;
        am.id = `wrapper_am_${design}`
        pm.id = `wrapper_pm_${design}`
    }
    else if (design == 'design4') {
        am.className = `info date_${design}`
        pm.className = `info day_${design}`
        markingQuarter1.className = `h3_${design}`;
        markingQuarter2.className = `h6_${design}`;
        markingQuarter3.className = `h9_${design}`;
        markingQuarter4.className = `h12_${design}`;
        markingQuarter1.innerHTML = 3
        markingQuarter2.innerHTML = 6
        markingQuarter3.innerHTML = 9
        markingQuarter4.innerHTML = 12
    }

    // assemble
    switch(design) {
        case 'design2': {
            clockInner.append(pointerHour, pointerMinute, pointerSecond, am, pm);
            clockOuter.append(markingQuarter1, markingQuarter2, markingQuarter3, markingQuarter4, clockInner);
            clockWrapper.append(clockOuter);
            container.append(clockWrapper);
            break;
        }
        case 'design4': {
            clockInner.append(markingQuarter1, markingQuarter2, markingQuarter3, markingQuarter4);
            clockOuter.append(pointerHour, pointerMinute, pointerSecond);
            infoWrapper.append(am, pm)
            clockWrapper.append(infoWrapper, dot, clockOuter, clockInner, diallines);
            for (var i = 1; i < 60; i++) {
                var clockMinuteMarkers = document.createElement('div');
                clockMinuteMarkers.className = `diallines_${design}`;
                clockMinuteMarkers.style.transform = "rotate(" + 6 * i + "deg)";
                clockWrapper.append(clockMinuteMarkers);
            }
            container.append(clockWrapper);
            break;
        }
        default: {
            clockInner.append(pointerHour, pointerMinute, pointerSecond, am, pm);
            clockOuter.append(markingQuarter1, markingQuarter2, markingQuarter3, markingQuarter4, clockInner);
            clockWrapper.append(clockOuter);
            container.append(clockWrapper);
        }
    }
}


export function updateTime(design, dateformat) {
    let currentDate = new Date();
    
    let hour = document.getElementById(`hour_${design}`);
    let minute = document.getElementById(`minute_${design}`);
    let second = document.getElementById(`second_${design}`);

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

    let divDate = document.getElementById(`clock_date_${design}`);
    switch(dateformat) {
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

export function setAnalogTime(design) {
    const pointerHour = document.querySelector(`.hour-hand_${design}`);
    const pointerMinute = document.querySelector(`.minute-hand_${design}`);
    const pointerSecond = document.querySelector(`.second-hand_${design}`);
    const am = document.getElementById(`wrapper_am_${design}`);
    const pm = document.getElementById(`wrapper_pm_${design}`);

    const now = new Date();

    if(design == 'design2' && now.getHours() >= 12) {
        pm.className = "active_hours"
        am.className = "passive_hours";
    } else {
        am.className = "active_hours"
        pm.className = "passive_hours";
    }
    am.innerHTML = "AM";
    pm.innerHTML = "PM";

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    pointerSecond.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    pointerMinute.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    pointerHour.style.transform = `rotate(${hourDegrees}deg)`;
}

// TODO: simpfliy setAnalogTime/setAnalogTimeDesign4 to use for both designs same function
export function setAnalogTimeDesign4(design, dateformat) {

    var writtenDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],

    date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    currentDay = date.getDate(),
    currentMonth = date.getMonth() + 1,
    currentYear = date.getFullYear(),

    hDeg = hour * 30 + minute * (360/720),
    mDeg = minute * 6 + second * (360/3600),
    sDeg = second * 6,

    hEl = document.querySelector(`.hour-hand_${design}`),
    mEl = document.querySelector(`.minute-hand_${design}`),
    sEl = document.querySelector(`.second-hand_${design}`),
    dateEl = document.querySelector(`.date_${design}`),
    dayEl = document.querySelector(`.day_${design}`);

    var weekday = writtenDay[date.getDay()];

    if(currentMonth < 9) {
        currentMonth = "0" + currentMonth;
    }

    hEl.style.transform = "rotate("+hDeg+"deg)";
    mEl.style.transform = "rotate("+mDeg+"deg)";
    sEl.style.transform = "rotate("+sDeg+"deg)";
    switch(dateformat) {
        case 'mm/dd/yyyy':
            dateEl.innerHTML = `${currentMonth}/${currentDay}/${currentYear}`;
            break;
        case 'dd.mm.yyyy':
            dateEl.innerHTML = `${currentDay}.${currentMonth}.${currentYear}`;
            break;
        case 'yyyy-mm-dd':
            dateEl.innerHTML = `${currentYear}-${currentMonth}-${currentDay}`;
            break;
        case 'dd-mm-yyyy':
            dateEl.innerHTML = `${currentDay}-${currentMonth}-${currentYear}`;
            break;
        default:
            dateEl.innerHTML = `${currentMonth}/${currentDay}/${currentYear}`;
    }
    dayEl.innerHTML = weekday;
}

