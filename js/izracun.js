// Get param data from url
let params = new URLSearchParams(location.search);
let arrivalDate = params.get('arrivalDate');
let departureDate = params.get('departureDate');
let arrivalTime = params.get('arrivalTime');
let departureTime = params.get('departureTime');

document.getElementById("arrivalDate").innerHTML = arrivalDate;
document.getElementById("arrivalTime").innerHTML = arrivalTime;
document.getElementById("departureDate").innerHTML = departureDate;
document.getElementById("departureTime").innerHTML = departureTime;

function getDateTime(date, timeHour) {
  let timeString = timeHour + ':00:00';
  let result = new Date(date + ' ' + timeString);
  return result;
}

function treatAsUTC(datetime) {
  datetime.setMinutes(datetime.getMinutes() - datetime.getTimezoneOffset());
  return datetime;
}

function daysBetween(startDate, startHour, endDate, endHour) {
  let millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(getDateTime(endDate, endHour)) - treatAsUTC(getDateTime(startDate, startHour))) / millisecondsPerDay;
}

// calculate number of days between two dates
let numOfDaysFloat = daysBetween(arrivalDate, arrivalTime, departureDate, departureTime);
let decimal = numOfDaysFloat - Math.floor(numOfDaysFloat);

if (decimal > 0.08334) {
  numOfDaysFloat += 1;
};
let numOfDays = Math.floor(numOfDaysFloat)
let price = 0;

if (numOfDays === 1) {
  price = 12;
}
if (numOfDays > 1 && numOfDays < 8) {
  price = 12 + (numOfDays - 1) * 5;
}
if (numOfDays === 8) {
  price = 45;
}
if (numOfDays > 8) {
  price = 45 + (numOfDays - 8) * 5;
}

let arrivalDateTime = getDateTime(arrivalDate, arrivalTime);
let departureDateTime = getDateTime(departureDate, departureTime);

if (arrivalDateTime < new Date() || arrivalDateTime >= departureDateTime) {
  price = 0;
}

document.getElementById("price").innerHTML = price;