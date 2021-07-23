// Python program to split and join a string


// Examples :

// Split the string into list of strings

// Input : Geeks for Geeks
// Output : ['Geeks', 'for', 'Geeks']


// Join the list of strings into a string based on delimiter ('-')

// Input :  ['Geeks', 'for', 'Geeks']
// Output : Geeks-for-Geeks


let str = 'Geeks for Geeks'

let strsplit = (str) =>{
    list_str = str.split(" ")
    return list_str
}

let strJoin = (list_str) => {
    str = '-'.join(list_str)
    return str
}

console.log(strsplit(str));
console.log(strJoin(list_str));
