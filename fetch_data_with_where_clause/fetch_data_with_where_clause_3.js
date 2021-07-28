var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'RISHABH GUPTA';
  var sex = 'MALE';
  var sql = 'SELECT * FROM firstnodejstable WHERE name = ? OR sex = ?';
  con.query(sql, [name, sex], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});  