function getFormatedDate() {
  const date = new Date();
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekDay = weekdays[date.getDate()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return {
    weekDay: weekDay,
    formatedDate: `${month} ${date.getDate()} ${year}`,
  };
}

function getFormatedTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
