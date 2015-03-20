/*Write a JavaScript function convertDigitToWord(value) that prints the name of an integer number n (0<n<10)
in English using switch statement.
Write JS program digitAsWord.js that prints a few digits on the console.
Run the program through Node.js.*/

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function convertDigitToWord(digit)
{
    var digitAsWord;
    switch (digit)
    {
        case 1: digitAsWord = 'one'; break;
        case 2: digitAsWord = 'two'; break;
        case 3: digitAsWord = 'three'; break;

        case 4: digitAsWord = 'four'; break;
        case 5: digitAsWord = 'five'; break;
        case 6: digitAsWord = 'six'; break;

        case 7: digitAsWord = 'seven'; break;
        case 8: digitAsWord = 'eight'; break;
        case 9: digitAsWord = 'nine'; break;

        default: digitAsWord = 'not a digit'; break;
    }
    console.log(digitAsWord);
}

for (var i = 1; i < 10; i++)
{
    convertDigitToWord(i);
}


/*
Input    Output
8       eight
3       three
5       five

*/
