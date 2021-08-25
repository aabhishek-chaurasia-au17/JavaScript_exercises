// JavaScript program to print all positive numbers in a range

// Example:

// Input: start = -4, end = 5
// Output: 0, 1, 2, 3, 4, 5 

// Input: start = -3, end = 4
// Output: 0, 1, 2, 3, 4

const positive_num = (start, end) => {
    
    for(start; start < end; start++)
        if(start >= 0){
            console.log(start)
        }
    
}
positive_num(-4, 5);

