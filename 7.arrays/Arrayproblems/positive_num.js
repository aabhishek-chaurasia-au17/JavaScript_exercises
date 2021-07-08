// JavaScript program to print positive numbers in a Arrays

// Example:

// Input: list1 = [12, -7, 5, 64, -14]
// Output: 12, 5, 64

// Input: list2 = [12, 14, -95, 3]
// Output: [12, 14, 3]


const positive_num = (aarry) =>{
    let positivear = []
    for(let i = 0; i < aarry.length; i++)
    if (aarry[i] >= 0){
        aarry.push(aarry[i])
    }
    return positivear
}
let aarry = [12, -7, 5, 64, -14]
console.log(positive_num(aarry));
