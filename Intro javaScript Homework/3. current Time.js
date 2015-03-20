/*Execute with command "node "name of the task"" using windows cmd*/

var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();

var currentTime = hours + ":" + minutes;

console.log(currentTime);
