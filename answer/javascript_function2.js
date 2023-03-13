function toHours(seconds) {
  let hours = Math.floor(seconds / 3600);
  let remainder = seconds % 3600;

  return {
    hour: hours,
    remainder: remainder,
  };
}

function toMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainder = seconds % 60;
  return {
    minutes: minutes,
    remainder: remainder,
  };
}

function humanDuration(duration) {
  let hoursObject = toHours(duration);
  let minutesObject = toMinutes(hoursObject.remainder);
  let seconds = minutesObject.remainder;

  console.log(
    `The formatted duration of ${duration} is ${hoursObject.hours} ${
      hoursObject.hours > 1 ? "Hours" : "Hour"
    }, ${minutesObject.minutes} ${
      minutesObject.minutes > 1 ? "Minutes" : "Minute"
    } and ${seconds} ${seconds > 1 ? "Seconds" : "Second"}`
  );
}

humanDuration(4800);
humanDuration(5212);
humanDuration(300);
