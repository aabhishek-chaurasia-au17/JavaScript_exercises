// JavaScript Least Frequent Character in String

const Least_Frequent = (str) =>{
    let mostLength = 0;
    let CharacterMostlenth = "";
    for(let t = 0; t < str.length; t++){
        let res = str.length - str.replece(new RegExp(t,'g')).length;
        if(res > mostLength){
            CharacterMostlenth = t;
            mostLength = res;
        }
    }
    return CharacterMostlenth
}

let str = "GeeksforGeeks";
console.log(Least_Frequent(str));


