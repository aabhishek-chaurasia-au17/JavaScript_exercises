// Program for factorial of a number

function factorial(n){
    if(n < 0){
        return 0
    }else if (n == 0 || n == 1){
        return 1
    }else{
        var fact = 1;
        while(n > 1){
            fact *= n
            n -= 1
            return fact    
        }
    }

}

console.log(factorial(5));