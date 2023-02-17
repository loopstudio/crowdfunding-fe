export const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const getMaxMinDate = (startDate = "", amountOfDays) => {
  const [year, month, day] = startDate.split("-");
  const newDate = new Date(year, month, day);

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
