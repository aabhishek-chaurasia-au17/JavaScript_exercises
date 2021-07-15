// JavaScript | Program to accept the strings which contains all vowels

// Examples : 

// Input : geeksforgeeks
// Output : Not Accepted
// All vowels except 'o' are not present

// Input : ABeeIghiObhkUul
// Output : Accepted
// All vowels are present

let checkAllVowel = (str) =>{
    str = str.toLowerCase();

    let hash = Array(5).fill(0);
    
    for(let i =0; i<str.length; i++){
        if(str[i] == 'a'){
            hash[0] = 1;
        }else if(str[i] == 'e'){
            hash[1] = 1;
        }else if(str[i] == 'i'){
            hash[2] = 1;
        }else if(str[i] == 'o'){
            hash[3] = 1;
        }else if(str[i] == 'u'){
            hash[4] = 1;
        }
        
    }
    for(let i = 0; i < hash.length; i++){
        if (hash[i] == 0){
            return 1;
        }
    }return 0
    
}

let checkIfAllVowelsArePresent = (str) =>{

    if(checkAllVowel(str)){
        console.log('Not Accepted');
    }else{
        console.log('Accepted');
    }
}

let str = 'ABeeIghiObhkUul';
checkIfAllVowelsArePresent(str)