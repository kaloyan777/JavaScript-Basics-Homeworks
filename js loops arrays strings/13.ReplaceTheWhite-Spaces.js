/*

Write a JavaScript function replaceSpaces(str) that replaces the white-space characters in a text with &nbsp;. Write JS program spaceReplacer.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'But you were living in another world tryin' to get your message through'    Butyouwerelivinginanotherworldtryin'togetyourmessagethrough

*/


function replaceSpaces(str)
{
    var text = str;
    text = text.replace(/\s+/g, '');

    console.log(text;)
}
replaceSpaces('But you were living in another world trying\' to get your message through');
