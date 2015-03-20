/*Write a JavaScript function roundNumber(number) that rounds floating-point number using Math.round(), Math.floor().
Write a JS program roundingNumbers.js that rounds a few sample values. Run the program through Node.js. */

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);

function roundNumber(number)
{
    var floor = Math.floor(number);
    var round = Math.round(number);

    console.log(number + " floored = " + floor);
    console.log(number + " rounded = " + round + "\n----");
};

/*roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);*/


/*
Input    Output
22.7    22
23
12.3    12
12
58.7    58
59

*/
