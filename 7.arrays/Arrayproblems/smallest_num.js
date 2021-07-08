// JavaScript program to find smallest number in a Array

// Input : list1 = [10, 20, 4]
// Output : 4

// Input : list2 = [20, 10, 20, 1, 100]
// Output : 1

// way 1

const small_num = (arr1) =>{
    for( let i = 0; i < arr1.length; i++){
        arr1.sort();
    }
    return arr1[0]
}

let arr1 = [20, 10, 20, 1, 100]
console.log(small_num(arr1))


// way 2

let Arrys = [10, 20, 4];
let smallest = Arrys[0];

for(let j = 0; j < Arrys.length; j++){
    if(Arrys[j] < smallest){
        smallest = Arrys[j];
    }
    
}

console.log(smallest);