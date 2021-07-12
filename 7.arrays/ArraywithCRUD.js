// CRUD

// Creat, Read, Update, Delete

var vegitabel = ["Potato", "Tomato", "Onian", "Lemon", "Ladies Finger"];

console.log(vegitabel);

vegitabel.push("Palak") //Push() method use for add new item

console.log(vegitabel);

vegitabel.unshift("Parwal");//unshift() method use for add new item in first position

console.log(vegitabel);

vegitabel.pop(); //pop() method use for remove last iten in array

console.log(vegitabel);

var a = vegitabel.indexOf("Tomato");  // indexOf() method is use for Know strings index

console.log(a);

vegitabel.shift();//shift() method use for remove First iten in array

console.log(vegitabel);

console.log(vegitabel.length)


// return the bananas in array using slice Method

let txt = "I can eat bananas all day";
let x = txt.slice(10,17);

console.log(x);