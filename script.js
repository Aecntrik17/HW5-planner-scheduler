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
    // change the color of the line, create "past class in css, present
    $(this).addClass("past");
    // change the color of the line, create "present class in css
  } else if (+hour === +NowMoment.format("H")) {
    $(this).addClass("present");
    // change the color of the line, create "future class in css
  } else {
    $(this).addClass("future");
  }
  //   retrieving the data stored in local storage and setting it to a variable called agenda
  var agenda = localStorage.getItem("agenda" + hour);

  // taking the saved user agenda from the local storage and writing it to the page in the placeholder input
  let agendaDisplay = $(this).children(".middle").children("textarea");
  //   using .val so that it reads the value and not the object/element
  agendaDisplay.val(agenda);
});

// activating the save button with event listener click
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // accessing data user input into the id agenda display and saving it to local storage
  let agenda = $("#agendaDisplay").val();
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
