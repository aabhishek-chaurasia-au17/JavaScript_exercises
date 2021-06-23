// Use for loop to print the product of numbers from 1 to 10 (both inclusive)
var prod = 1;

for(var i = 1; i <= 10 ; i++){
    prod = prod * i;
}

console.log(prod);




// Write a program to print all the numbers divisible by 2 or 3 or 6 from 1 to n, where n can be any custom value
var n = 14;

for(i = 1; i < n; i++){
    if (i%2 === 0 || i%3 === 0 || i%6 === 0) {
        console.log(i);
    }
}




for (var num = 1; num < 14; num++){
    if(num % 2 === 0 || num % 3 === 0 || num % 6 === 0){
        console.log(num)
    }
}


var a = 1, b = 1, f;
// Print the value in variable f, which contains the 15th number in the fibonacci series, where the first two numbers are 1 and 1
for (var i = 3; i <= 15; i++) { // counting from 3rd number
    f = a + b;
    a = b;
    b = f;
}
console.log(f);