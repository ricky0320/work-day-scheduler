// get element by id for currentDay
var currentDayEl = $("#currentDay");




// display current day at top
$("#currentDay").text(moment().format('dddd') + "," + moment().format("LL"));

$("container")




























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