/**
 * Cecks if a timestamp in seconds is today
 */
export function isTimestampToday(timestampInSeconds: number) {
  // Convert the timestamp to milliseconds
  const timestampInMillis = timestampInSeconds * 1000;

  // Create Date objects for the timestamp and current date
  const timestampDate = new Date(timestampInMillis);
  const currentDate = new Date();

  // Compare the date parts (year, month, and day)
  return (
    timestampDate.getFullYear() === currentDate.getFullYear() &&
      timestampDate.getMonth() === currentDate.getMonth() &&
      timestampDate.getDate() === currentDate.getDate()
  );
}
