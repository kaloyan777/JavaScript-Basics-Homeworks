/*Write a JavaScript function findYoungestPerson(persons) that accepts as parameter an array of persons, finds the youngest person and returns his full name. Write a JS program youngestPerson.js to execute your function for the below examples and print the result at the console.
Input    Output
var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32},
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);    The youngest person is George Kolev
*/


function findYoungestPerson(persons) //take input values from var persons
{
    var youngest;
    var youngestAge  = Number.MAX_VALUE; //assign value of maximal value of a number in js, so to do a comparison later with the value entered from input for the current age of a person, which for sure will be smaller than max_vlaue, that makes the condition true, and the if body code will happen

    for(var person in persons) //person = persons[i], persons = var for input that holds the peoples names and age.
    {
        if(persons[person].age < youngestAge)
        {
            youngest = persons[person].firstName + ' ' +
                persons[person].lastName; //append values to variable youngest, until the condition is true and the loop cycles
            youngestAge = person.age; //this way it gets always the smaller age than its current age value that it hold till the moment from the previous iteration of the loop anf if check
        }
    }
    return youngest;
}
var persons = [{firstName: 'George', lastName: 'Kolev', age: 32},
    {firstname: 'Bay', lastName: 'Ivan', age: 81},
    {firstName: 'Baba', lastName: 'Ginka', age: 40}];

console.log('The youngest person is %s', findYoungestPerson(persons));
