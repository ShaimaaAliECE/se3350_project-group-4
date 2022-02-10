//write simple conversion/ formatting functions here

// convert seconds into 00:00:00 time format
export const formatTime = (seconds) => {
    //convert seconds to hh:mm:ss
    var date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };

// convert remaining lives into accuracy progressPercentage



