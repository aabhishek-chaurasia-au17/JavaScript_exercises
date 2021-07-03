
// How a JavaScript For-Loop Looks Like


for(i = 1; i <= 10; i++){
    console.log(i);
}


let arr = ["Ricciardo", "Verstappen", "Bottas"];

// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i]);
// }

// for(var j in arr){
//     console.log(arr[j]);
// }

arr.forEach((a,idx,array,) => {
    console.log(`${a} ${idx} ${arr}`);
});