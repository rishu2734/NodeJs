var chalk = require('chalk');
var validator = require('validator');

console.log(chalk.yellow.inverse("This text has yellow background"));

var result = validator.isEmail("rishabhgmail.com");

console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));
