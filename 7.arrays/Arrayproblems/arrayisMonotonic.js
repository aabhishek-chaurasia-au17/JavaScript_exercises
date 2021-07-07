// JavaScript Program to check if given array is Monotonic

// Input : 6 5 4 4
// Output : true

// Input : 5 15 20 10
// Output : false


function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    const num_direction = num[1] - num[0];
    for (let i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}


// let num = [6, 5, 4, 4]
let num = [5, 15, 20, 10]
console.log(is_monotonous(num));