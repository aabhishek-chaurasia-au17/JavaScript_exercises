// JavaScript | Check if a Substring is Present in a Given String

const StrIsPresent = (s1,s2) =>{
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; i++){
            if(s2[i] === s1[j]){
                return 'yes'
            }else{
                return 'no'
            }
        }
    }
}
let s1 = 'geeks';
let s2='geeks for geeks';
console.log(StrIsPresent(s1,s2));