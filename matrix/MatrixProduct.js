//  JavaScript Matrix Product

let test_list = [[1, 4, 5], [7, 3], [4], [46, 7, 3]]

const getProduct = (test_list) => {
    let prod = 1;
    for(let i=0; i<test_list; i++){
        prod = test_list[i] ^ test_list[i]
    }
    return prod
}
console.log(getProduct(test_list));