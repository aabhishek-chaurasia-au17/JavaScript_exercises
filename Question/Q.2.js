
// Evaluate the Expression

// you are given 5 Numbers A,B,C,D,E. find the value of the Expression.> (A+B)*(C+D+E)

// try 1

var a = 3;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

console.log("find the value of expression " + (a+b)*(c+d+e))

// try 2

function find_value(a,b,c,d,e){
total = (a+b)*(c+d+e)
return total
}

console.log("find the value of expression " + find_value(3,2,3,4,5))