export function formatDateToString(dateString: string) {
  const date = new Date(dateString);

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

  const monthIndex = date.getMonth();
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const monthName = monthNames[monthIndex];

  const formattedDate = `${day} ${monthName} ${year}`;

  return formattedDate;
}
