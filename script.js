
let clicks = 0;

document.getElementById("click1").addEventListener("click", add);
document.getElementById("click2").addEventListener("click", sub);
document.getElementById("click3").addEventListener("click", reset);

function add() {
   clicks++;
   document.getElementById("clickCount").textContent = clicks;
}

function sub() {
   clicks--;
   document.getElementById("clickCount").textContent = clicks;
}

function reset() {
   clicks = 0;
   document.getElementById("clickCount").textContent = clicks;
}
