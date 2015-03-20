/*Write a JavaScript function variablesTypes(arr) that accepts the following parameters: name, age, isMale (true or false), array of your favorite foods.
The function must return the values of the variables and their types. */

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function variablesTypes(value)
{
    var name = "\"My name: " + value[0] + " //type is " + typeof (value[0]);
    var age = "\nMy age: " + value[1] + " //type is " + typeof (value[1]);
    var isMale = "\nI am male: " + value[2] + " //type is " + typeof (value[2]);
    var foods = "\nMy favorite foods are: " + value[3] + " //type is " + typeof (value[3]) + "\"";

    return name + age + isMale + foods;
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));


/*

variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']])    "My name: Pesho //type is string
My age: 22 //type is number
I am male: true //type is boolean
My favorite foods are: fries,banana,cake //type is object"


Constrains: Use typeof() to find the type of the variables.

*/
