var http = require('http');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'',
	user:'root',
	password:'',
	database:'sherroTest'
});

connection.connect();


//查
var query1 = 'SELECT * FROM employee;';
connection.query(query1,function(err,result,fields){
	if(err){
		console.log('[QUERY ERROR]' + err.message);
	}else{
		console.log('--------------QUERY--------------------');
		console.log('-------------------------------------');
		console.log(result);
	}
})


//改
var update1 = "UPDATE employee SET birth = ? WHERE id = ?";
//var updateParams = [Date.now(),1];
var updateParams = ["1994-06-23 20:08:08",1];
connection.query(update1,updateParams,function(err,result){
	if(err){
		console.log('[UPDATE ERROR]' + err.message);
	}else{
		console.log('--------------UPDATE-----------------');
		console.log('UPDATE SUCCESS 成功影响了：' + result.affectedRows + '行');   //成功影响了X行
		console.log('-------------------------------------');
		console.log(result);
	}
});


//增
var add1 = 'INSERT INTO employee (id,name,gender,birth,salary,job,deptno) VALUES (?,?,?,?,?,?,?)';
var addParams = [2,'henry','M','1994-4-16 06:01:09',4000.00,'test',5];
connection.query(add1,addParams,function(err,result,fields){
	if(err){
		console.log('[INSERT ERROR]' + err.message);
	}else{
		console.log('--------------ADD--------------------');
		console.log('ADD SUCCESS 成功影响了：' + result.affectedRows + '行');   //成功增加了X行
		console.log('-------------------------------------');
		console.log(result);
	}
})


//删
var del1 = 'DELETE FROM employee where id =?';
var delParams = [2];
connection.query(del1,delParams,function(err,result,fields){
	if(err){
		console.log('[DEL ERROR]' + err.message);
	}else{
		console.log('--------------DEL--------------------');
		console.log('DEL SUCCESS 成功影响了：' + result.affectedRows + '行');   //成功删除了X行
		console.log('-------------------------------------');
		console.log(result);
	}
})

connection.end();