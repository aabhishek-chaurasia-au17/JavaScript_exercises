// Shopping Mart using Objects
// Description
// Do you remember the Shopping Mart example in arrays where you had created two arrays - one for items and the other for quantities? Let's imagine that we now have the prices too for each item. It doesn't really make sense to add another array for prices. So, a better way is to store items in an object in JavaScript, as follows:

// Sample Output:
// ['milk', 'bread', 'potato']
// [20, 15, 10]

// Hint:
// Use a for..in loop to traverse through the items in the object itemsToBuy.


var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
}

var itemNamesArr = [], itemPricesArr = [];
for (var item in itemsToBuy) {
    itemNamesArr.push(item);
    for (var prop in itemsToBuy[item]) {
        if (prop === 'price') {
            itemPricesArr.push(itemsToBuy[item][prop]);
        }
    }
}

// Print the array consisting of the names of the items here
console.log(itemNamesArr);

// Print the array consisting of the prices of the items here
console.log(itemPricesArr);