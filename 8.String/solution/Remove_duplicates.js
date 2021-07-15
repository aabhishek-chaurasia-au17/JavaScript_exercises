// Remove all duplicates from a given string in JavaScript

// Examples:

// Input : geeksforgeeks
// Output : efgkos

const getremovedublicate = (str) => {
    let result = "";
    let freq = {};
    for(let i=0; i < str.length; i++){
        let char = str[i]
        if (freq[char]){
            freq[char]++;
        }else{
            freq[char]=1
            result += char;
        }

    }
    return result;
}
let str = 'geeksforgeeks';
console.log(getremovedublicate(str));