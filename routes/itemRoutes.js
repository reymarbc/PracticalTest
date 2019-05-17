'use strict';

// CRUD wrapper
module.exports = function(app) {
  var itemController = require('../controllers/itemController');

  app.get('/', (req, res) => {
    res.render('itemView');
  });

  // itemController Routes
  app.route('/items')
    .get(itemController.list_all_items)
    .post(itemController.create_an_item);
   
   app.route('/items/:itemID')
    .get(itemController.read_an_item)
    .put(itemController.update_an_item)
    .delete(itemController.delete_an_item);
};