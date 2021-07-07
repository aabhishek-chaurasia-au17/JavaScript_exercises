// program to find sum of elements in Array

// Input: [12, 15, 3, 10]
// Output: 40

// Input: [17, 5, 3, 5]
// Output: 30

const sumarr = (arr) =>{
    
    sum = 0
    for(var i =0; i < arr.length; i++)
    {
    sum += arr[i]
    }
    return sum
}
let arr = [12, 15, 3, 10]
console.log(sumarr(arr));