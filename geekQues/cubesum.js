// javaScipt Program for cube sum of first n natural numbers


let cube = (n) => {
    let sum = 0;
    for (var i = 1; i <= n; i++)
        sum += i*i*i
        return sum
}

console.log(cube(5));