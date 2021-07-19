// Program to check if a string contains any special character

// Examples :

// Input : Geeks$For$Geeks
// Output : String is not accepted.

// Input : Geeks For Geeks
// Output : String is accepted


const checkString = (str) =>{
    let formet = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(formet.test(str)){
        console.log("String is not accepted");
    }else{
        console.log("String is accepted");
    }
    
}
let str = "Geeks For Geeks"
checkString(str); 