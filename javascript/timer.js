var start = document.getElementById("start");
var reset = document.getElementById("reset");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;

start.addEventListener("click", function () {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    document.querySelector("#start").style.visibility = "visible";
    alert("Set timer");
  } else {
    function startInterval() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    document.querySelector("#start").style.visibility = "hidden";
    startInterval();
  }
});
reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopInterval();
  document.querySelector("#start").style.visibility = "visible";
});
function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    PlaySound();
    document.querySelector("#start").style.visibility = "visible";
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}
function stopInterval() {
  clearInterval(startTimer);
}
function PlaySound() {
  var sound = new Audio("../Assets/audio/alert-new.mp3");
  sound.play();
}
