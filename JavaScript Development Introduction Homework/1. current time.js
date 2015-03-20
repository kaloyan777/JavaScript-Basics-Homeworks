/*
    Write a JavaScript program current-time.js that prints on the console the current time in UTC format. 
    Execute your file through Node.js. A sample output is given below: 
    
    Input	    Output
    (no input)	Mon, 09 Mar 2015 12:25:12 GMT

    http://stackoverflow.com/questions/948532/how-do-you-convert-a-javascript-date-to-utc
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    http://stackoverflow.com/questions/1810984/number-of-days-in-any-month
*/

//Example 1:
/*var today = new Date();
var isoDate = new Date(today).toISOString(); //UTC format
console.log(isoDate);*/


//Example 2:
var date = new Date();
console.log(date);


//Example 3:
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var year = date.getFullYear();
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var monthName = monthNames[date.getMonth()]; 
//date.getMonth() gives an int number as a value and so it shows this index with this int number position from the array
var dayOfWeek = date.getDay();
var weekDays = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
var day = weekDays[dayOfWeek -1];
/* this does not work...
var monthDays = new Array(31);
var numberOfDayOfMonth = monthDays[i];*/
if(seconds < 10){
    seconds = "0" + seconds;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
var currentTime = day+ " " +monthName+" "+year+" "+hours+":"+minutes+":"+seconds;
console.log(currentTime);
/*...or you can use this to get month's name
switch(month)
{
    case 1: month = "Jan"; break;
    case 2: month = "Feb"; break;
    case 3: month = "Mar"; break;
    case 4: month = "Apr"; break;
    case 5: month = "May"; break;
    case 6: month = "Jun"; break;
    case 7: month = "Jul"; break;
        //...
    default: month = month;break;
}*/
/*if(day < 10){
    day = "0" + day; //not day += "0";
}*/


//Example 4:
/*
var today = new Date();
console.log(today.toISOString());

if (!Date.prototype.toISOString) 
{
    (
        function() 
        {
            function pad(number) 
            {
                if (number < 10) 
                {
                    return '0' + number;
                }
                return number;
            }

            Date.prototype.toISOString = function() 
            {
                return this.getUTCFullYear() +
                    '-' + pad(this.getUTCMonth() + 1) +
                    '-' + pad(this.getUTCDate()) +
                    'T' + pad(this.getUTCHours()) +
                    ':' + pad(this.getUTCMinutes()) +
                    ':' + pad(this.getUTCSeconds()) +
                    '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                    'Z';
            };
        }()
    );
}*/