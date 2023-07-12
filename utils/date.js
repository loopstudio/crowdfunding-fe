export const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const [year, month, dayTime] = date.toISOString().split("-");
  const [day, _] = dayTime.split("T");

  return `${day}/${month}/${year}`;
};

export const getMaxMinDate = (startDate = "", amountOfDays) => {
  const [year, month, day] = startDate.split("-");
  const newDate = new Date(year, month - 1, day);

  newDate.setDate(newDate.getDate() + amountOfDays);

  return formatDate(new Date(newDate));
};

export const getTomorrow = () => {
  const today = new Date();

  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  return formatDate(tomorrow);
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  const day = ("0" + newDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};
