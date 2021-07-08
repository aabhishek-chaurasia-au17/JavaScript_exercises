// JavaScript Program for Sum of squares of first n natural numbers

 

let finesquares = (n) =>
{
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += (i * i);
    
    return sum
    
}
let n = 5;
console.log(finesquares(n)); 




// Function to calculate sum
function summation(k)
{
	let sum = 0;
	for (let i = 1; i <= k; i++)
		sum += (i * i);

	return sum;
}

// Driver code

let k = 5;
console.log(summation(k));


