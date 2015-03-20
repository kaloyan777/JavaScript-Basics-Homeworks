/*

Sorting an array means to arrange its elements in increasing order. Write a JavaScript function sortArray(arr) to sort an array. Use the "selection sort" algorithm: find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc. Write JS program arraySorter.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
[5, 4, 3, 2, 1]    1, 2, 3, 4, 5
[12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]    2, 3, 3, 6, 6, 12, 12, 22, 50, 51, 712


*/

function sortArray(arr)
{
    var resultArr = arr; //takes the value of the arrays used as input, because it changes it later, and you can not change the properie of a function
    var minIndex;
    var tempNumber;

    for (var j = 0; j < resultArr.length - 1; j++)
    {
        minIndex = j; //a start value for minindex
        for (var i = j + 1; i < resultArr.length; i++) //i = j + 1, so to begin its iteration from the next index, after first j index
        {
            if (resultArr[i] < resultArr[minIndex]) //any fot he elements of the input array is < the minimal index
            {
                minIndex = i; //then minimal has to append the value of i,
            }
        }
        if(minIndex != j) //and then wehen it knows what minindex is equal to, will check if it's != j, and if it's not equal,
        {
            //then do these exchanges of these values, so to sort their values in a way to do the calulation
            tempNumber = resultArr[j];
            resultArr[j] = resultArr[minIndex];
            resultArr[minIndex] = tempNumber;
        }
    }
    console.log(resultArr.join(', '));
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
