// binery-search

let array = [1,3,4,6,8,10,14];
const x = 3;

let getseaching = (array,x) => {
    let left = 0;
    let right = array.length-1;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(array[mid]==x){
            return true ;
        }else if (array[mid] < x){
            left = mid + 1;
        }else{
            right = mid -1;
        }
        
    }return false;

}
console.log(getseaching(array,x));
