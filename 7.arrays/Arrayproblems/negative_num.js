// JavaScript Python program to print negative numbers in a Array

// Example:

// Input: list1 = [12, -7, 5, 64, -14]
// Output: -7, -14

// Input: list2 = [12, 14, -95, 3]
// Output: -95

const negative_num = (list1) =>{
    nagetive = []
    for(let i = 0; i < list1.length; i++)
    if(list1[i] <= 0){
        nagetive.push(list1[i])
    }
    return nagetive
}
list1 = [12, -7, 5, 64, -14]
console.log(negative_num(list1));