// JavaScript | Check if a given string is binary string or not

// Examples:

// Input: str = "01010101010"
// Output: Yes

// Input: str = "geeks101"
// Output: No

let str = "01010101010";

const checkisStr = (s) =>{
   let len = s.lenght;

   let first = 0;
   for(let i =0; i < len; i++){
       if(s[i]=='1'){
           first = i;
           break
       }
   }
   let last = 0;
   for(let i = len - 1; i >= 0; i--){
       if(s[i]=='1'){
           last = i;
           break

       }
   }

   for (let i = first; i <= last; i++){
       if(s[i] == '0')
       return false
   }return true
}
console.log(checkisStr(str) ? 'Not' : 'Yes');