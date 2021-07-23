// binery-search

let array = [1,3,4,6,8,10,14];
const x = 5;

let getseaching = (array,x) => {
    for(let i = 0; i < array.length; i++){
        if(array[i]=== x){
            return true
        }
    }return -1
}
console.log(getseaching(array,x));
