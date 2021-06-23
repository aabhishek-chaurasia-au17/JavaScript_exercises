// switch..case

// Syntax:

// switch(variableToBeChecked) {
//     case value1: 
//         // code to be executed when variableToBeChecked matches value1
//         break;   
//     case value2: 
//         // code to be executed when variableToBeChecked matches value2
//         break;   
//     case valueN: 
//         // code to be executed when variableToBeChecked matches valueN
//         break;   
//     default:
//         // code to be executed when variableToBeChecked doesn't match any case value
// }


var category = "women";

switch(category) {
   case "men":
       console.log("Showing men\'s apparels!");
       break;
   case "women":
       console.log("Showing women\'s apparels!");
       break;
   default:
       console.log("Showing all apparels!");
}


/* 
You have to code a country code checker which checks which country does the given number belongs to

The options are as follows:
91 - India
55 - Brazil
81 - Japan
30 - Greece
47 - Norway
If a number does not belong from any country, then print "Other Country"
The number needs to be input as "CC-XXXXX-XXXXX" (CC being country code)
*/

var phoneNumber = '91-99999-99999';

switch (parseInt(phoneNumber)) {
    case 91:
        console.log('India')
        break;
    case 55:
        console.log('Brazil')
        break;
    case 81:
        console.log('Japan');
        break;
    case 30:
        console.log('Greece')
        break;
    case 47:
        console.log('Norway')
        break;
    default:
        console.log('Other Country')
}
