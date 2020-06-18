// creating variables
var NowMoment = moment();
var curDateTime = $("#dateTime");
// moment.js format for displaying day of the week, month, date in number, and year in number
curDateTime.append(NowMoment.format("dddd, MMMM, Do, YYYY"));
console.log(curDateTime);
var agendaDisplay = $("#agenda-display");
var timeEl = $("#time");
