'use strict';
import { greetUser, toUpperCase } from './utils.js';
import _ from 'lodash';

const name = 'John Doe';
console.log(greetUser(name));
console.log(toUpperCase('hello world'));
const array = [1, 2, 3, 4, 5];
console.log(_.shuffle(array));
