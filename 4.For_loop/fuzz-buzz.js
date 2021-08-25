// Write a JavaScript program which iterates the integers from 1 to 50. For divisible of three print "Fizz" instead of the number and for the divisible of five print "Buzz". For numbers which are divisible of both three and five print "FizzBuzz".




for(var i = 1; i < 100; i++){

    if(i % 3 === 0 && i % 5 === 0){
        
        console.log("FizzBuzz")

    }else if(i % 5 === 0){

        console.log("Buzz")

    }else if(i % 3 === 0){

        console.log("Fizz")
    }
}