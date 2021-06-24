// Syntax for declaration & initialization:

// var arrayName;
// arrayName = [value1, value2, value3, ..., valueN];


// Syntax for accessing an element in an array:
// arrayName[i];


// Create an array named yearArr with values 2000 to 2004 as numbers
var yearArr = [2000, 2001, 2002, 2003, 2004];

// Print the array here
console.log(yearArr.length);

// Shopping Mart
// Description
// Create an array in which you need to add the following items and their required quantities:

// Given below are the items and their corresponding quantities:
// Item - Quantity
// Milk - 5
// Bread - 2
// Potato - 3

// You are required to create two arrays - itemsArr & quantityArr. The first array consists of the items and the second array consists of the quantities. Remember to keep each item and its corresponding quantity at the same index in both the arrays.

// In the end, print the items and their corresponding quantities in the following format:
// Milk - 5
// Bread - 2 
// Potato - 3

// Hint:
// Use a for loop to iterate over both arrays simultaneously.

// Notes:
// 1. Each item and its corresponding quantity needs to be printed on a new line.
// 2. Each item and its corresponding quantity is separated by a space, then hyphen and space.
// Execution Time Limit
// 15 seconds

// Create two arrays - itemsArr and quantityArr
// itemsArr consists of items - Milk, Bread, Potato
var itemsArr = ['Milk', 'Bread', 'Potato'];
// quantityArr consists of values - 5, 2, 3
var quantityArr = [5, 2, 3];
/* 
Print the following result:
Milk - 5
Bread - 2
Potato - 3
*/
for (var i = 0; i < itemsArr.length; i++) {
    console.log(itemsArr[i] + ' - ' + quantityArr[i]);
}