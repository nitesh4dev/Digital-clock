function clock() {
    let displayTime = document.getElementById('time');
    let DisplayDate = document.getElementById('date');

    let date = new Date();
    let Cdate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    (hour == 0) ? hour = 12 : (hour > 12) ? hour = hour - 12 : hour;
    (hour < 10) ? hour = '0' + hour : hour;
    (minute < 10) ? minute = '0' + minute : minute;
    (seconds < 10) ? seconds = '0' + seconds : seconds;
    (Cdate < 10) ? Cdate = '0' + Cdate : Cdate;
    (month < 10) ? month = '0' + month : month;

    displayTime.innerHTML = hour + ':' + minute + ':' + seconds;
    DisplayDate.innerHTML = Cdate + '/' + month + '/' + year;

}

var interval;
function startClock() {
    interval = setInterval(clock, 1000)
}

function stopClock() {
    clearInterval(interval);
}

