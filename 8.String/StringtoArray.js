//  How to converting a String to an Array.

// A String can be converted to an array with the split() method.

let txt = 'A,B,C,D';

console.log(txt.split(','));                   /** [ 'A', 'B', 'C', 'D' ] */

console.log(txt.split(' '));                    /** [ 'A,B,C,D' ]*/

console.log(txt.split(" | "));