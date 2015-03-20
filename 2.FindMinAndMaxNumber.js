/*

Write a JavaScript function findMinAndMax(arr) that accepts as parameter an array of numbers. The function finds the minimum and the maximum number. Write a JS program minMaxNumbers.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
[1, 2, 1, 15, 20, 5, 7, 31]    Min -> 1
Max -> 31
[2, 2, 2, 2, 2]    Min -> 2
Max -> 2
[500, 1, -23, 0, -300, 28, 35, 12]    Min -> -300
Max -> 500

*/


function findMinAndMax(array) //array = *
{
    var minN = array[0]; //accept that either the smallest and biggest numbers are the first index of the array, as if they are equal anyway
    var maxN = array[0];
    for(var i = 0; i < array.length; i++) //for every next iteration,
    {
        if(array[i] < minN) //if there is such match,
        {
            minN = array[i]; //append this value,
        }
        if(array[i] > maxN) //or this value
        {
            maxN = array[i];
        }
    }
    console.log('Min - ' + minN); //and then print out the result.
    console.log('Max - ' + maxN);
}
findMinAndMax([1,2,1,15,20,5,7,31]); //* = findMinAndMax(array)
findMinAndMax([2,2,2,2,2]);
findMinAndMax([500,1,-23,0,-300,28,35,12]);




