var chalk = require('chalk');
var validator = require('validator');



var result = validator.isEmail("rishabh@gmail.com");

console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));
