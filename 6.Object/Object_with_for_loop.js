
var book = {
    titel : "the Lord of Krishna",
    page : "2550",
    isAvaileble : true,
}

book.titel = 'Hare Krishna';

for(var key in book){
    console.log(key + " = " + book[key]);
}


