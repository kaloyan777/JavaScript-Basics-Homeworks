/*Write a JavaScript function evenNumber(number) that checks if an integer number is even.
Write JS program evenChecker.js to check if a few numbers are even. The result should be printed on the console (true or false).
Run the program through Node.js. */


/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function evenNumber(number)
{
    var even = number % 2 === 0;
    return even;
}

console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));

/*
Input    Output
3       false
127    false
588    true
*/
