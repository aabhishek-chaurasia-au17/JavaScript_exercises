// JavaScript program to find N largest elements from a list

// Input : [4, 5, 1, 2, 9] 
//         N = 2
// Output :  [9, 5]

// Input : [81, 52, 45, 10, 3, 2, 96] 
//         N = 3
// Output : [81, 96, 52]

const N_elements = (arry,n) => {
    for(var i = 0; i < arry.length; i++)
    arry.sort((a,b) => (b-a))
    return arry.splice(0,n)
}
let arry = [4, 5, 1, 2, 9]
let n = 2
console.log(N_elements(arry,n))

