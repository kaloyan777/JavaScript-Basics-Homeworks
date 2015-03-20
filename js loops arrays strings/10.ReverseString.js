/*

Write a JavaScript function reverseString(str) that reverses string and returns it. Write JS program stringReverser.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'sample'    elpmas
'softUni'    inUtfos
'java script'    tpircs avaj


*/

function reversedString(str)
{
    var resultStr = "";
    var strArray = str.split('');

    strArray = strArray.reverse();
    resultStr = strArray.joint('');

    return resultStr;
}

console.log(reversedString('sample'));
console.log(reversedString('softUni'));
console.log(reversedString('java script'));
