const fs = require('fs');

const buf_data = fs.readFileSync("file1.txt");
console.log('This is the binary value of data written in file.');
console.log(buf_data);
console.log('This is the data written in file.');
console.log(buf_data.toString());
