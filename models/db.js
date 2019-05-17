'user strict';

var mysql = require('mysql');

// MySQL connection config
var connection  = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'admin',
    password : 'admin',
    database : 'inventory',
    multipleStatements: true   
});                    

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = connection;