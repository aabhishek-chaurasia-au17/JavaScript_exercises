// JavaScrit – Remove empty List from List

// const remove_empty = (test_list) =>{
//     for(let i=0; i < test_list.length; i++)
//     if(test_list[i] !== []){
//         return test_list
//     }
// }
// test_list = [5, 6, [], 3, [], [], 9]
// console.log(remove_empty(test_list));



let arr = [5, 6, [], 3, [], [], 9]

let fileterd = JSON.stringify(
    arr.filter((el) => {
        return typeof el != "object" || Object.keys(el).length > 0
      })
)

console.log(fileterd);