
// Ways to find length of array.

let arr = [2, 5, 9, 8, 7, 5, 6]

// Method 1 : inbulite function 

console.log(arr.length);


// Method 2 : Naive Method

const countlength = () => {
    count = 0
    for(let i = 0; i < arr.length; i++)
    count += 1
    return count
}

console.log(countlength());