/*Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0 and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots. */

function quadratic(a, b, c) 
{
    var d = (Math.pow(b, 2) - (4 * a * c));
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d > 0) 
    {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
        console.log("x1 = " + x1 + "\nx2 = " + x2);
    }
    if (d === 0) 
    {
        x1 = (-b) / (2 * a);
        console.log("X = " + x1);
    }
    if (d < 0) 
    {
        console.log("No real roots");
    }
}
quadratic(2, 5, -3);
quadratic(2, -4, 2);
quadratic(4, 2, 1);
