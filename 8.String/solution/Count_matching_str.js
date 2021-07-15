// JavaScript | Count the Number of matching characters in a pair of string

// Examples:

// Input : str1 = 'abcdef'
//         str2 = 'defghia'
// Output : 4 
// (i.e. matching characters :- a, d, e, f)

// Input : str1 = 'aabcddekll12@'
//         str2 = 'bb22ll@55k'
// Output : 5 
// (i.e. matching characters :- b, 1, 2, @, k)

const getCount = (str1,str2) =>{
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        if(str2.includes(str1[i])){
            count += 1
        }
    
    }return count
}

let str1 = 'abcdef';
let str2 = 'defghia';
console.log(getCount(str1,str2));
