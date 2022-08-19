function countdownTimer() {
  const daysWrapper = document.getElementById("days");
  const hourWrapper = document.getElementById("hour");
  const minuteWrapper = document.getElementById("minute");
  const secondWrapper = document.getElementById("second");

  let now = new Date();
  let deadline = new Date("2022-09-02");
  const difference = +deadline - +now; // Find the distance between now and deadline

  if (difference < 0) {
    daysWrapper.innerHTML = "00";
    hourWrapper.innerHTML = "00";
    minuteWrapper.innerHTML = "00";
    secondWrapper.innerHTML = "00";
  }

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / 1000 / 60) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  // append 0 to days, hours, minutes, seconds if less than 10
  days = days < 10 ? `0${days}` : days;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  daysWrapper.innerHTML = days;
  hourWrapper.innerHTML = hours;
  minuteWrapper.innerHTML = minutes;
  secondWrapper.innerHTML = seconds;
}

countdownTimer();

setInterval(countdownTimer, 1000);
