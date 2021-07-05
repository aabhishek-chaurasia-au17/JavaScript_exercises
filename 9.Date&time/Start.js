                                // Date & Time

// Date Methods (get and set)
// Time Methods (get and set)

// Cerating Date Object

// there are 4 ways to creat a new date Object:

const today = new Date();
console.log(today);


console.log(new Date());

console.log(new Date().toLocaleString());

console.log(new Date().toString())

// Date.now()

console.log(Date.now());

var d = new Date(2021,0,24,10,33,30,0)

console.log(d.toLocaleString());

// new Date(date String)

// var d = newDate (October 13, 2021, 11:13:00);
// console.log(d.toLocaleString());

// newDate(milliseconds)
var d = new Date(0);
console.log(d);

// Dates Method
const curDate = new Date();

// how to get the indivisual date

console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());


// Time Method

const curtime = new Date();
console.log(curtime.getTime());

console.log(curtime.getHours());

console.log(curtime.getUTCMinutes());
 
console.log(curtime.getUTCSeconds());

console.log(curtime.getUTCMilliseconds());

// how to set the Indivisual time.

console.log(curtime.setTime());
console.log(curtime.setTime(5));
console.log(curtime.setMinutes(5));
console.log(curtime.setSeconds(5));
console.log(curtime.setMilliseconds(5));













