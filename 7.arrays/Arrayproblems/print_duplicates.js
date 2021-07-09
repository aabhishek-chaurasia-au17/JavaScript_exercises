// JavaScript | Program to print duplicates from a Array of integers


// Examples : 

// Input : list = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]
// Output : output_list = [20, 30, -20, 60]


// Input :  list = [-1, 1, -1, 8]
// Output : output_list = [-1]


const duplicatesArray = (arr) =>{
    
    for(var i = 0; i <arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[i] == arr[j] ){
                if (arr.includes(arr[i])) {
                    break;
                }
                
                else {
                    arr.push(arr[i]);
                    ifPresent = true;
                }
            }
        }
    }

    if (ifPresent == true) {
 
        document.write(`[${arr}]`);
    }
    else {
        document.write("No duplicates present in arrays");
    }
}
arr = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]
console.log(duplicatesArray(arr));