// while Loop
Syntax:

while (condition) {
 /*
   body code along with
   statement(s) terminating of the condition at some point in future
 */
}

// Exmpale
var num = 1234;

var sum = 0, n = num;

while (n > 0) {
   sum += (n % 10);
   n = Math.floor(n / 10);
}

console.log("Sum of the digits of " + num + " = " + sum);

// Exmpale

var num = prompt("Enter a number:");
num = parseInt(num);
var sum = 0, n = num;
while (n > 0) {
   sum += (n % 10);
   n = Math.floor(n / 10);
}
console.log("Sum of the digits of " + num + " = " + sum);


// Exmpale
// Use while loop to print all multiples of 7 between 1 and 100 (both inclusive)

var num = 1;
while (num < 100) {
    if (num % 7 === 0) {
        console.log(num);
    }
    num++;
}