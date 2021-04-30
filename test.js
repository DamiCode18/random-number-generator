const randomNumberGenerator = require('damicode-num-generator');

//print the random numbers generated to the console.


setInterval(function() {
    console.log(randomNumberGenerator(5, 10))
}, 1000);
