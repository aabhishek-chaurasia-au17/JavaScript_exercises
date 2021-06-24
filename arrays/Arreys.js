// The functions you just learnt are as follows: 

// push() - The push() method adds one or more elements to the end of an array.
// unshift() -  The unshift() method adds one or more elements to the beginning of an array.
// pop() - The pop()  method removes the last element from an array.
// shift() - The shift() method removes the first element from an array.
// Apart from these properties, there are some more properties that are quite helpful. These properties are

// slice(): The slice() method returns a copy of a portion of an array into a new array object selected from "begin" to "end" (end not included).
// splice(): The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// Why don't you solve the question given below to better understand these concepts?

// Question
// Car Garage
// Description
// You are given an array named carNames consisting of 4 car values - Honda, Ferrari, Porsche, and Fiat.

// You have to perform the operations given below in the same order in which they are given and then print the array after performing each operation.
// Remove car value Fiat from the end of the array.
// Add car value Mazda to the end of the array.
// Remove car value Honda from the front/beginning of the array.
// Add car value Ford to the front/beginning of the array.

var carNames = ['Honda','Ferrari','Porsche','Fiat'];

// Remove Fiat from the end of the array and then print the array carNames
carNames.pop();
console.log(carNames);
// Add Mazda to the end of the array and then print the array carNames
carNames.push('Mazda');
console.log(carNames);
// Remove Honda from the beginning of the array and then print the array carNames
carNames.shift();
console.log(carNames);
// Add Ford to the beginning of the array and then print the array carNames
carNames.unshift('Ford');
console.log(carNames);