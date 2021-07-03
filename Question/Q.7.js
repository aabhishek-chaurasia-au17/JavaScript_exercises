// Given an Array of items find the Element that occur more then oncuechange.



find_Element = () => {
    let items = ['a','b','c','d','a','c']
    for (i = 0; i<items.length; i++){
        for(x = 0; x<items.length; x++){
            if(items[i]==items[x] && i != x){
                console.log('Same ones in ARRAY:' + items[i]);
                
            }else {
                continue
            }
            
        }
    }
}

find_Element()