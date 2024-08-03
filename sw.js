let timer;
let startTime;
let elapsedTime = 0;

function startStopwatch() {
    if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
    elapsedTime = Date.now() - startTime;
}

function resetStopwatch() {
    clearInterval(timer)
    document.getElementById('display').textContent ="00:00:00:00"
    stopStopwatch();
    elapsedTime = 0;
    timer=false;
}

function updateStopwatch() {
    const time = Date.now() - startTime;
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    document.getElementById('display').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(num, size = 2) {
    return num.toString().padStart(size, '0');
}
