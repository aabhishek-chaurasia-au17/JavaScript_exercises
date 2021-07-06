// JavaScript program to interchange first and last elements in a list.

// Input : [12, 35, 9, 56, 24]
// Output : [24, 35, 9, 56, 12]

// Input : [1, 2, 3]
// Output : [3, 2, 1]

// simple Mthod 1
const list1 = [1, 2, 3];
var temp1 = list1.pop()
var temp2 = list1.shift()
list1.push(temp2)
list1.unshift(temp1)
console.log(list1);


// simple Mthod 2

const swapValure = (list2) =>{
    
    list2[0], list2[list2.length -1] = list2[list2.length -1], list2[0]
    return list2
}

let list2 = [12, 35, 9, 56, 24];
console.log(swapValure(list2));
