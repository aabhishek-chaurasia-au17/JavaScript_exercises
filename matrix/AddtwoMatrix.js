// JavaScript program to add two Matrices

/**Examples: 

Input :
 X= [[1,2,3],
    [4 ,5,6],
    [7 ,8,9]]
 
Y = [[9,8,7],
    [6,5,4],
    [3,2,1]]
 
Output :
 result= [[10,10,10],
         [10,10,10],
         [10,10,10]]
*/


let X = [[1,2,3],
        [4,5,6],
        [7,8,9]]

let Y = [[9,8,7],
         [6,5,4],
         [3,2,1]]

let result= [[0,0,0],
             [0,0,0],
             [0,0,0]]         
         

const getSum = (X,Y) =>{
    
    for(let i= 0; i< X.length; i++){
        for(let j = 0; j<Y.length; j++){
           result[i][j] = X[i][j] + Y[i][j]
        }
    }return result
}         

console.log(getSum(X,Y));