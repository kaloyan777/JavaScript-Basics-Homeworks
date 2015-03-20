/*Write a JavaScript function findLargestBySumOfDigits(arr) that accepts as a parameter an array of numbers or/and strings and returns the element with the largest sum of its digits. The function should take a variable number of arguments. It should return undefined when 0 arguments are passed or when some of the arguments is not an integer number. Write a JS program largestSumOfDigits.js that invokes your function with the sample input data below and prints its output at the console. Examples:
Input    Output
[5, 10, 15, 111]    15
[33, 44, -99, 0, 20]    -99
['hello']    undefined
[5, 3.3]    undefined*/

function findLargestBySumOfDigits(arr)
{
    var largestBySumOfDigits, maxSum = -1; //Create the variables needed to solve the task.

    for(var i = 0; i < arr.length; i++)
    {
        var number = Math.abs(Number(arr[i])); //Take the absolute(positive) value of the number, and NumberParse its value before do the checks.
        if(!isInt(number)) //= If it's not true that (return n%1===0;) = n divided by 1 gives remainder 0 (any number divided by 1 will give result = the number itself), then return undefined; because such number does not exist.
        {
            return undefined;
        }

        var currentSum = 0; //temporary holds the value of the sum of digits
        while(number > 0)
        {
            currentSum += number % 10; //accumulating the value of currentsum of digits of the number that's being checked for biggest sum of digits
            number = Math.floor(number/10); //math.floor rounds the number/10 to a whole number
        }
        if(currentSum == Math.max(currentSum, maxSum)) //if teh current sum is equal to the bigger of the two(currentSum, maxSum),
        {
            maxSum = currentSum;
            largestBySumOfDigits = arr[i]; //append a value for result
        }
    }
    return largestBySumOfDigits;
}

function isInt(n)
{
    return n%1===0;
}
console.log(findLargestBySumOfDigits([5, 10, 15, 111])); //input values for check
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));
