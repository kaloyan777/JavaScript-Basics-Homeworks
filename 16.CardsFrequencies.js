/*

Write a JavaScript function findCardFrequency(str) that that accepts the following parameters: string of several cards (face + suit), separated by a space. The function calculates and prints at the console the frequency of each card face in format "card_face -> frequency". The frequency is calculated by the formula appearances / N and is expressed in percentages with exactly 2 digits after the decimal point. The card faces with their frequency should be printed in the order of the card face's first appearance in the input. The same card can appear multiple times in the input, but its face should be listed only once in the output. Write JS program cardFrequencies.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Input    Output
'8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'    8 -> 10.00%
2 -> 10.00%
4 -> 10.00%
10 -> 20.00%
J -> 10.00%
A -> 10.00%
K -> 30.00%
'J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'    J -> 22.22%
2 -> 77.78%
'10♣ 10♥'    10 -> 100.00%


*/

function findCardFrequency(str)
{
    var tempFaces = str.split(/\W+/g);
    var faces = tempFaces.filter(function(v)
    {
        return v!=='';
    }
    );

    var facesCount = {};

    for(var i = 0; i<faces.length; i++)
    {
        var key = faces[i];
        if(!facesCount[key])
        {
            facesCount[key] = 0;
        }
        facesCount[key] += 1;
    }

    for(var i = 0; i< faces.length; i++)
    {
        var key = faces[i];
        if(facesCount[key])
        {
            var frequency = ((facesCount[key]/faces.length)*100).toFixed(2);
            console.log(key + ' -> ' + frequency + '%');
            delete facesCount[key];
        }
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');
