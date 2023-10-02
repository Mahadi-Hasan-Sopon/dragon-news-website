const date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDayMonthYear = () => {
  const day = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  const today = date.getDate();
  const year = date.getFullYear();

  return { day, month, today, year };

  //   return `${day}, ${month} ${today < 9 ? "0" + today : today}, ${year}`;
};

const dynamicDate = getDayMonthYear()

export default dynamicDate;
