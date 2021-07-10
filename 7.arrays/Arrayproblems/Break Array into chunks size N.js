// Break a Array into chunks of size N in JavaScript


// So, to slice a list or array into even chunks, let's use the slice() method:

const Arraybrack = (arry,chunksize) => {
    const res = []
    for(var i = 0; i < arry.length; i += chunksize){
        const chunk = arry.slice(i,i + chunksize)
        res.push(chunk)
    }
    
    return res
}

const arry = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(Arraybrack(arry,4)); 