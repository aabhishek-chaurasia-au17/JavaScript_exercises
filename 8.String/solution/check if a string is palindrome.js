// JavaScript program to check if a string is palindrome or not

const palindrome = (s) =>{
    let len =  s.length;
    let mid = Math.floor(len/2);

    for(var i = 0; i < mid; i++)
        if(s[i] !== s[len - 1 - i]){
            return false;
        }
    return true;
}

let s = "abhishek"
console.log(palindrome(s));




// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }


// let str = "abhishek"

// console.log(palindrome(str));