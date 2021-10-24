// get element by id for currentDay
var currentDayEl = $("#currentDay");
// get element by id for time block
var timeBlkEl = $(".time-block");

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

// save button for text input
var submitBtnEl = $(".saveBtn");

// display current day at top
// $("#currentDay").text(moment().format("dddd, MMMM Do"));

//display block color function
function displayBlk() {
  // each block id=hr
  timeBlkEl.each(function() {
    // get id=hr for each time-block
    var currentTime = parseInt($(this).attr("data-id"));

    // get text input from localStorage
    $(this).children(".description").val(localStorage.getItem(currentTime));

    // check if current hour = block's hour, then add the class "present" - red
    if(currentHour == currentTime) {$(this).children("textarea").addClass("present")}

    //check if current hour > block's hour, then add the class "past" - gray
    if(currentHour > currentTime) {$(this).children("textarea").addClass("past")} 

    //check if current hour < block's hour, then add the class "future" - green
    if(currentHour < currentTime) {$(this).children("textarea").addClass("future")}
  });

  // addeventlistener to call "changeText" function when click on submit button
  submitBtnEl.on("click", changeText);
}

// edit textarea function
function changeText(event) {
  // get element by id=hour
  var checkHour = $(this).parent().attr("data-id");
  // get input value of textarea
  var textVal = $(this).siblings(".description").val();
  //store hour and input value
  localStorage.setItem(checkHour, textVal);
}


$(document).ready( () => {
  // call displayBlk function
  displayBlk(); 
  // currentDate text
  currentDayEl.innerHTML = currentDate;
  // append and display the current date
  currentDayEl.append(currentDate); 
});





















// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };


// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }

//   // loop over object properties
//   $.each(tasks, function(list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };