// JavaScript program to print odd numbers in a Array


// Given a list of numbers, write a Python program to print all odd numbers in given list.

// Example:

// Input: list1 = [2, 7, 5, 64, 14]
// Output: [7, 5]

// Input: list2 = [12, 14, 95, 3, 73]
// Output: [95, 3, 73]

const odd_num = (arr1) =>{
    let odd = []
    for(let i = 0; i < arr1.length; i++)
    if (arr1[i] % 2 !== 0){
        odd.push(arr1[i])
    }return odd
}

const arr1 = [12, 14, 95, 3, 73]
console.log(odd_num(arr1));