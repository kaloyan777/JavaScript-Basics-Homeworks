/*Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: radius and the height of a straight circular cylinder.
The function calculates the volume of the cylinder.
Write JS program cylinderVol.js that calculates the volume of a few cylinders. The result should be printed on the console.
Run the program through Node.js*/

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/


function calcCylinderVol(radius, height) 
{
    var cylinderVolume = Math.PI * Math.pow(radius, 2) * height; 
    return cylinderVolume.toFixed(3); /*rounding the result up to the third digit after the floating point*/
}

console.log(calcCylinderVol(2, 4)); /*values for radius and to calculate with*/
console.log(calcCylinderVol(5, 8));
console.log(calcCylinderVol(12, 3));


/*

Input    Output
[2, 4]    50.265
[5, 8]    628.319
[12, 3]    1357.168


*/
