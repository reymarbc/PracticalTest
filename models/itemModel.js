'user strict';
var sql = require('./db.js');

//Item object constructor
var Item = function(item) {
    this.name = item.name;
    this.quantity = item.quantity;
    this.amount = item.amount;
};

Item.createItem = (newItem, result) => {    
    sql.query("INSERT INTO tblItems SET strName = ?, intQuantity = ?, dcmlAmount = ?", 
        [newItem.name, newItem.quantity, newItem.amount], function (err, res) {
        if(err) {
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });           
};

Item.getItemByID = (itemID, result) => {
    sql.query("SELECT * FROM tblItems WHERE intID = ? ", itemID, function (err, res) {       
        if(err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });   
};

Item.getAllItems = (result) => {
    sql.query("SELECT * FROM tblItems", function (err, res) {
        console.log("Loading items");
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });   
};

Item.updateByID = function(itemID, item, result){
    sql.query("UPDATE tblItems SET strName = ?, intQuantity = ?, dcmlAmount = ? WHERE intID = ?",
             [item.name, item.quantity, item.amount, itemID], function (err, res) {     
        if(err) {
           result(err, null);
        } else {
            result(null, res);
        }
    }); 
};

Item.removeByID = function(itemID, result){
    sql.query("DELETE FROM tblItems WHERE intID = ?", [itemID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    }); 
};

module.exports = Item;
