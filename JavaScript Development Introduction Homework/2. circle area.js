/*Write a JavaScript function calcCircleArea(r) that takes as a parameter the radius 
of a rectangle and calculates and returns its area. Put the function in a file named circle-area.js. 
Write a HTML page circle-area.html that includes the script circle-area.js and calculates 
and prints in the page body the area of circles of size r=7, r=1.5 and r=20.*/

function calcCircleArea(r)
{
    var area = Math.PI * Math.pow(r, 2); //math.pow(r,2) = r*r
    document.write("<p>r = " + r + "; area = " + area + "</p>");
}

