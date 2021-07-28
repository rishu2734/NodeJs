/*
    1. convert object data in json
    2. store the converted json data in any file
    3. read that file
    4. again convert json data to object data
    5. print original it on console 
*/
var fs = require('fs');

var original_data = {
    name : "RISHABH GUPTA",
    age : 23,
    profession : "Software Engineer"
}

var data_in_json = JSON.stringify(original_data);
fs.writeFile('file1.txt', data_in_json, function(err){
    if(err) throw err;
    console.log('Data successfully stored in file');
});

fs.readFile('file1.txt', 'utf-8', function(err,data){
    if(err) throw err;
    console.log();
    console.log('The Data In File Is:');
    console.log();
    console.log(data);

    var converted_file_data_from_json = JSON.parse(data);
    console.log();
    console.log('The Original Data is:');
    console.log();
    console.log(converted_file_data_from_json);
    console.log();
});


