// Given an array A with n integers, find out wether the count of odd elements is odd. if exist, then print 'Yes' else 'No'

// my try

const array = [3,1,1,2,1,2,1];

array.forEach((i) => {
    if (i % 3 === 0){
        console.log('yes');
    }else{
        console.log('no');
    }
});



