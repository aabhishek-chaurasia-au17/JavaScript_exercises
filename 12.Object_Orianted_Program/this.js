// What is this Object ?
// The Definition of 'this' Object is that it contain the current Context. 
// the this Object can have different values depending on where it is placed.

const obj = {
    myAge : 26,
    myName(){
        console.log(this.myAge);
    }
}
obj.myName();