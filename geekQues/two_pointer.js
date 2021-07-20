// Two Pointers Technique
// find the X sum index

const getXindex = (arr,x) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; i < arr.length; j++){
            if(arr[i]+arr[j]==x){
                return [i, j]
            }
        }
    }
}

let arr = [2,4,5,7,9,11]
let x = 13;
console.log(getXindex(arr,x));



