// Find words which are greater than given length k

// Examples:  

// Input : str = "hello geeks for geeks is computer science portal" 
//         k = 4
// Output : hello geeks geeks computer science portal

// Explanation : The output is list of all 
// words that are of length more than k.

// Input : str = "string is fun in python"
//         k = 3
// Output : string python 

const getWord = (str,k) =>{
    let w = '';
    for(let i =0; i<str.length; i++){
        if(str.charAt(i) != ' '){
            w += str.charAt(i);
        }else{
            if(w.length > k)
            console.log(w+'');
            w = ''
        }

    }
}
let str = "hello geeks for geeks is computer science portal" 
let k = 4
getWord(str,k);