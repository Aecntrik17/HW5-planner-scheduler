// creating variables
var NowMoment = moment();
var curDateTime = $("#dateTime");
// moment.js format for displaying day of the week, month, date in number, and year in number
curDateTime.append(NowMoment.format("dddd, MMMM, Do, YYYY"));
console.log(curDateTime);
var agendaDisplay = $("#agenda-display");
var timeEl = $("#time");

// change color of each row based on current time
// creating a for each statement that will loop through each of the html "tr" elements
$("tr").each(function () {
  console.log($(this));
  // searching for the id tag and saving that specific data to the hour variable
  let hour = $(this).attr("id");

  // comparing current time to time of slot as it runs through the loop
  if (+hour < +moment().get("hour")) {
    // change the color of the line, create "past, present, future" class in css
    $(this).addClass("past");
  } else if (+hour === +NowMoment.format("H")) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
  var agenda = localStorage.getItem("agenda" + hour);

  // this is taking the saved user agenda from the local storage and writing it to the page in the placeholder input
  let agendaDisplay = $(this).children(".middle").children("textarea");
  agendaDisplay.val(agenda);
});
// activating the save button with event listener click
$(".saveBtn").on("click", function (event) {
  // alert("I'm working");
  event.preventDefault();
  // accessing data user input into the id agenda display and saving it to local storage

  let agenda = $("#agendaDisplay" + $(this).parent().parent().attr("id")).val();

  //   directing the location for this based on the placement of the button in the famliy where the id is selected

  localStorage.setItem("agenda" + $(this).parent().parent().attr("id"), agenda);
});
// activating listener on clear button
$("#clear").on("click", function (event) {
  // each element with "tr" take the data set the value to empty - which will clear the "agenda display"
  $("tr").each(function () {
    let data = $(this).children(".middle").children("textarea");
    data.val("");
  });
});
// activating listener on reset button
$("#reset").on("click", function (event) {
  // each element with "tr" is targeted and removed local storage as well as clears from the display on page.
  $("tr").each(function () {
    let data = $(this).children(".middle").children("textarea");
    data.val("");
    localStorage.setItem("agenda" + $(this).attr("id"), "");
  });
});
