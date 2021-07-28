var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO firstnodejstable (name, age, sex) VALUES ?";
  var values = [
    ['John', 32, 'Male'],
    ['Peter', 23, 'Male'],
    ['Amy', 15, 'Female'],
    ['Hannah', 12, 'Male'],
    ['Viola', 52, 'Female']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});