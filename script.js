let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');



function updateClock () {
    let h = new Date().getHours();
    // h = 24;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h>=12){ampm.innerHTML = "PM"}
    else{ampm.innerHTML = "AM"}
    if(h >12){h -= 12};
    if(h == 0){h = 12;};
    if(h<10){ h = "0"+ h};
    if(m<10){ m = "0"+ m};
    if(s<10){ s = "0"+ s};

   hours.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;
}
setInterval(() => {
    updateClock()   
}, 1000);
