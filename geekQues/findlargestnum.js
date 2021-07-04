
// JavaScript Program to find largest element in an array


// my way 1

let arr = [20, 10, 20, 4, 100]
let max = arr[0]
const largest = () =>{
    for(let i = 0; i < arr.length; i++)
    if ( arr[i] > max){
        max = arr[i]
        return max
    }
}
console.log(largest());