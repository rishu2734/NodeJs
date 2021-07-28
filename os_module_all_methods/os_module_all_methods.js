var os = require('os');

var arch = os.arch();
console.log('My OS Architecture is: ' +arch);

var platform = os.platform();
console.log('My OS Platform is: ' +platform);

var freemem = os.freemem();
var totalmem = os.totalmem();
var hostname = os.hostname();

console.log('My Computers Free Memory is: ' +freemem);
console.log('My Computers Free Memory in GB is: ' +`${freemem / 1024 / 1024 / 1024}`);
console.log('My Computers Total Memory is: ' +totalmem);
console.log('My Computers Total Memory in GB is: ' +`${totalmem / 1024 / 1024 / 1024}`);
console.log('My Computers Host Name is: ' +hostname);

var platform = os.platform();
var release = os.release();
var tempdir = os.tmpdir();

console.log('My Computer Platform is: ' +platform);
console.log('My Computer Release is: ' +release);
console.log('My Computer Temporary Directory Name is: ' +tempdir);

var type = os.type();
var uptime = os.uptime();
var userinfo = os.userInfo();

console.log('My Computer Operating System name is: ' +type);
console.log('My Computer Uptime is: ' +uptime);
console.log('My Computer User Info is: ' +userinfo);