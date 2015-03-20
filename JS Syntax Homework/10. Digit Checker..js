/*
Write a JavaScript function checkDigit(number) that finds if the third digit (right-to-left) of an integer number n (n>1000) is 3.
Write JS program digitChecker.js that checks a few numbers.
The result (true or false) should be printed on the console. Run the program through Node.js.
*/

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function checkDigit(number)
{
    number = parseInt(number / 100);
    return number % 10 == 3;
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));

/*
Input    Output
1235    false
25368    true
123456    false

*/
