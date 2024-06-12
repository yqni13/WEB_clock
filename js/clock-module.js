

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