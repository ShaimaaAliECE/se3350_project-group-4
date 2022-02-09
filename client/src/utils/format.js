export const formatTime = (seconds) => {
    //convert seconds to hh:mm:ss
    var date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };