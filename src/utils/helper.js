function compareTime(timeString1, timeString2) {
  let dateTIme1 = new Date(timeString1);
  let dateTIme2 = new Date(timeString2);

  reutrn = dateTIme1.getTime() > dateTIme2.getTime();
}

module.exports = {
  compareTime,
};
