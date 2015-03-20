/*Write a JavaScript function treeHouseCompare(arr) that accepts the following parameters: integers a and b.
The function compares the area of the house and the area of the tree (Figure 1) and returns the name of the figure with bigger area (house or tree) and the value of the area. Write JS program treehouse.js that compares a few houses and trees.
The result should be printed on the console.
Run the program through Node.js.*/

/*In cmd navigate to the homework folder dir using cd/..., type in "node "name of the problem" - using "", because I've used spaces in between the words of the names.*/

function treeHouseCompare(a, b) {
    var houseArea = ((a * a) + (a * a * 2) / 6);

    var circleRadius = (b / 3) * 2;
    var treeArea = (b * (b / 3)) + (Math.PI * (circleRadius * circleRadius));

    if (houseArea > treeArea)
    {
        return 'house/' + houseArea.toFixed(2);
    }
    else if (houseArea < treeArea)
    {
        return 'tree/' + treeArea.toFixed(2);
    }
    else
    {
        return 'equal/' + houseArea.toFixed(2);
    }
}

console.log(treeHouseCompare(3, 2)); /*a=3, b=2*/
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));

/*

Input    Output    Figure 1

[3, 2]
    house/12.00
/*look in the word file to see figures*/

