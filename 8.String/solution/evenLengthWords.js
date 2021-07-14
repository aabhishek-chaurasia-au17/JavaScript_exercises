// JavaScript program to print even length words in a string

const getEvenWord = (s) =>{
    s = s.split(' ')
    
    for(let i = 0; i < s.length; i++){
        if(s[i].length % 2 === 0 ){
            console.log(s[i]);
        }
    }
}
// s = "This is a python language";
s = "i am AbhiShek"
getEvenWord(s);
