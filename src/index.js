console.log('hello');
console.log('world');
let longAssVariableName = "takes up many bytes";
console.log(longAssVariableName);

// const calculator = require('./calc.js');
// console.log(calculator.add(1,2));

import calc from './calc.js';

console.log(calc.add(2,5));

let text = require('./text.txt').default;
console.log(text);
import text2 from './text.txt';
console.log(text2);
import './style.scss';
import './style.sass';
import './style.css';
import './index.coffee';
import './index.ts';