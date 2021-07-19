/* DONE 1: Declared a variable with identifier itemsInCart in your code and initialized it with 0. 
The variable is declared in the global scope because it is to be used by both the functions
*/
var itemsInCart = 0; // number of items in the cart

/* DONE 2: Defined a function with identifier addItem, which does the following:
a) Increments the number of items in the cart
b) Prints a message "Item added to cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
/**
 * Function to increment the number of items in the cart
 */
var addItem = function() {
    itemsInCart++;
    var message = "Item added to cart!";

    console.log(message);
    console.log("Item(s) in cart = " + itemsInCart);
}

/* DONE 3: Defined a function with identifier removeItem, which does the following:
a) Decrements the number of items in the cart
b) Prints a message "Item removed from cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
/**
 * Function to decrement the number of items in the cart
 */
var removeItem = function() {
    itemsInCart--;
    var message = "Item removed from cart!";
    
    console.log(message);
    console.log("Item(s) in cart = " + itemsInCart);
}

// WARNING: DO NOT EDIT THE CODE GIVEN BELOW
console.log("Initially: Item(s) in cart = " + itemsInCart);
addItem();
addItem();
removeItem();