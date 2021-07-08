// JavaScript program to print all odd numbers in a range

// Given starting and end points, write a Python program to print all odd numbers in that given range.

// Example:

// Input: start = 4, end = 15
// Output: 5, 7, 9, 11, 13, 15

// Input: start = 3, end = 11
// Output: 3, 5, 7, 9, 11

const odd_num = (start,end) => {
    for(start; start <= end; start++)
    if(start % 2 !== 0){
        console.log(start);
    }
}
odd_num(4,15)