// Fine a Index and Change the Elements.


const months = ['Jan', 'Fab', 'March', 'April', 'May', 'June'];

const indexOfmonth = months.indexOf("June");

console.log(indexOfmonth);

if(indexOfmonth != -1){
    const updatemonth = months.splice(indexOfmonth,0,'Fab');
    console.log(months);
}else{
    console.log('No such data found');
}
