/*

Write a JavaScript function checkBrackets(str) to check if in a given expression the brackets are put correctly. Write JS program bracketsChecker.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'( ( a + b ) / 5 – d )'    correct
') ( a + b ) )'    incorrect
'( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'    incorrect


*/

function checkBrackets(str)
{
    var expression = str;
    var leftBracket = 0; //at first, there are no brackets
    var rigthBracket = 0;

    for(var i = 0; i< expression.length; i++)
    {
        if(expression[i] === '(') //if any if the elements of the expression is a bracket,
        {
            leftBracket++; //there is a left bracket occurrence
        }
        else if(expression[i]=== ')' && rigthBracket < leftBracket) //if any el is a right bracket, there is a right br. , and "&& rigthBracket < leftBracket" is because if the closing ones are more than the open ones, the mathematical logic is incorrect
        {
            rigthBracket++;
        }
        else if(expression[i]=== ')' && rigthBracket >=  leftBracket)
        {
            console.log('incorrect');  //according to the condition fo the task
            return;
        }
    }
    if(leftBracket === rigthBracket) //if there are as much opening and closing brackets occurring,
    {
        console.log('correct'); //mathematically, the logic is right.
    }
    else
    {
        console.log('incorrect'); //if not, not correct
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
