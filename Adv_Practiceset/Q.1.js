// #### Q1
// ### Print "Hello, world" with a delay of 3 seconds


setTimeout(function (text) {
    console.log(text);
}, 3000, 'Hello,World');  



setTimeout(console.log, 5000, 'hello,world');