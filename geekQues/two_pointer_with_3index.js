// Two Pointers Technique
// find the X sum index


const getpairsum = (arr,n,val) =>{
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                if(i==j==k){
                    continue;
                }if(arr[i]+arr[j]+arr[k] === val){
                    return arr[i], arr[j], arr[k]
                }else if(arr[i]+arr[j]+arr[k] > val){
                    break
                }
            }
        }
    }
}

var arr=[ 3, 5, 9, 2, 8, 10, 11 ];
         
var val = 17;

let n = 7;

console.log(getpairsum(arr,n,val));