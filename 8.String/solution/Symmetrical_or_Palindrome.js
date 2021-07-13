// JavaScript program to check whether the string is Symmetrical or Palindrome.

// Example:

// Input: khokho
// Output: 
// The entered string is symmetrical
// The entered string is not palindrome

// Input:amaama
// Output:
// The entered string is symmetrical
// The entered string is palindrome

const getCheckStr = (str) => {
    let a = str.length
    let midf = (a-1)/2
    const mid = Math.floor(midf)
    let flag = 0;
    let start = 0;
    let end = a-1

    while(start < mid){
        if(str[start] == str[end]){
            start += 1
            end -= 1

        }else{
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log("The entered string is palindrome");

    }else{
        console.log("The entered string is not palindrome");
    }

}
const getsymmetrical = (str) =>{
    let n = str.length
    let flag = 0;

    if (n % 2){
        let midg = n/2 +1
        const mid1 = Math.floor(midg)
    }else{
        let midg = n/2
        const mid1 = Math.floor(midg)
    }

    let mid1;
    let start1 = 0;
    let start2 = mid1;
    
    while(start1 < mid1 && start2 < n){
        if(str[start1] == str[start2]){
            start1 += 1
            start2 += 1
        }else{
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log("The entered string is symmetrical");
    }else{
        console.log("The entered string is not symmetrical");
    }
}   

let str = "ama";

getsymmetrical(str);
getCheckStr(str);