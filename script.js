let timer;
let isRunning = false;
let startTime;
let lapNumber = 1;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now();
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startButton').innerText = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startButton').innerText = 'Start';
        isRunning = false;
    }
}

function updateDisplay() {
    let elapsedTime = Date.now() - startTime;
    let formattedTime = formatTime(elapsedTime);
    document.getElementById('display').innerText = formattedTime;
}

function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millisecondsFormatted.toString().padStart(2, '0')}`;
}

function recordLap() {
    if (isRunning) {
        let lapTime = formatTime(Date.now() - startTime);
        let lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${lapNumber}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
        lapNumber++;
    }
}
//function used to reset
function resetStopwatch() {
    clearInterval(timer);
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startButton').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
    isRunning = false;
    lapNumber = 1;
}
