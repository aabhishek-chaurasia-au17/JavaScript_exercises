// JavaScript – Convert Snake case to Pascal case

// Input : geeks_for_geeks
// Output : GeeksforGeeks

// Input : left_index
// Output : leftIndex

let str ='geeks_for_geeks'

let res = str.replaceAll('_','').toLocaleUpperCase().replace(' ','');

console.log(res);

// Note that the String.prototype.replaceAll() method was added in ES2021/ES12.

