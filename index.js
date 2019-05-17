// Require packages and set the port

const express = require('express'),
app = express(),
bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var path = require('path');
// Use Node.js body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var routes = require('./routes/itemRoutes'); //importing route
routes(app); //register the route

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
