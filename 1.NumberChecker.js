/*
Write a JavaScript function printNumbers(number) that accepts as parameter an integer number. The function finds all integer numbers from 1 to n that are not divisible by 4 or by 5. Write a JS program numberChecker.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
20    1, 2, 3, 6, 7, 9, 11, 13, 14, 17, 18, 19
-5    no
13    1, 2, 3, 6, 7, 9, 11, 13 


...all integer numbers from 1 to n that are NOT divisible by 4 or by 5 at the same time of calc.
*/

function printNumbers(number)
{
    if(number >0) //if the number is negative, then it's not usefull for the calculation
    {
        var result=''; //define an empty variable here to be used later...define it as an emty string, bevcause if you define it as number 0, the output would not be exactly as required, see for your self... var result = 0;...
        for(var i = 0; i <=number; i++)
        {
            if((i%4!=0) && (i%5!=0))
            {
                result += i + ', ';
            }
            //ps: you could place the console.log result-show code here, if you want to see how the calculation  on each iteration of the loop happens...
        }
        console.log(result.substring(0, result.length - 2)); //here we type "-2", not -1, because we are reading from the string, which has comma "," as the last symbol(element) of its lenght, so mathematically the answer would still be correct if we type in "-1", but not formatted as required in the condition of the task.
    }
    else
    {
        console.log('nope');
    }
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);