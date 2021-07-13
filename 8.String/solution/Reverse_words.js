//  Reverse words in a given String in JavaScript

// Examples:

// Input : str = geeks quiz practice code
// Output : str = code practice quiz geeks

const setReverseWords = (str) =>{
    
    let word = str.split(" ")

    let reverse_sentenc = " ".join(setReverseWords(word))
    
    return reverse_sentenc
}

let str = "geeks quiz practice code";
console.log(setReverseWords(str));


