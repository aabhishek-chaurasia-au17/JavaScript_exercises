//JavaScript Program to find largest element in an array

//Given an array, find the largest element in it.

//Input : arr[] = {10, 20, 4}
//Output : 20

//Input : arr[] = {20, 10, 20, 4, 100}
//Output : 100

const getlargestele = (arr) =>{
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }return max
}

let arr = [20, 10, 20, 4, 100];
console.log(getlargestele(arr));