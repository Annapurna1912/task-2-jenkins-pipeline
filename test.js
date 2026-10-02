const greet = require('./app');

const result = greet('DevOps');


if (result === 'Hello, DevOps!') {
    console.log('Test passed');
} else {
    console.log('Test failed');
    process.exitCode = 1;
}  

