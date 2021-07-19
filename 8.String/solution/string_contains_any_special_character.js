// Program to check if a string contains any special character

// Examples :

// Input : Geeks$For$Geeks
// Output : String is not accepted.

// Input : Geeks For Geeks
// Output : String is accepted


const checkString = (str) =>{

    for(let i = 0; i < str.length; i++){
        if(str[i] !== $){
            console.log("NOT ACCEPTED");
        }
    }
}
let str = "Geeks$For$Geeks"
console.log(checkString(str)); 