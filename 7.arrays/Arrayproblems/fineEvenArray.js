// JavaScript program to print even numbers in a Arrays

// Example:

// Input: list1 = [2, 7, 5, 64, 14]
// Output: [2, 64, 14]

// Input: list2 = [12, 14, 95, 3]
// Output: [12, 14]


const even_num = (arry1) =>{
    let even = []
    for(let i =0; i < arry1.length; i++)
    if (arry1[i] % 2 === 0){
        even.push(arry1[i])
    }return even
}
arry1 = [2, 7, 5, 64, 14]
console.log(even_num(arry1)); 