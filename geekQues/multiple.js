// JavaScript | Multiply all numbers in the list (4 different ways)

// Input :  list1 = [1, 2, 3] 
// Output : 6 
// Explanation: 1*2*3=6 

// Input : list1 = [3, 2, 4] 
// Output : 24

// way 1

const arrmultiply = (list1) =>{
    mul = 1
    for(var i = 0; i < list1.length; i++){
        mul *= list1[i]
    }
    return mul
}

list1 = [1, 2, 3]
console.log(arrmultiply(list1));


// Way 2

const arr = [1,2,3];
    const sum = arr.reduce((prevValue,curValue) => {
        return prevValue * curValue
    },1);
    
console.log(sum);