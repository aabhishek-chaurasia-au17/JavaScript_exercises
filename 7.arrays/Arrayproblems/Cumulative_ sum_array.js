//  JavaScript program to find Cumulative sum of a list

// Examples :  

// Input : list = [10, 20, 30, 40, 50]
// Output : [10, 30, 60, 100, 150]

// Input : list = [4, 10, 15, 18, 20]
// Output : [4, 14, 29, 47, 67]


const Cumulative_sum = (arr) =>{
   let newarry = []
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
    sum += arr[i] 
    newarry.push(sum)

   }return newarry

}

let arr = [4, 10, 15, 18, 20]
console.log(Cumulative_sum(arr));