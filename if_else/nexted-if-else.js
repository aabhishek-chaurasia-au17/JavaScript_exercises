// Nested if...else
// Nested if..else statements are the ones in which one conditional statement (if statement or if..else statement) is nested inside another conditional statement (if statement or if..else statement).


// Example:
var x = 10;

if (x === 0) {
    console.log("Neither positive nor negative!");
} else if (x > 0) {
    if (x < 10) {
        console.log("Single-digit positive number!");
    } else {
        console.log("More than one-digit positive number!");
    }
} else {
    console.log("Negative number!");
}

// Example:

// Declare three variables num1, num2 and num3 & initialize them with number values
var num1 = 0;
var num2 = 1;
var num3 = 4;

// Write code to check which is the smallest number amongst num1, num2 and num3
if (num1 < num2) {
   if (num1 < num3) {
       console.log(num1);
   } else {
       console.log(num3);
   }
} else {
   if (num2 < num3) {
       console.log(num2);
   } else {
       console.log(num3);
   }
}


