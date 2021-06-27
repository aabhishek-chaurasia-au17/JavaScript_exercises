// Program for compound interest

// Formula to calculate compound interest annually is given by: 
// A = P(1 + R/100) t 
// Compound Interest = A – P 
// Where, 
// A is amount 
// P is principle amount 
// R is the rate and 
// T is the time span



function compoundintrest(P,R,T){
    amount = P * ((1 + R/100),T)
    CI = amount - P
    return CI
}

console.log(compoundintrest(1200,25,4));