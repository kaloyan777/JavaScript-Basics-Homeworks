/*

Write a JavaScript function displayProperties() that displays all the properties of the "document" object in alphabetical order. Write a JS program docProperties.js that invokes your function with the sample input data below and prints the output at the console. Examples:
Output
activeElement
alinkColor
all
…
xmlVersion
Note: The output above is a sample and may be different in your browser.


*/

function displayProperties()
{
    var array = Object.getOwnPropertyNames(document); //this a standart js command for calling the properties of a html document, "document" stands for the html doc
    array.sort; //to sort the array
    console.log(array.join('\n')); //this is used to display results on the browsers console when press F12 for example

    var resultStr = array.join('<br>'); //this is used to display results on the web-site page.html as a sigle page message for example
    document.getElementById('result').innerHTML = resultStr; //"document" = the html document from which we call the .js file, getElementById('result'), gives you the <p id="result"></p> from html doc, .innerHTML = resultStr, allows you to type in data to the <p> element.
}
displayProperties(); //calls the function to be executed



