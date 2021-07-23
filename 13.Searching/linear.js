// #  Linear Search

let arr = [11, 10, 15, 20, 5]
let target = 20

const getSearch = (arr,target) =>{
    for(let i = 0; i < arr.length; i++){
         if(arr[i] === target){
             return i
         }
     }return false
}
console.log(getSearch(arr,target)); 



