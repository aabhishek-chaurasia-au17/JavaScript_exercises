const employi = [
    {
        name: 'Abhishek Chaurasia',
        role: 'Full Stack Developer',
        payment: 200 
    },

    {
        name: 'Rupam Joshi',
        role: 'Front End Developer',
        payment: 150 
    },

    {
        name: 'Rishav Aggarwal',
        role: 'Front End Developer',
        payment: 180 
    },
    
    {
        name: 'Sankalp Yadav',
        role: 'BackEnd End Developer',
        payment: 200 
    },

    {
        name: 'Masthan Wali',
        role: 'Web Developer',
        payment: 100 
    },

];

// forLoop

// for(let i = 0; i < employi.length; i++){
//     console.log(employi[i].name);
// }


// forEach loop

// employi.forEach((element,idx,arr) => {
//     console.log(element,idx,arr);
// });

// for of loop

for(let i of employi){
    i.payment = i.payment -10
    console.log(i.payment);
}