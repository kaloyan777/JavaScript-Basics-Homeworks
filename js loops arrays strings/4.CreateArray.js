/*

Write a JavaScript function createArray() that allocates array of 20 integers and initializes each element by its index multiplied by 5. Write JS program arrayBuilder.js that invokes your and prints the output at the console.
output: 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100

*/

function createArray()
{
    var array = new Array(21); //21
    for(var i = 0; i < array.length; i++)
    {
        array[i]= i * 5;
    }
    console.log(array);
}
createArray();
