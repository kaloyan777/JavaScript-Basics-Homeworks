/*

Write a JavaScript function findMaxSequence(arr) that finds the maximal sequence of equal elements in an array and returns the result as an array. If there is more than one sequence with the same maximal length, print the rightmost one. Write JS program sequenceFinder.js that invokes your function with the sample input data below and prints the output at the console. Examples:

Input    Output
[2, 1, 1, 2, 3, 3, 2, 2, 2, 1]    [2, 2, 2]
['happy']    [happy]
[2, 'qwe', 'qwe', 3, 3, '3']    [3, 3]

*/

function findMaxSequence(arr)
{
    var maxCount = 1, //max count of elements in the sequence
    tempCount = 1, //variable used to hold temporary the count of the sequance that is being checked at the moment
    lastIndex = 0, //last index(top border) of the sequence
    firstIndex = 0,
    tempIndex = 0, //temp first index
    resultArr = []; //an array to hold the result of the check for max sequence

    for(var i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] === arr[i + 1]) //using ===, not just == because we are checking strings as well
        {
            tempCount++; //If there are equal elements in the length of the array tempCount will increase its value, to count the number of equals(how many they are)
            tempIndex = i +1; //then the temporary first index of this sequence would be this index of the array+1 = the next index of th two that are equal.                                     Why? Because to avoid the repeating of equals for the next iteration of the loop(next check for equals) and so to begin checking                                 for a new sequance from a non repeating element.
            if(i === arr.length -2)
            {
                if(tempCount >= maxCount)
                { //if the count of el. >= max count of such el.
                    maxCount = tempCount; //than append the value of temp to max, for the next calculation check
                    lastIndex = tempIndex; //and the value of the temp index of new sequence to the last index of sequence found at the moment
                }
            }
        }
        else
        {
            if(tempCount >= maxCount)
            {
                maxCount = tempCount;
                lastIndex = tempIndex;
            }
            tempCount = 1; //resets the default(first) value of the variable
        }
    }
    firstIndex = lastIndex - maxCount +1; // same as to say x = 10 - 10 + 1; last index is the last element that is equal to the other in the sequence, while maxcount is the number of all the elements in the sequence of repeating elements, first index is the beggining of this rep. sequence, + 1 so to keep the next calsulation check from the next element, notfrom the last identified as equal to the others

    for(var i = firstIndex, j = 0; i < firstIndex + maxCount; i++, j++)
    {
        resultArr[j] = arr[i];
    }
    return resultArr;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));

