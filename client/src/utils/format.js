//write simple conversion/ formatting functions here

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

// convert milliseconds into 00:00:00 time format
export const formatTime = (ms) => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};

// convert remaining lives into accuracy percentage
export const formatAccuracy = (lifeCount) => {
  if (lifeCount === 0 || lifeCount === "0") {
    return 0;
  } else if (lifeCount === 1 || lifeCount === "1") {
    return 33;
  } else if (lifeCount === 2 || lifeCount === "2") {
    return 66;
  } else if (lifeCount === 3 || lifeCount === "3") {
    return 100;
  }
};
