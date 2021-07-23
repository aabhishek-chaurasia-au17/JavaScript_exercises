// #  Linear Search

// let arr = [11, 10, 15, 20, 5]
// let target = 20

// const getSearch = (arr,target) =>{
//     for(let i = 0; i < arr.length; i++){
//          if(arr[i] === target){
//              return i
//          }
//      }return false
// }
// console.log(getSearch(arr,target)); 




let fruits = ['apple','mango','Kivi', 'bananaa', 'avacrdo']
let x = 'mango'

let getseach = (fruits,x) => {
    for(let j =0; j< fruits.length; j++){
        if(fruits[j] === x){
            console.log(j);
        }
    }
}

getseach(fruits,x)