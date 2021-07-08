// JavaScript program to find second largest number in a Arrays

// Input: list1 = [10, 20, 4]
// Output: 10

// Input: list2 = [70, 11, 20, 4, 100]
// Output: 70

// esay way 1

const second_largest = (asrrys) => {
    
    for(let i = 0; i < asrrys.length; i++){
        asrrys.sort((a, b) => (b-a))
        return asrrys[1]
    }
    
}

let asrrys = [70, 11, 20, 4, 100]
console.log(second_largest(asrrys))

// diffrent way 2

const get_second_larg = (arrys) => {
    let first = 0;
    let second = 0;
    for(let j = 0; j < arrys.length; j++)
    if(arrys[j] > first){
        second = first;
        first = arrys[j]
    }else if(arrys[j] > second && arrys[j] < first){
        second = arrys[j];
    }
    return second
}
let arrys = [70, 11, 20, 4, 80, 100]
console.log(get_second_larg(arrys))