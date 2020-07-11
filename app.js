var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;


function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 1000) {
        sec++
        secHeading.innerHTML = sec
        msec = 0



    } else if (sec >= 2) {
        min++
        sec = 0
        minHeading = min
    }
}

function start() {


    interval = setInterval(timer, 10)

}
function stop() {

    clearInterval(interval)

}

function reset() {

    //   clearInterval()

    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec


}

// interval = setInterval(timer,10)

// alert("oooo")






