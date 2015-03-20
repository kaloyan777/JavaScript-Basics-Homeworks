/*
Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string. Write a JS program countOfDivs.js that invokes your function and prints the output at the console.

Examples:

Input    Output
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>index</title>
    <script src="/yourScript.js" defer></script>
</head>
<body>
    <div id="outerDiv">
        <div
    class="first">
            <div><div>hello</div></div>
        </div>
        <div>hi<div></div></div>
        <div>I am a div</div>
    </div>
</body>
</html>    7

*/


/*
A regular expression is an object that describes a pattern of characters.
Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
*/

function countDivs(html)
{
    var pattern = new RegExp('<div', 'g'); //'<div' is a pattern (to be used in a search). Modifier 'g' performs a global match (find all matches rather than stopping after the first match).
    return html.match(pattern).length;
}

var input =
'<!DOCTYPE html>' +
'<html>' +
'<head lang="en">' +
    '<meta charset="UTF-8">' +
    '<title>index</title>' +
    '<script src="/yourScript.js" defer></script>' +
'</head>' +
'<body>' +
    '<div id="outerDiv">' +
        '<div' +
    'class="first">' +
            '<div><div>hello</div></div>' +
        '</div>' +
        '<div>hi<div></div></div>' +
        '<div>I am a div</div>' +
    '</div>' +
'</body>' +
'</html>';

console.log(countDivs(input));
