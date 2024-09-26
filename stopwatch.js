const timeEl = document.getElementById("time");
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
        timeEl.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeEl.textContent = "00:00:00";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);