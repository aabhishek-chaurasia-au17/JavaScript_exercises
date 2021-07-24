// Upper Bound

const findeUpperBound = (arr,x) =>{
    let prev = arr.length -1
    for(let i = 0; i < prev; i++){
        if(arr[i] === x){
            return i
        }else if(arr[i] < x){
            return prev-1
        }
    }
}   

let arr = [2, 2, 2, 4, 4, 5, 5, 5, 6, 7, 7, 9, 9, 12]
x = 3
console.log(findeUpperBound(arr,x));



// def upper_bound(A, target):
//     prev = len(A)
//     for index in range(len(A)-1,0,-1):
//         if A[index] == target:
//             return index

//         elif A[index] < target:
//             return prev

//         prev = index     


// A = [1,1,1,2,2,5,6,6,7,7]
// target = 7
// print(upper_bound(A, target))



