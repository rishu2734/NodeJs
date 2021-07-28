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
	var sql = "CREATE TABLE firstnodejstable (name VARCHAR(255), age INTEGER(2), sex VARCHAR(10))";
	con.query(sql, function(err,result){
		if (err) throw err;
		console.log('TABLE CREATED');
	});
});