// Functions

// Syntax for function declaration & definition:

// function functionName(parameter1, parameter2, ..., parameterN) {
//   // body code
//   // return value, if required
// }

// Syntax for function invocation or function call:

// functionName(argument1, argument2, ..., argumentN);

// Example:

function applyDiscount() {
    var cartAmount = 1000;
    var discount = 100;
    cartAmount -= discount;
    console.log(cartAmount);
}

applyDiscount();