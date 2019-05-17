// Require packages and set the port

const express = require('express'),
app = express(),
bodyParser = require('body-parser');
var port = process.env.PORT || 8080;


// Use Node.js body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

var routes = require('./routes/itemRoutes'); //importing route
routes(app); //register the route

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
