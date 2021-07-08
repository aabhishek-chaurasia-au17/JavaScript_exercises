// JavaScript program to find largest number in a Arrays

// Input : list1 = [10, 20, 4]
// Output : 20

// Input : list2 = [20, 10, 20, 4, 100]
// Output : 100

 const largestnum = (arry) => {
    larges = arry[0];
    for(let i = 0; i < arry.length; i++){
        if(arry[i] > larges){
        larges = arry[i]
        
        }
    }
    return larges
}

let arry = [20, 10, 20, 4, 100]
console.log(largestnum(arry));