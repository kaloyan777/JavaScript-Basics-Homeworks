/*Write a JavaScript function convertKWtoHP(number) that accepts number variable to convert car’s kW into hp (horse power).
Write a JS program powerfulCars.js that converts a few sample values to hp (see the examples below).
The result should be printed on the console, rounded up to the second sign after the decimal point.
Run the program through Node.js. */


/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

/*
    console.log(convertKWtoHP(75));
    console.log(convertKWtoHP(150));
    console.log(convertKWtoHP(1000)); You can place the values here as well.
*/

function convertKWtoHP(carKw)
{
    var carHp = carKw / 0.745699872;
    return carHp.toFixed(2);
}

console.log(convertKWtoHP(75)); /* Here convertKWtoHP(carKw = 75), then goes into "var carHP" to be divided by 0.745699872, and later on, rounded to the second digit after the floating point using  ".toFixed(2)" */
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));


/*
Input    Output
75        100.58
150        201.15
1000    1341.02
*/
