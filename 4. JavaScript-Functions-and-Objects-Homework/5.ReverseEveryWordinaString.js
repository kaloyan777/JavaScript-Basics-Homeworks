/*
Write a JavaScript function reverseWordsInString(str) that accepts as a parameter a string and reverses the characters of every word in the string but leaves the words in the same order. Words are considered to be sequences of characters separated by spaces. Write a JavaScript program reverseWords.js that prints on the console the output of the examples below:
Input    Output
'Hello, how are you.'    ,olleH woh era .uoy
'Life is pretty good, isn’t it?'    efiL si ytterp ,doog t'nsi ?ti
*/

function reverseWordsInString(str)
{
    var words = str.split(' ');
    var result = "";

    for(var i = 0; i < words.length; i++)
    {
        result += words[i].split('').reverse().join('');
        result += ' ';
    }
    return result.trim();
}
console.log(reverseWordsInString('Hello, how are you?'));
console.log(reverseWordsInString('Life is pretty good, isn\'t it?'));
