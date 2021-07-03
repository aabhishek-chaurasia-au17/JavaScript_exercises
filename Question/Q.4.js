// Add Matrix

// given a matrix (Square), print its diagonal difference

let arr =  [[1,2,3,4],
            [5,6,7,6],
            [7,8,9,9],
            [2,4,1,3]]


var row = arr.length;
var col = arr[0].length           

var firstDigno = 0;
var seconddigno = 0;

for(var i = 0; i < row; i++){
    firstDigno += (arr[i][(row - i) -1]);
    for (var j = 0; j < col; j++){
        if(i == j){
            seconddigno += (arr[i][j]);
        }
    }
}

var diff = firstDigno - seconddigno

console.log(diff);