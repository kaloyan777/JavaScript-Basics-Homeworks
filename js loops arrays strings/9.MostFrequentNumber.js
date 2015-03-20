/*

Write a JavaScript function findMostFreqNum(arr) that finds the most frequent number in an array. If multiple numbers appear the same maximal number of times, print the leftmost of them. Write JS program numberFinder.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]    4 (5 times)
[2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]    1 (4 times)
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]    1 (1 times)


*/

function findMostFreqNum(arr)
{
    var mostFrequentNumber = arr[0]; //assume the mostfrequent num is the first element of the array, so to start comparing the elements with it(we have to start from somewhere anyway)
    var maxCount = 1; //assume that there is a maxcount and a temporary count of a most frequent repeating number in the array, as if the [0] element is this one.
    var tempCount = 1;

    for(var i = 0; i < arr.length - 1; i++) //iterate over the length of the array to do the check...
    {
        for(var j = i+1; j < arr.length; j++) //use a second nested for loop starting from the next element(j = i+1) after the first(i = 0), here the update will  not be length-1 as it is in the upper for, because here the scope of iteration in the nested for loop is 1 element smaller that the one in the first(main) for, ...so it's just a simple mathematical calculation ---> 1st (0-length-1: 0,1,2,3,4,5(length = 6 elements)), 2nd (1-length: 1,2,3,4,5(lenght = 5 elements)), or at least i think so :P
        {
            if(arr[i] === arr[j]) //so if there occurs a coincidence in the values of two elements,
            {
                tempCount++; //let the computer know about it using this variable, holding the count of such cases
            }
        }
        if(tempCount > maxCount)
        {
            maxCount = tempCount; //if the count of equal elements is bigger than the previous count of equal elements so far, append this temp value...make an update to the value of maxcount, because maxcount is the one taht has to hold the last rezult, not temporary, temp is being reused for the checks along the array's length
            mostFrequentNumber = arr[i]; //and the most frequent number variable has to hold the value of this element taht is being repeated the most so far
        }
        tempCount = 1; //default restaring oif the value, in case coincidence does not occur
    }
    console.log(mostFrequentNumber+ '('+maxCount + 'times)')
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
