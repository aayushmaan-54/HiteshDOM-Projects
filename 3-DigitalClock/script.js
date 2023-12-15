'use strict';

let h, m, s, session, time, date;

function showTime(){
    date = new Date();
    h = date.getHours(); 
    m = date.getMinutes(); 
    s = date.getSeconds();
    session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h >= 12){
        h = h - 12;
        if(h == 0){
            h = 12;
        }
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time = h + ":" + m + ":" + s + " " + session;
    document.querySelector('.clock').textContent = time;

    setTimeout(showTime, 1000);
}

showTime();