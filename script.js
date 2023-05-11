document.getElementById('startbtn').addEventListener('click', start);
document.getElementById('stopbtn').addEventListener('click', stop);
document.getElementById('resetbtn').addEventListener('click', reset);
let ms = document.getElementById("ms").innerText;
let sec = document.getElementById("sec").innerText;
let min = document.getElementById("min").innerText;
let interval;
function start() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}
function stop() {
    clearInterval(interval);
}
function reset() {
    document.getElementById("ms").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("min").innerText = "00";
    // clearInterval(interval);
}
function startTimer() {
    document.getElementById("ms").innerText = parseInt(document.getElementById("ms").innerText) + 1;
    if (parseInt(document.getElementById("ms").innerText) >= 100) {
        document.getElementById("sec").innerText = parseInt(document.getElementById("sec").innerText) + 1;
        document.getElementById("ms").innerText = "00";
        if (parseInt(document.getElementById("sec").innerText) >= 60) {
            document.getElementById("min").innerText = parseInt(document.getElementById("min").innerText) + 1;
            document.getElementById("sec").innerText = "00";
        }
    }
}