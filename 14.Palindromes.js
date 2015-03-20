/*

Write a JavaScript function findPalindromes(str) that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe". Write JS program palindromesExtract.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'There is a man, his name was Bob.'    a, bob


*/

function findPalindromes(str)
{
    var result = [];

    var words = str.toLowerCase().split(/[ .,!?]+/);
    for(var i = 0; i< words.length; i++)
    {
        if(isPalindrome(words[i]) && words[i].length > 0) //if there is an existing element isPalindrome(words[i]), and if words[i].length > 0
        {
            result.push(words[i]); //and then add this element in the array for answers
        }
    }
    console.log(result.join(', '));
}
function isPalindrome(word)
{
    var wordReversed = word.split('').reverse().join('');
    if(word===wordReversed)
    {
        return true;
    }
    else
    {
        return false;
    }
}
findPalindromes('There is man, his name was Bob.');





