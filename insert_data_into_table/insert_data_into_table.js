var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log('Database Connected');
	var sql = "INSERT INTO firstnodejstable (name,age,sex) VALUES ('RISHABH GUPTA',23,'MALE')";
	con.query(sql, function(err,result){
		if (err) throw err;
		console.log('DATA INSERTED SUCCESSFULLY');
	});
});