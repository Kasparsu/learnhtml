console.log('hello');
console.log('world');
let longAssVariableName = "takes up many bytes";
console.log(longAssVariableName);

// const calculator = require('./calc.js');
// console.log(calculator.add(1,2));

import calc from './calc.js';

console.log(calc.add(2,5));