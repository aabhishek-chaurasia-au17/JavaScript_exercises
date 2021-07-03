
var myfriend = ["Abhishek","Deepak","Roopam","Azeem","Punit"]

console.log(myfriend[0])


// how to know length of Array

console.log(myfriend.length)

//if we want last array with lenth

console.log(myfriend[myfriend.length-1]);


// Useing For Loop to navigate

for(var i = 0; i < myfriend.length; i++){
    console.log(i)
}

// Useing for in loop to navigate index

for(var j in myfriend){
    console.log(j)
}

// Useing for of loop to navigate element

for(var e of myfriend){
    console.log(e)
}

// Useing for each loop to navigate element index & array 

myfriend.forEach((a,idx,array) => {
    console.log(a + " " + idx + " " + array)
});