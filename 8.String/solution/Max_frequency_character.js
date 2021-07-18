// JavaScript | Maximum frequency character in String


const getMax = (str) =>{
    let max = 0;
    let maxChar = '';
    str.split('').forEach((char) => {
        if(str.split(char).length > max){
            max = str.split(char).length;
            maxChar = char;
        }
        
    });
    return maxChar
} 
let str = 'GeeksforGeeks';
console.log(getMax(str));