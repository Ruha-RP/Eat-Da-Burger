//============
//DEPENDANCIES
//============

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

//================
//MySQL CONNECTION
//================

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

//==================
//EXPRESS CONNECTION
//==================

var app = express();
var PORT = 8080;

//Listening
app.listen(PORT, function() {
	console.log("listening on PORT: ", PORT);
});

