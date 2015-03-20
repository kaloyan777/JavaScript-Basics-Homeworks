/*Write a JavaScript function bitChecker(number) that finds if the bit 3 an integer number (counting from 0) is 1.
Write JS program checkingBits.js to check a few numbers.
The result (true or false) should be printed on the console.
Run the program through Node.js. */

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/


function bitChecker(number)
{
    var checkBit = ((number >> 3) & 1) == 1;
    return checkBit;
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));

/*
Input    Output
333      true
425       true
2567564754    false

*/
