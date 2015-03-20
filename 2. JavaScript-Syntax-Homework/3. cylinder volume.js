/*Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: radius and the height of a straight circular cylinder. The function calculates the volume of the cylinder. Write JS program cylinderVol.js that calculates the volume of a few cylinders. The result should be printed on the console. Run the program through Node.js. */


function calcCylinderVolume(arr) 
{
    var radius = arr[0];
    var height = arr[1];
    var volume = Math.PI * Math.pow(radius, 2) * height;
    console.log(volume.toFixed(3));
}

calcCylinderVolume([2,4]);
calcCylinderVolume([5,8]);
calcCylinderVolume([12,3]);