// JavaScript program to multiply two matrices


let X = [[1, 7, 3],
         [3, 5, 6],
         [6, 8, 9]]

let Y = [[1, 1, 1, 2],
         [6, 7, 3, 0],
         [4, 5, 9, 1]]
 
let resulte = [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]]



const get_multiply = (X,Y) => {
    for(let i = 0; i< X.length; i++){
        for(let j =0; j<Y.length; j++){
            for(let k =0; k < resulte.length; k++){
                resulte[i][j] += X[i][k] * Y[k][j] 
            }
        }
    }return resulte
}             
console.log(get_multiply(X,Y));