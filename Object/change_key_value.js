// You simply need to access the key and then assign a new value to it.
var book = {name: 'Bible'}

book.name = 'Gita';
book.religion = 'Christianity';
// Let’s also learn how to modify an object. After all, what’s the use of data if you can't modify it when required?

var music = {
    rock: 'guitar',
    classical: 'violin'
};
var classical = 'rock';
var sound = music[classical];
console.log(sound);


var music = {
    rock: 'guitar',
    classical: 'violin'
};
var classical = 'rock';
var sound = music.classical;
console.log(sound);



// Update the value of the keys testKey1 and 'test-key2' to newValue1 and newValue2 respectively
var testObject = {
    testKey1 : 'testValue1',
    'test-Key2' : 'testValue2'
  };
  
  // Change the values here
  testObject.testKey1 = 'newValue1';
  testObject["test-Key2"] = 'newValue2';
  
  // Print testObject here
  console.log(testObject);