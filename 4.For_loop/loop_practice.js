
// How a JavaScript For-Loop Looks Like


for(i = 1; i <= 10; i++){
    console.log(i);
}


// How a JavaScript forEach-Loop Looks Like

let arr = ["Ricciardo", "Verstappen", "Bottas"];

arr.forEach((a,idx,array,) => {
    console.log(`${a} ${idx} ${arr}`);
});


// How a JavaScript inedx Loop Looks Like

for(let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
}

// How a JavaScript in Loop Looks Like
for(var j in arr){
    console.log(arr[j]);
}