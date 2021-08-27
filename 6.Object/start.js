// Objects

// Objects are just a collection of variables lumped together in key-value pairs. Objects store their elements as key-value pairs. Each key-value pair is termed as a property. The key name should be a JavaScript identifier but you can break this and not have an identifier as a key. In such a case, you should enclose the key name in quotes or they will throw an error.

var hotel = {
    name: "Hayat",
    numberofroom: 12,
    location: "Delhi",
    stars: 3,
    owner: {
        name: "abhishek chaurasia",
        age: 26,
    }
};

console.log(hotel);


var book;

book = {
    Titel: "50 Shades",
    NumOfpages: 1000,
    isAvailebale: true,
    author: {
        name: "abhishek",
        natinality: "India",
    }
}

console.log(book)

// Dot Notation:
console.log(book.Titel);
console.log(book.isAvailebale);
console.log(book.author.name);

// Bracket Notation:
console.log(book['Titel']);
console.log(book["NumOfpages"]);


