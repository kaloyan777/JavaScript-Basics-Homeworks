/*Write a JavaScript function that accepts a number variable to convert from km/h to knots (knot is a maritime unit measuring speed). The result should be printed on the console, rounded up to the second sign after the decimal point. Run the program through Node.js. */

function convertKMHtoKnots(km) 
{
    var knots = km * 0.5399568034557235;
    console.log(knots.toFixed(2));
}

convertKMHtoKnots(20);
convertKMHtoKnots(112);
convertKMHtoKnots(400);