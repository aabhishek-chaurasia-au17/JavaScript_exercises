// what is Object Litral ?
// Object Litral is simply a key : value pair Data Struchere .
// Storing Variables and function together in one container, we refer ths as an Objects.Data

// 1st way

let bioData = {
    myName : 'Abhishek',
    myAge : 26,
    getData : function(){
        console.log(`My Name is ${bioData.myName} my age is ${bioData.myAge}`);
    }

}
bioData.getData();

// 2nd way ES6

let BioDat ={
    myName : 'Abhishek chaurasia',
    myAge : 26,
    getData(){
        console.log(`My Name is ${BioDat.myName} and my age is ${BioDat.myAge}`);
    }
}

BioDat.getData();