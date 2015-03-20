/*Write a JavaScript function lastDigitAsText(number) that returns the last digit of given integer as an English word. Write a JS program lastDigitOfNumber.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
6    Six
-55    Five
133    Three
14567    Seven
*/

function lastDigitAsText(number)
{
    var lastDigit = Math.abs(Number(number))%10; //takes the input, using math.abs makes the number positive if it's negative, then parses it into a number unsing number(number), and finally through %10 looks at the last digit
    switch(lastDigit) //if the last digit is case: X, return "it's text name".
    {
        case 0: return "Zero";
            break;
        case 1: return "One";
            break;
        case 2: return "Two";
            break;
        case 3: return "Three";
            break;
        case 4: return "Founr";
            break;
        case 5: return "Five";
            break;
        case 6: return "Six";
            break;
        case 7: return "Seven";
            break;
        case 8: return "Eigth";
            break;
        case 9: return "Nine";
            break;
        default: return "not a valid input";
            break;
    }
}
//inputs
console.log(lastDigitAsText(6)); //try a text here
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));
