
let array = [1,2,3,4,5]

// way 1
// let sumall = (array) =>{
//     let sum = 0;
//     for(let i = 0; i < array.length; i++)
//         sum += array[i]
//         return sum
// }

// console.log(sumall(array));


// way2
let sum = array.reduce((accumulatar, curElem) => {
    return accumulatar += curElem
});
console.log(sum);

