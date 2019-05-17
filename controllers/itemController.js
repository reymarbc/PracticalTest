'use strict';

var Item = require('../models/itemModel.js');

exports.list_all_items = function(req, res) {
    Item.getAllItems(function(err, items) {

        if (err)
            res.send(err);
        else    
            res.json(items);
    }); 
};

exports.create_an_item = function(req, res) {
    let new_item = req.body;

    //handles null error 
    if(!new_item.name || !new_item.amount || !new_item.quantity){
        res.status(400).send({ error:true, message: 'Please provide name/quantity/amount' });
    } else {
    
        Item.createItem(new_item, function(err, item) {
            if (err)
                res.send(err);
            else 
                res.json(item);
        });
    }
};
  
exports.read_an_item = function(req, res) {
    Item.getItemByID(req.params.itemID, function(err, item) {
        if (err)
            res.send(err);
        else 
            res.json(item);
    });
};
  
exports.update_an_item = function(req, res) {
    Item.updateByID(req.params.itemID, req.body, function(err, item) {
        if (err)
           res.send(err);
        else
            res.json(item);
    });
};
  
exports.delete_an_item = function(req, res) {
    Item.removeByID( req.params.itemID, function(err, item) {
        if (err)
            res.send(err);
        else
            res.json(item);
    });
};
