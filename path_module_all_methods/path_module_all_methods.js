var path = require('path');

console.log('My File Directory Name is: ' +path.dirname("C:\Users\harsh\NodeJs Projects Files\path_module_all_methods.js"));
console.log('My File Extension Name is: ' +path.extname("C:\Users\harsh\NodeJs Projects Files\path_module_all_methods.js"));
console.log('My File Base Name is: ' +path.basename("C:\Users\harsh\NodeJs Projects Files\path_module_all_methods.js"));

console.log(path.parse("C:\Users\harsh\NodeJs Projects Files\path_module_all_methods.js"));