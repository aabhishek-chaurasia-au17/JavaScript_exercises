// JavaScript Program for array rotation


// Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
// 1) Store d elements in a temp array
//    temp[] = [1, 2]
// 2) Shift rest of the arr[]
//    arr[] = [3, 4, 5, 6, 7, 6, 7]
// 3) Store back the d elements
//    arr[] = [3, 4, 5, 6, 7, 1, 2]

// METHOD 1  : 

const arryrotate = (arr,k) =>{

    for(let i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    return arr
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2; 
let n = 7;
console.log(arryrotate(arr,k)); 


// METHOD 2  : 

// const rotate = (arr, count = 1) => {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
// };

// const arr = [1,2,3,4,5,6];

// console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
// console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
// console.log(rotate(arr, -2)); // [4, 5, 1, 2, 3]
// console.log(rotate(arr, -1)); // [5, 1, 2, 3, 4]

// METHOD 3 Not Working  : 

const arryrotation = (arry,k1,n1) =>{

    for(let j = 0; j < k1; j++)
    {
    arry = (n1 + j - k1) % n1
    return arry
    }
}
let arry = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3; 
let n1 = 7;
console.log(arryrotation(arry,k1,n1))