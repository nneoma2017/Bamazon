//install node packages

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('Table');


//create connection and provide login credentials 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


//
connection.connect(function(err) {
  if (err) throw err;
 console.log("connected!");  
});

var beginHere = function() {

	inquirer.prompt([
			{
				name: "id",
				type: "input",
				message: "Enter the id of the product you are looking to buy",
				
			},
			{
				name: "quantity",
				message: "How many would you like to buy?",
				type: "input"
			},
		]).then (function (user) {

			connection.query('SELECT * FROM products', function(err, res) {
	    if (err) throw err;
		});

// 1. display table to user
//2. Use inquirer to ask user about product 
//3. 
