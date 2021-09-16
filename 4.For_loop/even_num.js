// JavaScript program to print all even numbers in a range

// Example:

// Input: start = 4, end = 15
// Output: 4, 6, 8, 10, 12, 14

// Input: start = 8, end = 11
// Output: 8, 10


const even_num = (start, end) =>{
    for(start; start < end; start++)
    if (start % 2 === 0){
        console.log(start)
    }
}
even_num(4,15);