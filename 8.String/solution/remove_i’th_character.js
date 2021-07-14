// Ways to remove i’th character from string in javaScript

const getremoveCharactor = (str,j) => {
    let newstr = ''
    for(let i = 0; i < str.length; i++){
        if(i !== j){
        newstr += str[i]
        }
    }return newstr
}
let str = 'geekforgeek';
let j = 2;
console.log(getremoveCharactor(str,j)); 