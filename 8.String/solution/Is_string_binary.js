// JavaScript | Check if a given string is binary string or not

// Examples:

// Input: str = "01010101010"
// Output: Yes

// Input: str = "geeks101"
// Output: No

let checkbinary = (str) =>{
    let t = '01'
    let count = 0
    for (const char of str) {
        if(char != t){
            count = 1
            break
        }else{
            pass
        }
    }
    if (count){
        console.log('no');
    }else{
        console.log('yes');
    }
}

str = "abhi01010"
console.log(checkbinary(str));