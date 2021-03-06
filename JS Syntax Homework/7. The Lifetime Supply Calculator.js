/*Write a JavaScript function calcSupply(age, maxAge, food, foodPerDay) that accepts the following parameters: your age (years), your maximum age (years), your favorite food name (e.g. "chocolate"), estimate amount of your favorite food per day (a number).
The function calculates how many of the food you will eat for the rest of your life. Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you eat.
The result should be printed on the console. Run the program through Node.js. Note: we assume that there are no leap years.*/

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function calcSupply(age, maxAge, food, foodPerDay)
{
    totalAmmount = (maxAge - age) * foodPerDay * 365;
    console.log(totalAmmount + 'kg of ' +  food + ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);

/*
.................................................................

38
118
chocolate
0.5

14600kg of chocolate would be enough until I am 118 years old.
.................................................................

20
87
fruits
2

48910kg of fruits would be enough until I am 87 years old.
.................................................................

16
102
nuts
1.1

34529kg of nuts would be enough until I am 102 years old.
.................................................................
*/
