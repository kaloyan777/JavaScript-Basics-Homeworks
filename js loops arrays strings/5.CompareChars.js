/*

Write a JavaScript function compareChars(arr1, arr2) that compares two arrays of chars lexicographically (letter by letter). Write JS program charComparer.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']    Equal

['3', '5', 'g', 'd']
['5', '3', 'g', 'd']    Not Equal

['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';']
['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']    Not Equal


*/

function compareChars(arr1, arr2)
{
    if(arr1.length != arr2.length) //com pare only the lengths of the arrays
    {
        console.log('not equal');
    }
    else
    {
        var equal = true;
        for(var i = 0; i < arr1.length; i++) //compare the elements of tthe arrays
        {
            if(arr1[i] !== arr2[i])
            {
              equal = false;
                console.log('not equal');
                break;
            }
        }
        if(equal)
        {
            console.log('equal');
        }
    }
}

var arr1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr3 = ['3', '5', 'g', 'd'];
var arr4 = ['5', '3', 'g', 'd'];
var arr5 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
var arr6 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];

compareChars(arr1, arr2);
compareChars(arr3, arr4);
compareChars(arr5, arr6);
