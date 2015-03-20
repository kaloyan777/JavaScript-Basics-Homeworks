/*
Write a JavaScript function biggerThanNeighbors(index,  arr) that accept a number and an integer array as parameters. The function should return a Boolean number: whether the element at the given position in the array is bigger than its two neighbors (when such exist). It should return undefined when the index doesn't exist. Write a JS program that invokes the function with the sample data below and prints the result at the console following the samples below:

Input    Output
2, [1, 2, 3, 3, 5]    not bigger
2, [1, 2, 5, 3, 4]    bigger
5, [1, 2, 5, 3, 4]    invalid index
0, [1, 2, 5, 3, 4]    only one neighbor
*/


function biggerThanNeighbors(index, arr) //Accept a number and an integer array as parameters.
{
    if(index >= 0 && index < arr.length) //If the index is valid = it can't be less than 0 or bigger than the maximal index(lenght of the array)...
    {
        if(index == 0 || index == arr.length -1) //If even only one of both conditions is true,
        {
            return NaN; //say it's not a number.
        }

        //Creating a set of indexes to compare the middle one with the other two - its neighbors - left & right.
        var number = arr[index];
        //index - 1 or + 1 means: give me the index that has a value of its position in the array (index -1) from the current index that i am on now, or + 1...this way you can access the left or right neighbor indexes of the current middle one.
        var leftNum = arr[index -1];
        var rightNum = arr[index +1];

        return Math.min(number - leftNum, number - rightNum); //Give me the smaller of these two values. We do this because: "return a Boolean number: whether the element at the given position in the array is bigger than its two neighbors"
    }
}

function printResult(index,arr)
{
    var result = biggerThanNeighbors(index,arr);

    if(result == undefined) //It should return undefined when the index doesn't exist. Ex: 5, [1, 2, 5, 3, 4] - invalid index because there is no index 5(counting from 0,1,2,3...)
    {
        console.log("invalid index");
    }
    else if(isNaN(result)) //Use the isNaN() global function to check if a value is a NaN value.
    {
        console.log("only one neightbor"); //...see the second if statement condition check if the previous function...
    }
    else if(result > 0) //2, [1, 2, 5, 3, 4] - bigger: index 2 = number 5, 5 is bigger than index-1(2) and index+1(3).
    {
        console.log("bigger");
    }
    else //In any other case it would happen that the number is not bigger than its neighbors.
    {
        console.log("not bigger");
    }
}
printResult(2, [1, 2, 3, 3, 5]); //input
printResult(2, [1, 2, 5, 3, 4]);
printResult(5, [1, 2, 5, 3, 4]);
printResult(0, [1, 2, 5, 3, 4]);
