export const formatForDateTimeLocal = (isoString) => {
  const date = new Date(isoString);

  // Adjust for local timezone offset (in minutes)
  const offset = date.getTimezoneOffset() * 60000;
  const localISOTime = new Date(date.getTime() - offset).toISOString();

  // Slice to "YYYY-MM-DDTHH:mm" (16 characters)
  return localISOTime.slice(0, 16);
};

export const getDateAndTime = (localISOString) => {
  return localISOString.split("T");
};

export const getDateLocal = (dateObj) => {
  const offset = dateObj.getTimezoneOffset() * 60000;
  const localISOTime = new Date(dateObj.getTime() - offset).toISOString();
  return localISOTime.slice(0, 10);
};
