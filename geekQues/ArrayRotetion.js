// JavaScript Program for array rotation


// Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
// 1) Store d elements in a temp array
//    temp[] = [1, 2]
// 2) Shift rest of the arr[]
//    arr[] = [3, 4, 5, 6, 7, 6, 7]
// 3) Store back the d elements
//    arr[] = [3, 4, 5, 6, 7, 1, 2]

// METHOD 1  : 

let array = [1, 2, 3, 4, 5, 6, 7];

let temp = array.splice(5,2);

// let temp = array.pop()

// let temp2 = array.pop()

let finel = array.unshift(temp)

// console.log(array);

let all = []

for(var i = 0; i < array.length; i++){
   let use = append(array[i])
    break
}

console.log(all);







// METHOD 2  : 

// const rotate = (arr, count = 1) => {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
// };

// const arr = [1,2,3,4,5,6];

// console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
// console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
// console.log(rotate(arr, -2)); // [4, 5, 1, 2, 3]
// console.log(rotate(arr, -1)); // [5, 1, 2, 3, 4]