// Find length of a string in python (4 ways)

// Ex.
// Input : 'abc'
// Output : 3

// Input : 'hello world !'
// Output : 13


// way 1
let str = 'hello world !';
console.log(str.length);

// way2

const getlength = (str) =>{
    let count = 0;
    for(let i = 0; i < str.length; i++)
        count += 1 
    return count
}
console.log(getlength(str));

// way 3
count = 0;
let i = 0;
while(i < str.length){
    count += 1
    i++
}
console.log(count);

