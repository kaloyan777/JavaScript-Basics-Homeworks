/*

Write a JavaScript function findMaxSequence(arr) that finds the maximal increasing sequence in an array of numbers and returns the result as an array. If there is no increasing sequence the function returns 'no'.
Write JS program maxSequenceFinder.js that invokes your function with the sample input data below and prints the output at the console.

Examples:
Input    Output
[3, 2, 3, 4, 2, 2, 4]        [2, 3, 4]
[3, 5, 4, 6, 1, 2, 3, 6, 10, 32]    [1, 2, 3, 6, 10, 32]
[3, 2, 1]    no


*/

//for comments, look at the previous task, here the only difference is that we are working with numbers not with strings as well,
//which makes the task easier to solve

function findMaxSequence(arr)
{
    var maxCount = 1;
    var tempCount = 1;
    var lastIndex = 0;
    var tempIndex = 0;
    var resultArr = [];
    var sequenceFound = false;

    for(var i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] < arr[i + 1])
        {
            tempCount++;
            tempIndex = i + 1;
            sequenceFound = true;
            if(i === arr.length - 2)
            {
                if (tempCount > maxCount)
                {
                    maxCount = tempCount;
                    lastIndex = tempIndex;
                }
            }
        }
        else
        {
            if (tempCount > maxCount)
            {
                maxCount = tempCount;
                lastIndex = tempIndex;
            }
            tempCount = 1;
        }
    }

    if (!sequenceFound)
    {
        return 'no';
    }
    else
    {
        var startIndex = lastIndex - maxCount + 1;
        for (var i = startIndex, j = 0; i < startIndex + maxCount; i++, j++)
        {
            resultArr[j] = arr[i];
        }
        return resultArr;
    }
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
