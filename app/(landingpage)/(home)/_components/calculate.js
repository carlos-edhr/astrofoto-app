function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const timeDifference = endDate.getTime() - beginDate.getTime();
  return Math.floor(timeDifference / (1000 * 3600 * 24));
}
