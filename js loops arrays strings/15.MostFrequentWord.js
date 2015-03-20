/*

Write a JavaScript function findMostFreqWord(str) that finds the most frequent word in a text and prints it, as well as how many times it appears in format "word -> count". Consider any non-letter character as a word separator. Ignore the character casing. If several words have the same maximal frequency, print all of them in alphabetical order. Write JS program frequentWord.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'in the middle of the night'    the -> 2 times
'Welcome to SoftUni. Welcome to Java. Welcome everyone.'    welcome -> 3 times
'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'    come -> 2 times
darling -> 2 times
hello -> 2 times
my -> 2 times
welcome -> 2 times


*/

function findMostFreqWord(str)
{
    var tempArray = str.split(/[\W\d]+/);
    var stringArray = tempArray.filter(function(v){return v!==''});

    var wordFrequences = {};
    var maxFrequentWordCount = 1;

    for(var i = 0; i < stringArray.length; i++)
    {
        stringArray[i] = stringArray[i].toLowerCase();
        if(!wordFrequences[stringArray[i]])
        {
            wordFrequences[stringArray[i]] = 1;
        } else
        {
            wordFrequences[stringArray[i]] += 1;
        }
    }

    for(key in wordFrequences)
    {
        var value = wordFrequences[key];
        if(value >= maxFrequentWordCount)
        {
            maxFrequentWordCount = value;
        }
    }

    var sortedKeys = Object.keys(wordFrequences).sort();

    for(var sortedKey in sortedKeys)
    {
        if(wordFrequences[sortedKeys[sortedKey]] === maxFrequentWordCount)
        {
            console.log(sortedKeys[sortedKey] + ' -> ' + wordFrequences[sortedKeys[sortedKey]] + ' times');
        }
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
