var mysql = require('mysql');
var db = {};

db.query = function slqback(sqllan,fn){
	var connection = mysql.net.createConnection({
		host:'47.101.33.203',
		user:'root',
		password:'P@ssw0rd',
		database:'sherroTest',
		port:3306
	});

connection.connect(function(err){
	if(err){
		console.log(err);
		return;
	}
});

var sql = sqllan;
if(!sql)return;
connection.query(sql,function(err,rows,fields){
	if(err){
		console.log(err);
		return;
	}
	fn(rows);
});

connection.end(function(err){
	if(err){
		return;
	}else{
		console.log('连接关闭');
	}
})
//console.log('Connection Successfully');
module.exports = db;

}

