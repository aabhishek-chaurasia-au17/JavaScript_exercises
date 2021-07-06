// Check if element exists in Array in JavaScript


const existin = (test_array) =>{

    for (const i of test_array) {
        if (i === n){
            console.log(true)
            break
        }else{
            continue
        }
    }
    return 'element exists in Array'
}

let test_array = [ 1, 6, 3, 5, 3, 4 ]
let n = 4; 
console.log(existin(test_array))