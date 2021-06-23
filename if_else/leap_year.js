// how to know this is leap year or not

// var yeardays = 365;

// if (yeardays == 366){
//     console.log("This is Leap year");
// }else{
//     console.log("This is not Leap year this is normal year")
// }


var year = 2020;

if (year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The year " +  year  + " is a leap year")
        }else{
            console.log("The year " +  year  + " is not a leap year")
        }   
    }else{
        console.log("The year " +  year  + " is a leap year")
    }
}else{
    console.log("The year " +  year  + " is not a leap year");
}