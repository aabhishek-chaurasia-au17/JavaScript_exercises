// JavaScript Program for Find remainder of array multiplication divided by n.
// ex
// Input : arr[] = {100, 10, 5, 25, 35, 14}, 
// n = 11
// Output : 9
// 100 x 10 x 5 x 25 x 35 x 14 = 61250000 % 11 = 9



let fineremainder = (arr,n) =>{
    mul = 1
    for(var i = 0; i < arr.length; i++)
        mul = (mul * (arr[i] % n)) % n;
        
        return mul % n;

    }

const arr = [100, 10, 5, 25, 35, 14]
console.log(fineremainder(arr,11));