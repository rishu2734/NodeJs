var jsonData = {
    name : "Rishabh Gupta",
    age : 23,
    profession : "Software Engineer"
}

var data_in_json = JSON.stringify(jsonData);
console.log(data_in_json);

//the above stringify is used when you want to convert your object data into json format.

var obj_data = JSON.parse(data_in_json);
console.log(obj_data);

//the above parse is used when you fetch json data from any server and want to show it in object data i.e. simple data on your website.
