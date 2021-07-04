
const myBioData = "I am Abhishek Chaurasia";

console.log(myBioData.indexOf("am"));


// Searching String

const myData = "I am programmar abhishek chaurasia";

let sData = myData.search("abhishek")

console.log(sData);


// Extracting String Parts
// slice() method
let str = "Apple, Bananaa, Kiwi";
let res = str.slice(7,15);
let newres = str.slice(7);

console.log(res);
console.log(newres);


// the Substring() Method

let strs = "Apple, Banana, Kiwi";
let ress = strs.substring(7,15)
console.log(ress);


// the SubStr() Method 

let stri = "Apple, Banana, Kiwi";
let reas = stri.substr(5)
console.log(reas);


// Replacing String Content

let aboutme = 'i am Abhishek chaurasia';
let repalcedata = aboutme.replace('Abhishek','abhishek');
console.log(repalcedata);


// Extracting String characters
// charAt()

let abhi = 'Hello World';
console.log(abhi.charAt(6));

// charCodeAt()

let Stra = "HELLO WORLD";
console.log(Stra.charCodeAt(9))

// Property Access

let myName = 'Abhishek chaurasia';

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// concat()

let fname = 'abhishek';
let lname = 'chaurasia'

console.log(fname.concat(" "+ lname));

console.log( `${fname} good ${lname}`)


// Trim

// let myaName = '       Abhishek chaurasia         ';

// console.log(myName.trim());


