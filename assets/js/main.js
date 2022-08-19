function countdownTimer() {
  const daysWrapper = document.getElementById("days");
  const hourWrapper = document.getElementById("hour");
  const minuteWrapper = document.getElementById("minute");
  const secondWrapper = document.getElementById("second");

  let now = new Date().getTime();
  let deadline = new Date("Sep 02, 2022 00:00:00").getTime();

  deadline =
    deadline - now < 0 ? deadline + 1000 * 60 * 60 * 24 * 14 : deadline;
  const distance = +deadline - +now; // Find the distance between now and deadline

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
