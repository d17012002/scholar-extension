var start = document.querySelector("#starting");
var reset = document.querySelector("#stop");

var h = document.querySelector("#hour");
var m = document.querySelector("#minute");
var s = document.querySelector("#sec");
var startTimer = null;
start.addEventListener("click", function () {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    document.querySelector("#starting").style.visibility =
      "visible";
    alert("Set timer");
  } else {
    function startInterval() {
      startTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    document.querySelector("#starting").style.visibility = "hidden";
    startInterval();
  }
});
reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopInterval();
  document.querySelector("#starting").style.visibility = "visible";
});
function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    PlaySound();
    document.querySelector("#starting").style.visibility = "visible";
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
