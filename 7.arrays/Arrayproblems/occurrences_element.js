// JavaScript | Count occurrences of an element in a Array

// Examples: 
 
// Input : lst = [15, 6, 7, 10, 12, 20, 10, 28, 10]
//          x = 10
// Output : 3 
// 10 appears three times in given list.

// Input : lst = [8, 6, 8, 10, 8, 20, 10, 8, 8]
//         x = 16
// Output : 0

const occurrence_element = (arr) => {
    count = 0
    for(var i =0; i<arr.length; i++){
        if(arr[i] === x){
            count += 1
        }
    }
    return count

}
let arr = [15, 6, 7, 10, 12, 20, 10, 28, 10]
let x = 10
console.log(occurrence_element(arr),`${10} has occurred ${count} time`);
